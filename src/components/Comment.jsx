import React, { Component } from 'react';
import AuthDelete from './AuthDelete';
import Delete from './Delete';
import Vote from './Vote';
import { updateCommentVotes } from '../api';

class Comment extends Component {

    state = {
        voteChange: 0
    }

    render() {
        const { comment, handleDelete, user } = this.props
        const voteToDisplay = comment.votes + this.state.voteChange;
        const voteColour = voteToDisplay >= 0 ? 'green' : 'red'
        return (
            <div className="comment">
                <p className="comment-body">{comment.body}</p>
                <h5 className="comment-author">by {comment.author}</h5>
                <AuthDelete author={comment.author} user={user}>
                    <Delete className="comment-delete" handleDelete={handleDelete} />
                </AuthDelete>
                <div className="comment-voteIcon">
                    <Vote item={comment} changeVote={() => { this.changeVote(comment, 1) }} type='up' />
                    <p className={voteColour} >{voteToDisplay}</p>
                    <Vote item={comment} changeVote={() => { this.changeVote(comment, -1) }} type='down' />
                </div>
            </div>
        )
    }

    changeVote = (comment, change) => {
        this.setState((prevState => {
            if (prevState.voteChange !== change) {
                const newVoteVal = prevState.voteChange + change;
                updateCommentVotes(comment.comment_id, change);
                return { voteChange: newVoteVal }
            }
        }))
    }
}


export default Comment;
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
        return (
            <div>
                <p>{comment.body}</p>
                <h5>by {comment.author}</h5>
                <AuthDelete author={comment.author} user={user}>
                    <Delete handleDelete={handleDelete} />
                </AuthDelete>
                <Vote item={comment} changeVote={() => { this.changeVote(comment, 1) }} type='like' />
                <p>{comment.votes + this.state.voteChange}</p>
                <Vote item={comment} changeVote={() => { this.changeVote(comment, -1) }} type='dislike' />
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
import React, { Component } from 'react';
import { getComments, deleteComment } from '../api';
import Comment from './Comment';
import NewComment from './NewComment';

class CommentsList extends Component {

    state = {
        comments: []
    }

    render() {

        const { comments } = this.state;
        const { article_id, user } = this.props;

        return (
            <div className="comments">
                <h3>COMMENTS</h3>
                <NewComment article_id={article_id} user={user} updateComments={this.updateComments} />
                {comments.map(comment => {
                    return <Comment key={comment.comment_id} comment={comment} user={user} handleDelete={() => { this.handleDelete(comment.comment_id) }} />
                })}
            </div>
        )
    }

    componentDidUpdate(prevProps) {
        if (this.props.article_id !== prevProps.article_id) {
            getComments(this.props.article_id)
                .then(comments => { this.setState({ comments }) })
        } else if (this.state.isUpdated) {
            getComments(this.props.article_id)
                .then(comments => { this.setState({ comments, isUpdated: false }) })
        }
    }

    updateComments = () => {
        this.setState({ isUpdated: true })
    }

    handleDelete = (comment_id) => {
        deleteComment(comment_id)
            .then(() => {
                this.setState({ isUpdated: true })
            })
    }

}


export default CommentsList;
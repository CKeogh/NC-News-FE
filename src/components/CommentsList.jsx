import React, { Component } from 'react';
import { getComments } from '../api';
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
                <NewComment article_id={article_id} user={user} />
                {comments.map(comment => {
                    return <Comment key={comment.comment_id} comment={comment} />
                })}
            </div>
        )
    }

    // componentDidMount() {
    //     getComments(this.props.article_id)
    //         .then(comments => {
    //             this.setState({
    //                 comments: comments
    //             })
    //         })
    // }

    componentDidUpdate(prevProps) {
        if (this.props.article_id !== prevProps.article_id) {
            getComments(this.props.article_id)
                .then(comments => {
                    this.setState({
                        comments: comments
                    })
                })
        }
    }
}


export default CommentsList;
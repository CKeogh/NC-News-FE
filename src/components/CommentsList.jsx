import React, { Component } from 'react'
import { getComments } from '../api';
import Comment from './Comment';

class CommentsList extends Component {

    state = {
        comments: []
    }

  render() {

    const { comments } = this.state;
    
    return (
         <div className="comments">
            <h3>COMMENTS</h3>
            {comments.map(comment => {
                return <Comment key={comment.comment_id}comment={comment}/>
            })}
        </div>
    )
  }

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
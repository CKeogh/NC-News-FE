import React, { Component } from 'react'
import { postComment } from '../api';

class NewComment extends Component {

    state = {
        commentBody: ''
    }


    render() {
        return (
            <div>
                <textarea id="newComment-field" value={this.state.commentBody} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>post</button>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({
            commentBody: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            username: this.props.user,
            body: this.state.commentBody
        };
        if (newComment.username && newComment.body) {
            this.setState({ commentBody: '' });
            postComment(this.props.article_id, newComment)
                .then(comment => {
                    this.props.updateComments()
                })
        } else if (!newComment.username) {
            alert('you must be signed in to post comments')
        }
    }
}

export default NewComment;
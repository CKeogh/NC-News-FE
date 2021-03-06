import React, { Component } from 'react'
import { postComment } from '../api';

class NewComment extends Component {

    state = {
        commentBody: '',
        error: {
            body: ''
        }
    }

    render() {
        return (
            <form className="newComment">
                <textarea id="newComment-field" className={this.state.error.body} required value={this.state.commentBody} onChange={this.handleChange} />
                <button id="newComment-submit" onClick={this.handleSubmit}>post</button>
            </form>
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
            this.setState({ commentBody: '', error: { body: '' } });
            postComment(this.props.article_id, newComment)
                .then(comment => {
                    this.props.updateComments()
                })
        } else if (!newComment.username) {
            alert('you must be signed in to post comments')
        } else if (!newComment.body) {
            this.setState({ error: { body: 'redBorder' } })
        }
    }
}

export default NewComment;
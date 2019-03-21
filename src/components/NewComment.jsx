import React, { Component } from 'react'
import { postComment } from '../api';
import { navigate } from '@reach/router/lib/history';

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
        this.setState({ commentBody: '' });
        postComment(this.props.article_id, newComment)
            .then(comment => {
                this.props.updateComments()
            })
            .catch(err => {
                navigate('/error')
            })
    }
}

export default NewComment;
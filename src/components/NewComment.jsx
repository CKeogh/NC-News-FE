import React, { Component } from 'react'
import { postComment } from '../api';

class NewComment extends Component {

    state = {
        commentBody: ''
    }


    render() {
        return (
            <div>
                <textarea id="newComment-field" defaultValue='' onChange={this.handleChange} />
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
        this.props.updateComments()
        postComment(this.props.article_id, newComment)
            .then(comment => {
                this.props.updateComments()
            })
    }
}

export default NewComment;
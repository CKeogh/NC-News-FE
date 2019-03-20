import React, { Component } from 'react'
import { postComment } from '../api';
import { navigate } from '@reach/router';

class NewComment extends Component {

    state = {
        commentBody: ''
    }


    render() {
        console.log()
        return (
            <div>
                <textarea id="newComment-field" onChange={this.handleChange} />
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
        console.log(newComment.author)
        postComment(this.props.article_id, newComment)
            .then(comment => {
                console.log(comment)
            })
    }
}

export default NewComment;
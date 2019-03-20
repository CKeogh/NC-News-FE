import React, { Component } from 'react'
import { postComment } from '../api';

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

    handleSubmit = () => {
        const newComment = {
            user: this.props.user,
            body: this.state.commentBody
        };
        postComment(this.props.article_id, newComment)
            .this(comment => {
                console.log(comment);
            })
    }
}

export default NewComment;
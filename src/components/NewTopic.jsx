import React, { Component } from 'react';
import { postTopic } from '../api';
import { navigate } from '@reach/router';
import formatSlug from '../utils/formatSlug';

class NewTopic extends Component {

    state = {
        title: '',
        description: ''
    }
    render() {

        return (
            <div>
                <h2>Choose a title and description for your topic</h2>
                <label htmlFor="newTopicTitle">Title</label>
                <input onChange={(event) => { this.handleChange('title', event.target.value) }} id="newTopicTitle" type="text"></input>
                <label htmlFor="newTopicDesc">description</label>
                <input onChange={(event) => { this.handleChange('description', event.target.value) }} id="newTopicDesc" type="text"></input>
                <button onClick={this.handleTopicSubmit} >Submit</button>
            </div>
        )
    }

    handleChange(key, value) {
        this.setState({ [key]: value })
    }

    handleTopicSubmit = () => {

        const newTopic = {
            slug: formatSlug(this.state.title),
            description: this.state.description
        }
        if (!newTopic.slug) alert('please give your topic a title')
        else if (!this.props.user) alert('you must be logged in to post a new topic')
        else {
            postTopic(newTopic)
                .then(topic => {
                    this.props.updateTopics()
                    navigate('/new-article', { state: { topic: topic.slug } })
                })
                .catch(err => {
                    navigate('/error')
                })
        }
    }
}

export default NewTopic;
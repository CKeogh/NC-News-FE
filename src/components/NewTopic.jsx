import React, { Component } from 'react';
import { postTopic } from '../api';
import { navigate } from '@reach/router';
import { formatSlug } from '../utils/formatSlug';

class NewTopic extends Component {

    state = {
        title: '',
        description: ''
    }
    render() {

        return (
            <div className="newTopic">
                <h2 className="newTopic-title" >Choose a title and description for your topic</h2>
                <label className="newTopic-slug" htmlFor="newTopicTitle">Title</label>
                <input className="newTopic-slug-input" placeholder="e.g. JavaScript" onChange={(event) => { this.handleChange('title', event.target.value) }} id="newTopicTitle" type="text"></input>
                <label className="newTopic-desc" htmlFor="newTopicDesc">description</label>
                <input className="newTopic-desc-input" placeholder="e.g. all about JavaScript" onChange={(event) => { this.handleChange('description', event.target.value) }} id="newTopicDesc" type="text"></input>
                <button className="newTopic-submit" onClick={this.handleTopicSubmit} >Submit</button>
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
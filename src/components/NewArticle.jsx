import React, { Component } from 'react';
import { navigate } from '@reach/router'
import { postArticle } from '../api';

class NewArticle extends Component {
    state = {
        title: '',
        body: '',
        topic: 'coding'
    }
    render() {
        const { topics } = this.props
        return (
            <form method="post" id="newArticle">
                <textarea placeholder="Choose a title" onChange={(event) => this.handleChange('title', event.target.value)} id="newArticle-title" form_id="newArticle" />
                <textarea placeholder="Write your article" onChange={(event) => this.handleChange('body', event.target.value)} id="newArticle-body" form_id="newArticle" />

                <select id="newArticle-topic" value={this.state.topic} onChange={(event) => this.handleChange('topic', event.target.value)}>
                    {topics.map(topic => {
                        return <option key={`topicselect-${topic.slug}`} value={topic.slug}>{topic.slug}</option>
                    })}
                </select>

                <button id="newArticle-submit" onClick={this.handleSubmit} type="submit" value="post article">post article</button>
            </form>
        )
    }

    componentDidMount() {
        const { topic } = this.props.location.state
        if (topic) {
            this.setState({ topic })
        }
    }

    handleChange(key, value) {
        this.setState({ [key]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, body, topic } = this.state;

        const newArticle = {
            title, body, topic, author: this.props.user
        };
        if (!newArticle.title || !newArticle.body) alert('please fill in all fields')
        else if (!newArticle.author) alert('you must be logged in to post an article')
        else {
            postArticle(newArticle)
                .then(newArticle => {
                    navigate(`/articles/${newArticle.article_id}`)
                })
                .catch(err => {
                    navigate('/error')
                })
        }
    }



}


export default NewArticle;
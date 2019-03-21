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
            <form action="" method="post" id="newArticle">
                <textarea onChange={(event) => this.handleChange('title', event.target.value)} id="newArticle-title" value={this.state.title} form_id="newArticle" />
                <textarea onChange={(event) => this.handleChange('body', event.target.value)} id="newArticle-body" value={this.state.body} form_id="newArticle" />

                <select value={this.state.topic} onChange={(event) => this.handleChange('topic', event.target.value)}>
                    {topics.map(topic => {
                        return <option key={`topicselect-${topic.slug}`} value={topic.slug}>{topic.slug}</option>
                    })}
                </select>

                <input type="submit" onClick={this.handleSubmit} value="post article"></input>
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
        postArticle(newArticle)
            .then(newArticle => {
                navigate(`/articles/${newArticle.article_id}`)
            })
            .catch(err => {
                navigate('/error')
            })
    }



}


export default NewArticle;
import React, { Component } from 'react';
import { getArticles } from '../api';
import { Router } from '@reach/router';
import ArticleList from './ArticleList';
import Article from './Article';
import NewArticle from './NewArticle';

class MainContent extends Component {

  state = {
    articles: []
  }
  render() {

    return (
      <Router>
        <NewArticle topics={this.props.topics} user={this.props.user} path="/new-article" />
        <ArticleList path="/" topic={this.props.topic} />
        <Article path="/:article_id" user={this.props.user} />
      </Router>
    )
  }

  componentDidMount() {
    getArticles()
      .then(articles => {
        this.setState({
          articles: articles
        })
      })
  }
}


export default MainContent;

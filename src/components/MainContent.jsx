import React, { Component } from 'react';
// import articles from '../placeholderData/articles';
import { getArticles } from '../api';
import {Router} from '@reach/router';
import ArticleList from './ArticleList';
import Article from './Article';

class MainContent extends Component {

  state = {
    articles: []
  }
  render() {

    return (
      <Router>
        <ArticleList path="/" topic={this.props.topic}/>
        <Article path="/:article_id"/>
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

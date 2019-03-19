import React, { Component } from 'react'
import articles from '../placeholderData/articles'

class MainContent extends Component {

  state = {
    articles: articles
  }
  render() {
    const { articles } = this.state;
    return (
      <ul>
        {articles.map(article => {
          return <li key={article.article_id}>
            <h3>{article.title}</h3>
            <h5>{article.author}</h5>
            <h6>{article.topic}</h6>
          </li>
        })}
      </ul>
    )
  }
}


export default MainContent;

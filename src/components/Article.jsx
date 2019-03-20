import React, { Component } from 'react'
import { getArticle } from '../api'
import CommentsList from './CommentsList';

class Article extends Component {

  state = {
    article: {}
  }

  render() {

    const { article } = this.state;

    return (

      <div>
        <div className="article">
          <h2>{article.title}</h2>
          <h5>by {article.author}</h5>
          <p>{article.body}</p>
        </div>
        <CommentsList article_id={article.article_id} user={this.props.user} />
      </div>
    )
  }

  componentDidMount() {
    getArticle(this.props.article_id)
      .then(article => {
        this.setState({
          article: article
        })
      })
  }
}

export default Article;
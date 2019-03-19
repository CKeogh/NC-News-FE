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
          <h3>{article.title}</h3>
          <h5>by {article.author}</h5>
          <p>
          {article.body}
          </p>
        </div>
        <CommentsList article_id={article.article_id}/>
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
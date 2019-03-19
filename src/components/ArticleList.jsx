import React, { Component } from 'react'
import { Link } from '@reach/router';
import { getArticles } from '../api'

class ArticleList extends Component {

    state = {
        articles: []
      }

  render() {
      const { articles } = this.state;
    return <ul>
        {articles.map(article => {
            return <Link key={article.article_id} to={`/articles/${article.article_id}`}>
                <li>
                    <h2>{article.title}</h2>
                    <h3>{article.author}</h3>
                    <h4>{article.topic}</h4>
                </li>
            </Link>
        })}
    </ul>

  }

  componentDidMount() {
    getArticles(this.props.topic)
      .then(articles => {
        this.setState({
          articles: articles
        })
      })
  }

}

export default ArticleList;
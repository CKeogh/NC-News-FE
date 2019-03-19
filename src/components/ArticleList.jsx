import React, { Component } from 'react'
import { Link } from '@reach/router';
import { getArticles } from '../api'
import ArticleCard from './ArticleCard';

class ArticleList extends Component {

    state = {
        articles: []
      }

  render() {

    const { articles } = this.state;

    return <ul>
        {articles.map(article => {
            return <Link key={article.article_id} to={`/articles/${article.article_id}`}>
                <ArticleCard article={article}/>
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
import React, { Component } from 'react'
import { Link } from '@reach/router';
import { getArticles } from '../api'
import ArticleCard from './ArticleCard';

class ArticleList extends Component {

  state = {
    articles: [],
    order: 'date',
    orderBy: 'desc'
  }

  render() {

    const { articles } = this.state;

    return <div>
      <select onClick={(event) => { this.handleSelect('order', event.target.value) }} className="orderSelect">
        <option value="created_at">date</option>
        <option value="votes">votes</option>
        <option value="comment_count">comments</option>
      </select>
      <select onClick={(event) => { this.handleSelect('orderBy', event.target.value) }} className="orderBySelect">
        <option value="desc">high to low</option>
        <option value="asc">low to high</option>
      </select>
      <ul>
        {articles.map(article => {
          return <Link key={article.article_id} to={`/articles/${article.article_id}`}>
            <ArticleCard article={article} />
          </Link>
        })}
      </ul>
    </div>

  }

  componentDidMount() {
    getArticles(this.props.topic)
      .then(articles => {
        this.setState({
          articles: articles
        })
      })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.order !== this.state.order || prevState.orderBy !== this.state.orderBy) {
      getArticles(this.props.topic, this.state.order, this.state.orderBy)
        .then(articles => {
          this.setState({
            articles: articles
          })
        })
    }
  }

  handleSelect = (key, value) => {
    this.setState({
      [key]: value
    })
  }
}

export default ArticleList;
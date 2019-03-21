import React, { Component } from 'react'
import { getArticles, deleteArticle } from '../api'
import ArticleCard from './ArticleCard';

class ArticleList extends Component {

  state = {
    articles: [],
    order: 'date',
    orderBy: 'desc',
    isUpdated: false,
    isLoading: true
  }

  render() {
    const { articles } = this.state;
    if (this.state.isLoading) return <h2>Content loading...</h2>
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
          return <div key={article.article_id}>
            <ArticleCard handleDelete={() => { this.handleDelete(article.article_id) }} article={article} user={this.props.user} />
          </div>
        })}
      </ul>
    </div>

  }

  componentDidMount() {
    getArticles(this.props.topic)
      .then(articles => {
        this.setState({
          articles,
          isLoading: false
        })

      })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.order !== this.state.order || prevState.orderBy !== this.state.orderBy || this.state.isUpdated) {
      getArticles(this.props.topic, this.state.order, this.state.orderBy)
        .then(articles => {
          this.setState({
            articles,
            isUpdated: false
          })

        })
    }
  }

  handleSelect = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  handleDelete = (article_id) => {
    this.setState(prevState => {
      const newArticles = prevState.articles.filter(article => {
        return article.article_id !== article_id
      })
      return { articles: newArticles }
    })
    deleteArticle(article_id)
  }
}

export default ArticleList;
import React, { Component } from 'react'
import { Link } from '@reach/router';
import { getArticles } from '../api'
import ArticleCard from './ArticleCard';

class ArticleList extends Component {

    state = {
        articles: [],
        order: 'date'
      }

  render() {

    const { articles } = this.state;

    return <div>
        <select onClick={this.handleSelect} className="orderSelect">
            <option value="created_at">date</option>
            <option value="votes">votes</option>
            <option value="comment_count">comments</option>
          </select>
        <ul>
          {articles.map(article => {
              return <Link key={article.article_id} to={`/articles/${article.article_id}`}>
                  <ArticleCard article={article}/>
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
    if (prevState.order !== this.state.order) {
      getArticles(this.props.topic, this.state.order)
        .then(articles => {
          this.setState({
            articles: articles
          })
        })
    }
  }

  handleSelect = (event) => {
    this.setState({
      order: event.target.value
    })
  }
}

export default ArticleList;
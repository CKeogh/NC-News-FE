import React, { Component } from 'react'
import { getArticle, updateArticleVotes } from '../api'
import CommentsList from './CommentsList';
import Vote from './Vote';
import Loading from './Loading';
import { navigate } from '@reach/router/lib/history';

class Article extends Component {

  state = {
    article: {},
    voteChange: 0,
    isLoading: true
  }

  render() {

    const { article, isLoading } = this.state;
    if (isLoading) return <Loading />
    return (

      <div>
        <div className="article">
          <h2 className="article-title" >{article.title}</h2>
          <h5 className="article-author" >by {article.author}</h5>
          <p className="article-body" >{article.body}</p>
        </div>
        <Vote item={article} changeVote={() => { this.changeVote(article, 1) }} type={'up'} />
        <p>{article.votes + this.state.voteChange}</p>
        <Vote className="voteDown" item={article} changeVote={() => { this.changeVote(article, -1) }} type={'down'} />
        <CommentsList article_id={article.article_id} user={this.props.user} />
      </div>
    )
  }

  componentDidMount() {
    getArticle(this.props.article_id)
      .then(article => {
        this.setState({
          article,
          isLoading: false
        })
      })
      .catch(err => {
        navigate('/error')
      })
  }

  changeVote = (article, change) => {
    this.setState((prevState => {
      if (prevState.voteChange !== change) {
        const newVoteVal = prevState.voteChange + change;
        updateArticleVotes(article.article_id, change);
        return { voteChange: newVoteVal }
      }
    }))
  }
}

export default Article;
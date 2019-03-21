import React, { Component } from 'react'
import { getArticle, updateArticleVotes } from '../api'
import CommentsList from './CommentsList';
import Vote from './Vote';

class Article extends Component {

  state = {
    article: {},
    voteChange: 0
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
        <Vote item={article} changeVote={() => { this.changeVote(article, 1) }} type={'like'} />
        <p>Votes: {article.votes + this.state.voteChange}</p>
        <Vote item={article} changeVote={() => { this.changeVote(article, -1) }} type={'dislike'} />
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

  changeVote = (article, change) => {

    this.setState((prevState => {
      if (prevState.voteChange !== change) {
        console.log(prevState.voteChange)
        const newVoteVal = prevState.voteChange + change;
        updateArticleVotes(article.article_id, change);
        return { voteChange: newVoteVal }
      }
    }))
  }
}

export default Article;
import React from 'react';
import { Link } from '@reach/router';
import AuthDelete from './AuthDelete';
import Delete from './Delete';
import { commentCountToString } from '../utils/commentCountToString';

const ArticleCard = ({ article, handleDelete, user }) => {

    const dateCreated = new Date(article.created_at)
    const voteColour = article.votes >= 0 ? 'green' : 'red'

    return <li className="articleCard">
        <Link className="articleCard-title" to={`/articles/${article.article_id}`}>
            <h2 >{article.title}</h2>
        </Link>
        <h3 className="articleCard-author">posted by {article.author}</h3>
        <Link className="articleCard-topic" to={`/${article.topic}`}>
            <h4 >{article.topic}</h4>
        </Link>

        <div className="articleInfo">
            <p className={`articleCard-votes ${voteColour}`}>{article.votes}</p>
            <p className="articleCard-comment_count">{commentCountToString(article.comment_count)}</p>
            <p className="articleCard-created_at">{dateCreated.toDateString()}</p>
            <AuthDelete author={article.author} user={user} >
                <Delete handleDelete={handleDelete} />
            </AuthDelete>
        </div>
    </li>
}

export default ArticleCard;
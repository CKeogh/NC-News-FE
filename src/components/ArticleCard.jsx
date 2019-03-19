import React from 'react';

const ArticleCard = ({article}) => {

    const dateCreated = new Date(article.created_at)
    const s = article.comment_count === 1 ? '' : 's'
    const commentCountString = `${article.comment_count} comment${s}`

    return <li className="articleCard">
        <h2 className="articleCard-title">{article.title}</h2>
        <h3 className="articleCard-author">posted by {article.author}</h3>
        <h4 className="articleCard-topic">{article.topic}</h4>
        
        <div className="articleInfo">
            <p className="articleCard-votes">{article.votes}</p>
            <p className="articleCard-comment_count">{commentCountString}</p>
            <p className="articleCard-created_at">created: {dateCreated.toDateString()}</p>
        </div>
    </li>
}

export default ArticleCard;
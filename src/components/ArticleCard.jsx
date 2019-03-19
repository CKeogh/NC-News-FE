import React from 'react';

const ArticleCard = ({article}) => {
    return <li className="articleCard">
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <h4>{article.topic}</h4>
    </li>
}

export default ArticleCard;
import React from 'react';

const Vote = ({ article, changeVote }) => {
    return (
        <div>
            <p>Votes: {article.votes}</p>
            <button onClick={changeVote}>like</button>
            <button onClick={changeVote}>dislike</button>
        </div>
    )
}

export default Vote;
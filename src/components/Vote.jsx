import React from 'react';

const Vote = ({ item, changeVote, type }) => {
    return (
        <div>
            <button onClick={changeVote}>{type}</button>
        </div>
    )
}

export default Vote;
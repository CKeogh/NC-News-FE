import React from 'react';

const Vote = ({ item, changeVote, type }) => {
    return (
        <i className={`fas fa-angle-${type}`} onClick={changeVote} />
    )
}

export default Vote;
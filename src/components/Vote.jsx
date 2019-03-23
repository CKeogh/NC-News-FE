import React from 'react';

const Vote = ({ item, changeVote, type }) => {
    return (
        <i className={`fas fa-angle-${type} arrow-button`} onClick={changeVote} />
    )
}

export default Vote;
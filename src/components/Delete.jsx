import React from 'react';

const Delete = ({ handleDelete }) => {
    return (
        <i onClick={handleDelete} className="fas fa-trash-alt comment-delete"></i>
        // <button onClick={handleDelete} className="comment-delete">delete</button>
    )
}

export default Delete;
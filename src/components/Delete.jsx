import React from 'react';

const Delete = ({ handleDelete }) => {
    return (
        <i onClick={handleDelete} className="fas fa-trash-alt comment-delete"></i>
    )
}

export default Delete;
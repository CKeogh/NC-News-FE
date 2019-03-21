import React from 'react';

const Delete = ({ handleDelete }) => {
    return (
        <button onClick={handleDelete} className="deleteButton">delete</button>
    )
}

export default Delete;
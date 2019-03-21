import React from 'react';
import Auth from './Auth';
import Delete from './Delete';

const Comment = ({ comment, handleDelete, author, user }) => {
    return (
        <div className="comment">
            <p>{comment.body}</p>
            <h5>by {comment.author}</h5>
            <Auth author={comment.author} user={user}>
                <Delete handleDelete={handleDelete} />
            </Auth>
        </div>
    )
}

export default Comment;
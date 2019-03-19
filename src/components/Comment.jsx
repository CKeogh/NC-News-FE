import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className="comment">
            <p>{comment.body}</p>
            <h5>by {comment.author}</h5>
        </div>
    )
}

export default Comment;
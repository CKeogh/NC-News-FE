import React from 'react';

const UserHead = ({ setUser, username, userData }) => {
    const currentUser = userData.filter(user => {
        return user.username === username
    })[0]

    return (
        <div>
            <h3>logged in as {currentUser.username}</h3>
            <img className="avatarImg" alt="users avatar" src={currentUser.avatar_url}></img>
            <button onClick={() => { setUser('') }}>logout</button>
        </div>
    )
}

export default UserHead;
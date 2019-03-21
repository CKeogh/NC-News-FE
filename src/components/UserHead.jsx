import React from 'react';

const UserHead = ({ setUser, username, userData }) => {
    const currentUser = userData.filter(user => {
        return user.username === username
    })[0]

    return (
        <div className="userHead">
            <h3>logged in as {currentUser.username}</h3>
            <img className="avatarImg" onError={(e) => { e.target.src = "https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png" }} alt="users avatar" src={currentUser.avatar_url}></img>
            <button onClick={() => { setUser('') }}>logout</button>
        </div>
    )
}

export default UserHead;
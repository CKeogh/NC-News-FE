import React from 'react';

const UserHead = ({ setUser, userData }) => {

    return (
        <div className="userHead">
            <h3 className="userHead-text">logged in as {userData.username}</h3>
            <img className="userHead-avatarImg" onError={(e) => { e.target.src = "https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png" }} alt="users avatar" src={userData.avatar_url}></img>
            <button className="userHead-logout" onClick={() => { setUser('') }}>logout</button>
        </div>
    )
}

export default UserHead;
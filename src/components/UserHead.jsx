import React from 'react';
import Loading from './Loading';

const UserHead = ({ user, setUser, userData }) => {
    if (user === '_') return <Loading />
    else return (
        <div className="userHead">
            <h3 className="userHead-text">logged in as {userData.username}</h3>

            <img className="userHead-avatarImg" onError={(e) => { e.target.src = "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" }} alt="users avatar" src={userData.avatar_url}></img>
            <button className="userHead-logout" onClick={() => { setUser('') }}>logout</button>
        </div>
    )
}

export default UserHead;
import React from 'react';
import Login from './Login';
import UserHead from './UserHead';

const AuthUser = ({ setUser, user, userData }) => {
    if (user) {
        return <UserHead setUser={setUser} username={user} userData={userData} />
    } else {
        return <Login setUser={setUser} />
    }
}

export default AuthUser;
import React from 'react';
import AuthUser from './AuthUser';
import UserHead from './UserHead';
import Login from './Login';

const FloatBar = ({ setUser, user, userData }) => {
  return (
    <div className="floatBar">
      <AuthUser user={user}>
        <UserHead setUser={setUser} userData={userData} />
        <Login setUser={setUser} />
      </AuthUser>
    </div>
  )
}

export default FloatBar;
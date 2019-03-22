import React from 'react';
import AuthUser from './AuthUser';
import UserHead from './UserHead';
import Login from './Login';

const FloatBar = ({ setUser, user, userData }) => {
  return (
    <div className="floatBar">
      <div className="login">
        <AuthUser user={user}>
          <UserHead setUser={setUser} userData={userData} />
          <Login setUser={setUser} />
        </AuthUser>
      </div>
    </div>
  )
}

export default FloatBar;
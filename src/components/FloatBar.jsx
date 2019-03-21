import React from 'react';
import AuthUser from './AuthUser';

const FloatBar = ({ setUser, user, userData }) => {
  return (
    <div className="floatBar">
      <div className="login">
        <AuthUser setUser={setUser} user={user} userData={userData} />
      </div>
    </div>
  )
}

export default FloatBar;
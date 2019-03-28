import React from 'react';
import AuthUser from './AuthUser';
import UserHead from './UserHead';
import Login from './Login';
import SideBar from './SideBar';

const FloatBar = ({ setUser, user, userData }) => {
  return (
    <div className="floatBar">
      <AuthUser user={user}>
        <UserHead user={user} setUser={setUser} userData={userData} />
        <Login setUser={setUser} />
      </AuthUser>
      <SideBar id="sideBar-small" user={user} />
    </div>
  )
}

export default FloatBar;
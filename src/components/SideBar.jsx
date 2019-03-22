import React from 'react';
import { Link } from '@reach/router';
import AuthUser from './AuthUser';

const SideBar = ({ user }) => {
    return (
        <div className="sideBar">
            <AuthUser user={user}>
                <div>
                    <Link to="/new-article"><button className="sideBar-button">Post Article</button></Link>
                    <Link to="/new-topic"><button>Create a New Topic</button></Link>
                </div>
                <p className="loginPrompt">Login to post an article and create new topics</p>
            </AuthUser>
        </div>)
}

export default SideBar;
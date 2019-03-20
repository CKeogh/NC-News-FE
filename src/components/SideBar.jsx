import React from 'react';
import { Link } from '@reach/router';

const SideBar = (props) => {
    return (
        <div className="sideBar">
            <Link to="/new-article"><button>Post Article</button></Link>
            <Link to="/new-topic"><button>Create a New Topic</button></Link>
        </div>)
}

export default SideBar;
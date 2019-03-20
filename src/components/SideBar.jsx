import React from 'react';
import { Link } from '@reach/router';

const SideBar = (props) => {
    return (
        <div className="sideBar">
            <Link to="/new-article">
                <button>Post Article</button>
            </Link>
        </div>)
}

export default SideBar;
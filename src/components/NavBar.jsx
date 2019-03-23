import React from 'react';
import { Link } from '@reach/router'

const NavBar = (props) => {
    return (
        <nav className="navBar">
            <Link className="navItem" to="/topics">Topics</Link>
        </nav>
    )
}

export default NavBar;
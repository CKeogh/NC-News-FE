import React from 'react';
import { Link } from '@reach/router'

const NavBar = ({ topics }) => {
    return (
        <nav className="navBar">
            <Link className="navItem" to="/topics">Topics</Link>
        </nav>
    )
}

export default NavBar;
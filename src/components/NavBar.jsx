import React from 'react';
import {Link} from '@reach/router'

const NavBar = ({ topics }) => {
    return <nav className="navBar">
        {topics.map((topic) => {
            return <Link className="link" key={topic.slug} to={`/${topic.slug}`}>{topic.slug}</Link>
        })}
    </nav>
}

export default NavBar;
import React from 'react';
import { capitalise } from '../utils/capitalise'


const Header = ({ title, subtitle }) => {
    return (
        <header>
            <h1 className="title">{capitalise(title)}</h1>
            <h2 className="subtitle">{subtitle}</h2>
        </header>
    )
}

export default Header;
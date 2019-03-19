import React from 'react';
import {capitalise} from '../utils/capitalise'


const Header = ({content}) => {
    return (
        <header>
            <h1>{capitalise(content.slug)}</h1>
            <h2>{content.description}</h2>
        </header>
        )
}

export default Header;
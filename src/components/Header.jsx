import React from 'react';
import {capitalise} from '../utils/capitalise'


const Header = ({topic}) => {
    return <header>
        <h1>{capitalise(topic.slug)}</h1>
        <h2>{topic.description}</h2>
    </header>
}

export default Header;
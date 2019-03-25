import React from 'react';

const Error = (props) => {

    let message = 'Page not found'
    if (props.location.state) {
        message = props.location.state.message
            ? props.location.state.message
            : 'Page not found';
    }

    return (
        <h1>{message}</h1>
    )
}

export default Error;
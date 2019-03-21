import React, { Component } from 'react'

class Login extends Component {

    state = {
        username: ''
    }
    render() {
        return (
            <div>
                <label htmlFor="usernameInput">username: </label>
                <input onChange={this.handleChange} id="usernameInput"></input>
                <button onClick={() => { this.props.setUser(this.state.username) }}>login</button>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({ username: event.target.value })
    }
}

export default Login;
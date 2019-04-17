import React, { Component } from 'react'
import { Link } from '@reach/router';

class Login extends Component {

    state = {
        username: ''
    }
    render() {
        return (
            <div className="login">
                <label id="username-label" htmlFor="usernameInput">username: </label>
                <input required onChange={this.handleChange} placeholder="example: jessjelly" id="username-input"></input>
                <button id="login-button" onClick={() => { this.props.setUser(this.state.username) }}>login</button>
                <div id="signup">
                    <Link to="/sign-up"><button id="signup-button">sign up</button></Link>
                </div>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({ username: event.target.value })
    }
}

export default Login;
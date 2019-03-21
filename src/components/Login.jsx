import React, { Component } from 'react'
import { Link } from '@reach/router';

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
                <Link to="/sign-up"><button>sign up</button></Link>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({ username: event.target.value })
    }
}

export default Login;
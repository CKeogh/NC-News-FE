import React, { Component } from 'react'
import { addUser } from '../api'
import { navigate } from '@reach/router';

class SignUp extends Component {

    state = {
        name: '',
        username: '',
        avatar_url: '',

    }
    render() {
        return (
            <form className="newUserForm">
                <label id="newNameLabel" htmlFor="newName">name: </label>
                <input required onChange={(e) => { this.handleChange('name', e.target.value) }} id="newName" type="text" />
                <label id="newUsernameLabel" htmlFor="newUsername">username: </label>
                <input required onChange={(e) => { this.handleChange('username', e.target.value) }} id="newUserName" type="text" />
                <label id="newAvatarLabel" htmlFor="newAvatar">provide avatar link:</label>
                <input required onChange={(e) => { this.handleChange('avatar_url', e.target.value) }} id="newAvatar" type="text" />
                <button id="newUserSubmit" onClick={this.submitNewUser}>submit</button>

            </form>
        )
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    submitNewUser = (event) => {
        event.preventDefault()
        const { name, username, avatar_url } = this.state;
        if (!name || !username) {
            alert('please fill in all fields')
        } else {
            addUser({ name, username, avatar_url })
                .then((user) => {
                    this.props.setUser(user.username)
                    navigate('/')
                })
                .catch(err => {
                    navigate('/error')
                })
        }
    }
}


export default SignUp;
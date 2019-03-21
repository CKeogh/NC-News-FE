import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { getTopics, getUsers } from './api'
import MainContent from './components/MainContent';
import { Router } from '@reach/router';
import Header from './components/Header';
import FloatBar from './components/FloatBar';
import SideBar from './components/SideBar';
import Error from './components/Error';

class App extends Component {

  state = {
    topics: [],
    users: [],
    user: '',
    title: 'NC News',
    subtitle: ''
  }

  render() {
    const { topics, user, users, title, subtitle } = this.state

    return (
      <div className="App">

        <FloatBar setUser={this.setUser} user={user} userData={users} />
        <Router className="header">
          <Header path="/" title={title} subtitle={subtitle} />
          {topics.map(topic => {
            return <Header path={`/${topic.slug}`} key={`header_${topic.slug}`} title={topic.slug} subtitle={topic.description} />
          })}
          <Header path="/articles/*" title={title} subtitle={subtitle} />
          <Header path="/new-article" title={title} subtitle={subtitle} />
        </Router>

        <NavBar topics={this.state.topics} />

        <Router className="mainContent">

          {topics.map(topic => {
            return <MainContent path={`/${topic.slug}`} key={`content_${topic.slug}`} topic={topic.slug} user={user} />
          })}
          <MainContent users={users} path="/*" topics={topics} setUser={this.setUser} user={user} updateTopics={this.updateTopics} />
        </Router>

        <SideBar user={user} />
        <footer className="footer">Footer</footer>
      </div>
    );
  }

  componentDidMount() {
    getTopics()
      .then(topics => {
        this.setState({ topics })
      })
    getUsers()
      .then(users => {
        this.setState({ users })
      })
  }

  updateTopics = () => {
    getTopics()
      .then(topics => [
        this.setState({ topics })
      ])
  }

  setUser = (newUser) => {
    const usernames = this.state.users.map(user => user.username)
    if (newUser === '') {
      this.setState({ user: newUser })
    } else if (!usernames.includes(newUser)) {
      alert(`user doesn't exist!`)
    } else {
      this.setState({ user: newUser })
    }
  }

  setHeader = (title, subtitle) => {

  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { getTopics, getUser } from './api'
import MainContent from './components/MainContent';
import { Router } from '@reach/router';
import Header from './components/Header';
import FloatBar from './components/FloatBar';
import SideBar from './components/SideBar';
import { navigate } from '@reach/router/lib/history';
import Footer from './components/Footer';

class App extends Component {

  state = {
    topics: [],
    userData: {},
    currentUser: '',
    title: 'NC News',
    subtitle: ''
  }

  render() {
    const { topics, currentUser, userData, title, subtitle } = this.state

    return (
      <div className="App">

        <FloatBar setUser={this.setUser} user={currentUser} userData={userData} />

        <Router className="header">
          <Header path="/topics" title='Topics' subtitle='pick a topic' />
          <Header path="/new-topic" title={title} subtitle='Post a new topic' />
          <Header path="/" title={title} subtitle={subtitle} />
          {topics.map(topic => {
            return <Header path={`/${topic.slug}`} key={`header_${topic.slug}`} title={topic.slug} subtitle={topic.description} />
          })}
          <Header path="/articles/*" title={title} subtitle={subtitle} />
          <Header path="/new-article" title={title} subtitle={subtitle} />
          <Header path="/sign-up" title={'Sign Up'} subtitle={'join the team'} />
          <Header path="/*" title={'Uhoh...'} subtitle={'looks like something went wrong'} />
        </Router>

        <NavBar />

        <Router className="mainContent">
          {topics.map(topic => {
            return <MainContent path={`/${topic.slug}`} key={`content_${topic.slug}`} topic={topic.slug} user={currentUser} />
          })}
          <MainContent path="/*" topics={topics} setUser={this.setUser} user={currentUser} updateTopics={this.updateTopics} />
        </Router>

        <SideBar user={currentUser} />
        <Footer />
      </div >
    );
  }

  componentDidMount() {
    getTopics()
      .then(topics => {
        this.setState({ topics })
      })
  }

  updateTopics = () => {
    getTopics()
      .then(topics => [
        this.setState({ topics })
      ]).catch(err => {
        navigate(`/error`)
      })
  }

  setUser = (newUser) => {
    if (newUser === '') {
      this.setState({ currentUser: newUser })
    } else {
      getUser(newUser)
        .then((data) => {
          const currentUser = data.user.username
          const userData = data.user
          this.setState({ userData, currentUser })
        })
        .catch(err => {
          console.log('error 404!!!!')
          navigate('/error')
        })
    }
  }
}

export default App;

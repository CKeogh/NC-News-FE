import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { getTopics } from './api'
import MainContent from './components/MainContent';
import { Router } from '@reach/router';
import Header from './components/Header';
import FloatBar from './components/FloatBar';
import SideBar from './components/SideBar';

class App extends Component {

  state = {
    topics: [],
    user: 'grumpy19'
  }

  render() {

    const { topics, user } = this.state

    return (
      <div className="App">

        <FloatBar />
        <Router className="header">
          <Header path="/" content={{ slug: 'NC News', description: '' }} />
          {topics.map(topic => {
            return <Header path={`/${topic.slug}`} key={`header_${topic.slug}`} content={topic} />
          })}
          <Header path="/articles/*" content={{ slug: 'Read This Article', description: 'this is a placeholder' }} />
          <Header path="/new-article" content={{ slug: 'new article for ya', description: 'whats on your mind hun?' }} />
        </Router>

        <NavBar topics={this.state.topics} />

        <Router className="mainContent">
          {topics.map(topic => {
            return <MainContent path={`/${topic.slug}`} key={`content_${topic.slug}`} topic={topic.slug} user={user} />
          })}
          <MainContent path="/articles/*" user={user} />
          <MainContent path="/*" topics={topics} user={user} updateTopics={this.updateTopics} />
        </Router>

        <SideBar />
        <footer className="footer">Footer</footer>
      </div>
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
      ])
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {getTopics} from './api'
import MainContent from './components/MainContent';
import { Router } from '@reach/router';
import Header from './components/Header';

class App extends Component {

  state = {
    topics: []
  }
  render() {
    const {topics} = this.state
    return (
      <div className="App">
        <div className="floatBar">
          <p className="login">login</p>
        </div>

        <Router className="header">
          <Header path="/" topic={{slug: 'NC News', description: ''}}/>
          {topics.map(topic => {
            return <Header path={`/${topic.slug}`} key={`header_${topic.slug}`}topic={topic}/>
          })}
        </Router>

        <NavBar topics={this.state.topics}/>

        <Router className="mainContent"> 
          <MainContent path="/" content="All Articles" topic=""/>
          {topics.map(topic => {
            return <MainContent path={`/${topic.slug}`} key={`content_${topic.slug}`} topic={topic.slug}/>
          })}
        </Router>

        <h1 className="sideBar">sideBar</h1>
        <footer className="footer">Footer</footer>
      </div>
    );
  }

  componentDidMount() {
    getTopics()
      .then(topics => {
        this.setState({
          topics: topics
        })
      })
  }
}

export default App;

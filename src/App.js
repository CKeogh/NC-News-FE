import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {getTopics} from './api'
import MainContent from './components/MainContent';
import { Router } from '@reach/router';

class App extends Component {

  state = {
    topics: [
      {
      "slug": "coding",
      "description": "Code is love, code is life"
      },
      {
      "slug": "football",
      "description": "FOOTIE!"
      },
      {
      "slug": "cooking",
      "description": "Hey good looking, what you got cooking?"
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <div className="floatBar">
          <p className="login">login</p>
        </div>
        <header className="header">Header</header>
        <NavBar className="navBar" topics={this.state.topics}/>
        <Router className="mainContent"> 
          <MainContent path="/" content="All Articles"/>
          <MainContent path="/football" content="Football"/>
          <MainContent path="/coding" content="Coding"/>
          <MainContent path="/cooking"content="Cooking"/>
        </Router>
        <h1 className="sideBar">sideBar</h1>
        <footer className="footer">Footer</footer>
      </div>
    );
  }

  componentDidMount() {
    getTopics()
      .then(data => console.log(data))
  }
}

export default App;

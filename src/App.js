import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {getTopics} from './api'

class App extends Component {

  state = {
    topics: []
  }
  render() {
    return (
      <div className="App">
        <div className="floatBar">
          <p className="login">login</p>
        </div>
        <header className="header">Header</header>
        <NavBar className="navBar"/>
        <h1 className="mainContent">Articles</h1>
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

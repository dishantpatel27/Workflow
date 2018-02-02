import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Admin Page</h2>
        </div>
        <p className="App-intro">
          Click below to Navigate to the Setup Workflow Page.
        </p>
        <Link to="/setupWorkflow"><button>Setup Workflow</button></Link>
      </div>
    );
  }
}

export default App;
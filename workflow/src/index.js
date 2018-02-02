import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import setupWorkflow from './setupWorkflow';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/setupWorkflow" component={setupWorkflow} />
    </div>
  </Router>,
  document.getElementById('root')
);

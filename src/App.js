import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is an example of fetching Youtube Channel</h1>
      </div>
    );
  }
}

export default withAuthenticator(App)

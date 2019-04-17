import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import Youtube from './components/youtube/index'
import './App.scss';

class App extends Component {
  render() {
    return <Youtube />
  }
}

export default withAuthenticator(App)

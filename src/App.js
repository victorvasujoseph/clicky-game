import React, { Component } from 'react';
import Header from './components/Header/Header'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Body from './components/Body/Body'
import './App.css';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    imageList: {}
  }

  render() {
    return (
    <div>
      <Header/>
      <Jumbotron/>
        <Body />
    </div>
    );
  }
}

export default App;

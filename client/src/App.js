import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';

class App extends Component {
  render() {
    return (
      <div className="App">

          <div class="header">
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
          </link>
          <link href="https://fonts.googleapis.com/css?family=Basic|Orbitron|Roboto" rel="stylesheet">
          </link>
          <h1 className="App-title">Rick and Morty Tribute App</h1>
        </div>
        <Customers />

      </div>

    );
  }
}

export default App;

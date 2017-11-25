import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React test</h1>
        </header>
        <button class="uk-button uk-button-default uk-button-small">Content</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

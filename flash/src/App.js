import React, { Component } from 'react';
import logo from './logo.svg';

import classes from './App.css';
import FlashPage from './components/FlashPage/FlashPage';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <FlashPage />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';

import classes from './App.css';
import FlashPage from './components/FlashPage/FlashPage';
// import FlashCard from './components/FlashCard/FlashCard';

class App extends Component {
  state = {
    flashcards: [
      { id: 1, question: 'What is JavaScript?', answer: 'JavaScript answer'},
      { id: 2, question: 'What is React?', answer: 'React answer'},
      { id: 3, question: 'What is A Component', answer: 'Component answer'}
    ]
  }

  removeFlashCardHandler = () => {
    console.log('Remove Flash Card')
  }

  nextFlashCardHandler = () => {
    console.log('Next Flash Card')
  }

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
        <FlashPage
          flashCardId={this.state.flashcards[0].id}
          flashCardQuestion={this.state.flashcards[0].question}
          flashCardRemoved={this.removeFlashCardHandler}
          flashCardNext={this.nextFlashCardHandler}
        />
      </div>
    );
  }
}

export default App;

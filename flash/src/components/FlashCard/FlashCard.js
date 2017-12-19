import React from 'react';

import classes from './FlashCard.css';

// Style of the flashcard & the rendering of the front & back card
const flashCard = () => (
  <div className={classes.FlashCard}>
    <div className={classes.FlashCardHeader}>
      <h2>Card #1</h2>
    </div>
    <div className={classes.FlashCardContent}>
      <p>Question</p>
    </div>
  </div>
);

export default flashCard;
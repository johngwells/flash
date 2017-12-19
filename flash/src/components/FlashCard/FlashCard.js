import React from 'react';

import classes from './FlashCard.css';

// Style of the flashcard & the rendering of the front & back card
const flashCard = (props) => (
  <div className={classes.FlashCard}>
    <div className={classes.FlashCardHeader}>
      <h2>ID: {props.id}</h2>
    </div>
    <div className={classes.FlashCardContent}>
      <p>{props.question}</p>
    </div>
  </div>
);

export default flashCard;
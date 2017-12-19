import React from 'react';

import classes from './FlashCardButton.css';

const flashCardButton = (props) => (
  <div>
    <button className={classes.FlashCardButton} onClick={props.removed}>Remove card</button>
    <button className={classes.FlashCardButton} onClick={props.next}>Next card</button>
  </div>
);

export default flashCardButton;
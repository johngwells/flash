import React from 'react';

import classes from './FlashPage.css';
import FlashCard from '../FlashCard/FlashCard';
import FlashCardButton from '../FlashCardButton/FlashCardButton';

const flashPage = (props) => (
  <div>
    <div className={classes.FlashPage}>
      <FlashCard 
        id={props.flashCardId}
        question={props.flashCardQuestion}
      />
    </div>
    <div>
      <FlashCardButton
        removed={() => props.flashCardRemoved()}
        next={() => props.flashCardNext()}
      />
    </div>
  </div>
);

export default flashPage;
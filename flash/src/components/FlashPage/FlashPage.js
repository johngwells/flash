import React from 'react';

import classes from './FlashPage.css';
import FlashCard from '../FlashCard/FlashCard';

const flashPage = (props) => (
  <div className={classes.FlashPage}>
    <FlashCard />
  </div>
);

export default flashPage;
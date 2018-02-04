import React from 'react';
import classes from './Logo.css';
import image from '../../assets/images/burger-logo.png';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={image} alt="MyBurger"/>
  </div>
);

export default logo;

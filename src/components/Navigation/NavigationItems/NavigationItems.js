import React from 'react';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <a href="/" className={true ? classes.active : null}>Burger Builder</a>
    </li>
    <li className={classes.NavigationItem}>
      <a href="/" className={false ? classes.active : null}>Checkout</a>
    </li>
  </ul>
);

export default navigationItems;
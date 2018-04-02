import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
        <NavLink to='/'>Burger Builder</NavLink>
    </li>
    { props.isAuthenticated ? <li className={classes.NavigationItem}><NavLink to='/orders'>Orders</NavLink></li>
          : null }
    <li className={classes.NavigationItem}>
      { !props.isAuthenticated ? <NavLink to='/auth'>Auth</NavLink>
      : <NavLink to='/logout'>Logout</NavLink> }
    </li>
  </ul>
);

export default navigationItems;

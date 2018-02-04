import React from 'react';
import classes from './SideDraw.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxs from '../../../hoc/Auxs/Auxs';

const sideDraw = (props) => {
  const attachedClasses = [classes.SideDraw, props.open ? classes.Open : classes.Close];

  return (
    <Auxs>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxs>
  );
};

export default sideDraw;

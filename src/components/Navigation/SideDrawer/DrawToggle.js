import React from 'react';
import classes from './DrawToggle.css';

const drawToggle = (props) => {
  return (<div className={classes.DrawToggle} onClick={props.show}>
    <div></div>
    <div></div>
    <div></div>
  </div>);
};

export default drawToggle;

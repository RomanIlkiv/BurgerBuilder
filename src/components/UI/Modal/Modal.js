import React, {Component} from 'react';
import classes from './Modal.css';
import Auxs from '../../../hoc/Auxs/Auxs';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  componentWillUpdate() {
    console.log('update modal');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (<Auxs>
      <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
      <div className={classes.Modal} style={{
        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: this.props.show ? '1' : '0'
      }}>
        {this.props.children}
      </div>
    </Auxs>);
  }
};

export default Modal;
import React, {Component} from 'react';
import Auxs from '../Auxs/Auxs';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDraw from '../../components/Navigation/SideDrawer/SideDraw';

class Layout extends Component {
  state = {
    showSideDraw: false
  };

  sideDrawClosedHandler = () => {
    this.setState({
      showSideDraw: false
    })
  };

  sideDrawOpenedHandler = () => {
    this.setState({
      showSideDraw: true
    })
  };

  render () {
    return (
      <Auxs>
        <Toolbar opened={this.sideDrawOpenedHandler}/>
        <SideDraw
          closed={this.sideDrawClosedHandler}
          open={this.state.showSideDraw} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxs>);
  };
}

export default Layout;
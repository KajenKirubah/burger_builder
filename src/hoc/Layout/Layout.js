import React, { Component } from "react";
import Aux from "../Auxilliary/Auxilliary";
import Toolbar from "../../components/Navigation/Toolbar/toolbar";
import classes from './Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showBackDrop: false
  }

  sideDrawerClosed = () => {
    this.setState({showBackDrop: false})
  }

  sideDrawerOpen = () => {
    this.setState({showBackDrop: true})
  }

  render() {
    return (
      <Aux>
        <SideDrawer open={this.state.showBackDrop} closed={this.sideDrawerClosed} />
        <Toolbar openMenu={this.sideDrawerOpen} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;

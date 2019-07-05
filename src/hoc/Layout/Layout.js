import React, { Component } from "react";
import Aux from "../Auxilliary/Auxilliary";
import Toolbar from "../../components/Navigation/Toolbar/toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    showBackDrop: false
  };

  sideDrawerClosed = () => {
    this.setState({ showBackDrop: false });
  };

  sideDrawerOpen = () => {
    this.setState({ showBackDrop: true });
  };

  render() {
    return (
      <Aux>
        <SideDrawer
          open={this.state.showBackDrop}
          closed={this.sideDrawerClosed}
          isAuth={this.props.isAuth}
        />
        <Toolbar openMenu={this.sideDrawerOpen} isAuth={this.props.isAuth}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token != null
  };
};

export default connect(mapStateToProps)(Layout);

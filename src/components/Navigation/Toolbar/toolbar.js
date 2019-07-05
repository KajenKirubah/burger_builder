import React from "react";
import classes from "./toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/logo";
import Menu from '../Menu/Menu';

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <Menu open={props.openMenu} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.DesktopOnly}>
        <NavigationItems isAuth={props.isAuth} />
      </div>
    </header>
  );
};

export default toolbar;

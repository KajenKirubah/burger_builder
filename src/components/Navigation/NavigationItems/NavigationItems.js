import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = props => {
  return (
    <div className={classes.NavigationItems}>
        HamburgerIcon
        Logo
      <div>
        <NavigationItem>Home</NavigationItem>
        <NavigationItem>Orders</NavigationItem>
        <NavigationItem>Auth</NavigationItem>
      </div>
    </div>
  );
};

export default navigationItems;

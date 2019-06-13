import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = props => {
  return (
    <div className={classes.NavigationItems}>
        <NavigationItem link='/' active>Home</NavigationItem>
        <NavigationItem link='/'>Orders</NavigationItem>
        <NavigationItem link='/'>Auth</NavigationItem>
    </div>
  );
};

export default navigationItems;

import React from 'react';
import classes from './toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => {
    return (
        <div className={classes.Toolbar}>
            <NavigationItems />
        </div>
    );
}

export default toolbar;
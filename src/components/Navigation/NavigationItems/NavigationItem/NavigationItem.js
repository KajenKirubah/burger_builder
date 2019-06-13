import React from 'react';
import {Link} from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = props => {
    return (
        <div className={classes.NavigationItem}>
            <Link to={props.link} className={props.active ? classes.active : null} >{props.children}</Link>
        </div>
    )
}

export default navigationItem;
import React from 'react';
import {Link} from 'react-router-dom';

const navigationItem = props => {
    return (
        <div>
            <Link to={props.children}>{props.children}</Link>
        </div>
    )
}

export default navigationItem;
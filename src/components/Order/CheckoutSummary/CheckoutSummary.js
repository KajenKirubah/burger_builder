import React from 'react';
import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = props => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ings={props.ingredients}/>
            </div>
            <Button btnType='Danger' clicked={props.cancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.continued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;
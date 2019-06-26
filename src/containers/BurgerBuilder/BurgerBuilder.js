import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

// import * as actionTypes from



class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    loading: false
  };

  componentDidMount() {
    console.log("[BurgerBuilder] componentDidMount");
  }


  addIngredientHandler = ing => {
    this.props.onIncrement(ing);
  };

  removeIngredientHandler = ing => {
    this.props.onDecrement(ing);  
  };

  updatePurchaseState = () => {
    const sum = Object.keys(this.props.ingredients)
      .map(igKey => {
        return this.props.ingredients[igKey];
      })
      .reduce((a, b) => {
        return a + b;
      }, 0);
    
      return sum > 0 ;
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelledHandler = () => {
    this.setState({ purchasing: false });
  };

  //go to the checkout
  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  render() {
    let disabledInfo = {
      ...this.props.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.props.ingredients}
        purchaseCancelled={this.purchaseCancelledHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.props.price}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelledHandler}
        >
          {orderSummary}
        </Modal>

        <Burger ings={this.props.ingredients} />
        <BuildControls
          price={this.props.price}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          ordered={this.purchaseHandler}
          purchasable={this.updatePurchaseState}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: (ing) => dispatch(actions.addIngredient(ing)),
    onDecrement: (ing) => dispatch(actions.removeIngredient(ing))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);

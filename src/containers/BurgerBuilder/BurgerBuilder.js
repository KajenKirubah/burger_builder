import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
const INGREDIENT_PRICES = {
  meat: 0.8,
  cheese: 0.5,
  bacon: 0.6,
  salad: 0.4
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    price: 4,
    purchasable: false,
    purchasing: false,
    loading: false
  };

  componentDidMount() {
    console.log("[BurgerBuilder] componentDidMount");
  }

  componentDidUpdate() {
    console.log("[BurgerBuilder] componentDidUpdate");
  }
  addIngredientHandler = ing => {
    let updatedPrice = this.state.price + INGREDIENT_PRICES[ing];

    let updatedIngs = {
      ...this.state.ingredients,
      [ing]: this.state.ingredients[ing] + 1
    };

    this.setState({ ingredients: updatedIngs, price: updatedPrice });
    this.updatePurchaseState(updatedIngs);
  };

  removeIngredientHandler = ing => {
    let updatedPrice = this.state.price - INGREDIENT_PRICES[ing];

    if (this.state.ingredients[ing] <= 0) {
      return;
    }

    let updatedIngs = {
      ...this.state.ingredients,
      [ing]: this.state.ingredients[ing] - 1
    };

    this.setState({ ingredients: updatedIngs, price: updatedPrice });
    this.updatePurchaseState(updatedIngs);
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((a, b) => {
        return a + b;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelledHandler = () => {
    this.setState({ purchasing: false });
  };

  //go to the checkout
  purchaseContinueHandler = () => {
    
    const queryParams = [];
    
    for(let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }

    queryParams.push('price=' + encodeURIComponent(this.state.price));
    
    const queryString = queryParams.join('&');
    
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  };

  render() {
    let disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCancelled={this.purchaseCancelledHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.state.price}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
      console.log("spinner is running");
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelledHandler}
        >
          {orderSummary}
        </Modal>

        <Burger ings={this.state.ingredients} />
        <BuildControls
          price={this.state.price}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          ordered={this.purchaseHandler}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;

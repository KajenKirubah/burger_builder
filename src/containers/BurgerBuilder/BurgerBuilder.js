import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

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
    purchasing: false
  };

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
    alert("you continue");
  };

  render() {
    let disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelledHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelledHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.price}
          />
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

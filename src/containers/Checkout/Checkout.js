import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import axios from "../../axios-orders";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = +param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }

    this.setState({ ingredients, price });
  }

  cancelledHandler = () => {
    this.props.history.goBack();
  };

  continuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = null;

    if (this.state.ingredients) {
      summary = (
        <CheckoutSummary
          ingredients={this.state.ingredients}
          cancelled={this.cancelledHandler}
          continued={this.continuedHandler}
        />
      );
    }

    return (
      <div>
        {summary}
        <Route
          path="/checkout/contact-data"
          render={props => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />}
        />
      </div>
    );
  }
}

export default Checkout;

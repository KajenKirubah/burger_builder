import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

import { connect } from "react-redux";

class Checkout extends Component {
  cancelledHandler = () => {
    this.props.history.goBack();
  };

  continuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = null;

    if (this.props.ingredients) {
      summary = (
        <CheckoutSummary
          ingredients={this.props.ingredients}
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
          render={props => (
            <ContactData
              ingredients={this.props.ingredients}
              price={this.props.price}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    price: state.totalPrice
  };
};

export default connect(mapStateToProps)(Checkout);

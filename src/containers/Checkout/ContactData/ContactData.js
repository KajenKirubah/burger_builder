import React, { Component } from "react";
import classes from "./ContactData.module.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    deliveryMethod: "fastest",
    loading: false
  };

  orderHandler = (e) => {
      e.preventDefault();
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "kajen",
        address: {
          street: "teststreet",
          postalCode: "12345",
          country: "Canada"
        }
      },
      deliveryMethod: "fastest"
    };

    axios
      .post("/orders.json", order)
      .then(resp => {
        console.log(resp.data);
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });

    
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="your name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="your email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="your street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="postal code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    console.log("hello");
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}   
      </div>
    );
  }
}

export default ContactData;

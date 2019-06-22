import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";

class Orders extends Component {
  state = {
    orders: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });

    axios.get("/orders.json").then(resp => {
      let orders = [];
      for (let key in resp.data) {
        orders.push({
          ...resp.data[key],
          id: key
        });
      }
      this.setState({ orders, loading: false });
    });
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => {
          return (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          );
        })}
      </div>
    );
  }
}

export default Orders;

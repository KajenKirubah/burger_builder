import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

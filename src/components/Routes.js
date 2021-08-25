import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Nav from "./Nav";

const Routes = () => (
  <Router basename="/shopping-cart">
    <Nav />
    <div id="container">
      <Switch>
        <Route path={`/`} exact>
          <App />
        </Route>
        <Route path={`/products`} exact component={Products} />
        <Route path={`/products/:id`} component={ProductDetails} />
        <Route path={`/cart`} component={Cart} />
        <Route path={`/Z`} />
      </Switch>
    </div>
  </Router>
);

export default Routes;

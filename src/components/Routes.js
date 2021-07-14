import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import Products from "./Products";
import Nav from "./Nav";

const Routes = () => (
  <Router>
    <Nav />
    <div id="container">
      <Switch>
        <Route path={`/`} exact component={App} />
        <Route path={`/products`} component={Products} />
        <Route path={`/cart`} component={Cart} />
        <Route path={`/Z`} />
      </Switch>
    </div>
  </Router>
);

export default Routes;

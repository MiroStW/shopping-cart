import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Nav from "./Nav";
import { CartProvider } from "./cartContext";

const App = () => {
  // <Router basename="/shopping-cart">
  // set this dependant on environment?

  return (
    <Router>
      <CartProvider>
        <Nav />
        <div id="container">
          <Switch>
            <Route path={`/`} exact>
              <Main />
            </Route>
            <Route path={`/products`} exact>
              <Products />
            </Route>
            <Route path={`/products/:id`}>
              <ProductDetails />
            </Route>
            <Route path={`/cart`}>
              <Cart />
            </Route>
            <Route path={`/Z`}></Route>
          </Switch>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;

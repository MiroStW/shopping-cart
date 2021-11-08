import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Routes>
            <Route path={`/`} element={<Main />} />
            <Route path={`/products`} element={<Products />} />
            <Route path={`/products/:id`} element={<ProductDetails />} />
            <Route path={`/cart`} element={<Cart />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Nav from "./Nav";
import { CartProvider } from "../API/cartContext";
import { pokemonClient } from "../API/ApolloClient";
import { ApolloProvider } from "@apollo/client";

const App = () => {
  // set this dependant on environment?
  // <Router basename="/shopping-cart">

  return (
    <Router>
      <CartProvider>
        <ApolloProvider client={pokemonClient}>
          <Nav />
          <div id="container">
            <Routes>
              <Route path={`/`} element={<Main />} />

              <Route
                path={`/products`}
                element={
                  <Products
                    ids={Array.from({ length: 10 }, () =>
                      Math.floor(Math.random() * 897 + 1)
                    )}
                  />
                }
              />
              <Route path={`/products/:id`} element={<ProductDetails />} />

              <Route path={`/cart`} element={<Cart />} />
            </Routes>
          </div>
        </ApolloProvider>
      </CartProvider>
    </Router>
  );
};

export default App;

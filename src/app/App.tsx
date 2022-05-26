import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "domains/main/Main";
import Cart from "domains/cart/Cart";
import Products from "domains/products/Products";
import ProductDetails from "domains/products/ProductDetails";
import Nav from "./components/Nav";
import { CartProvider } from "api/cartContext";
import { pokemonClient } from "api/ApolloClient";
import { ApolloProvider } from "@apollo/client";
import style from "./assets/app.css";

const App = () => {
  // set this dependant on environment?
  // <Router basename="/shopping-cart">

  return (
    <Router>
      <CartProvider>
        <ApolloProvider client={pokemonClient}>
          <Nav />
          <div id={style.container}>
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

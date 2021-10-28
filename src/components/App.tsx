import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Nav from "./Nav";
import { CartItem, Pokemon } from "types";

const App = () => {
  // <Router basename="/shopping-cart">
  // set this dependant on environment?

  const [cartItems, setCartItems] = useState<CartItem[] | ([] & { length: 0 })>(
    []
  );

  const addToCart = (product: Pokemon, quantity: number): void => {
    const existingProductPosition = cartItems.findIndex(
      (item) => item.product.id === product.id
    );
    if (existingProductPosition === -1) {
      setCartItems((prevState) => [...prevState, { product, quantity }]);
    } else {
      setCartItems((prevState) => {
        prevState[existingProductPosition].quantity += quantity;
        return [...prevState];
      });
    }
  };

  const totalCartQuantity = () =>
    // @ts-ignore: ts bug https://github.com/microsoft/TypeScript/issues/36390
    cartItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);

  return (
    <Router>
      <Nav totalCartQuantity={totalCartQuantity()} />
      <div id="container">
        <Switch>
          <Route path={`/`} exact>
            <Main />
          </Route>
          <Route path={`/products`} exact>
            <Products addToCart={addToCart} />
          </Route>
          <Route path={`/products/:id`}>
            <ProductDetails addToCart={addToCart} />
          </Route>
          <Route path={`/cart`}>
            <Cart />
          </Route>
          <Route path={`/Z`}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

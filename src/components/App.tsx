import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Nav from "./Nav";

interface CartItem {
  product: {};
  quantity: number;
}

const App = () => {
  // <Router basename="/shopping-cart">
  // set this dependant on environment?

  const [cart, setCart] = useState<CartItem[] | ([] & { length: 0 })>([]);

  return (
    <Router>
      <Nav cart={cart} />
      <div id="container">
        <Switch>
          <Route path={`/`} exact>
            <Main />
          </Route>
          <Route path={`/products`} exact component={Products} />
          <Route path={`/products/:id`} component={ProductDetails} />
          <Route path={`/cart`} component={Cart} />
          <Route path={`/Z`} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

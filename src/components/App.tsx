import React from "react";
import logo from "../shop_logo.jpeg";

const App = () => (
  <>
    <h1>Shopping cart App</h1>
    <p>
      This is the homepage of an awesome online shop! We&apos;ve got a great
      name & slogan:
    </p>
    <img src={logo} alt="" />
  </>
);

export default App;

// project outline:
// You should have at least have two pages (a homepage and a shop page, which
// includes your shopping cart). Let a user navigate between the pages with a
// navigation bar, which will be shown on both routes.

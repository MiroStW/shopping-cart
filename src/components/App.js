import React, { useEffect } from "react";
import logo from "../34988480-a4e8-11ea-8b13-b51f23ac7400.jpeg";

const App = () => {
  useEffect(() => {}, []);

  return (
    <>
      <h1>Shopping cart App</h1>
      <p>
        This is the homepage of an awesome online shop! We&apos;ve got a great
        name & slogan:
      </p>
      <img src={logo} alt="" />
    </>
  );
};

export default App;

// project outline:
// You should have at least have two pages (a homepage and a shop page, which
// includes your shopping cart). Let a user navigate between the pages with a
// navigation bar, which will be shown on both routes.

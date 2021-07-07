import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Nav from "./Nav";

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={App} />
        {/* <Route path="/counter" exact component={Counter} />
        <Route path="/time" exact component={Time} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;

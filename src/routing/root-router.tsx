import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../views/home";

const RootRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default RootRouter;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "../modules/dashboard";

const NotFound = () => {
  return <h1>Not Found</h1>;
};

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;

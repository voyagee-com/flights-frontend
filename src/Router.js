import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Offers from "./pages/Offers";

const Routes = () => (
  <BrowserRouter basename="flights">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/tickets/:origen-:destino/:ida/:volta/:adultos">
        <Offers />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";  
import Inicial from "./pages/Inicial";
 
const Routes = () => (
  <BrowserRouter>
    <Switch> 
      <Route path={"/"} component={ Inicial } />
    </Switch>
  </BrowserRouter>
);

export default Routes;

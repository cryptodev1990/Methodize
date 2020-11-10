import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Onboard from "./LandingPage/Onboard";
const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/register/onboard" component={Onboard} /> */}
        <Route exact path="/" component={Home} />
        <Route
          path="/*"
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRoutes;

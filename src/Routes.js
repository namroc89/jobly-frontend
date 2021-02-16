import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Companies from "./Companies";
import CompanyDetails from "./CompanyDetails";
import Jobs from "./Jobs";
import LoginForm from "./auth/LoginForm";
import ProfileForm from "./profiles/ProfileForm";
import SignupForm from "./auth/SignupForm";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";

function Routes({ login, signup }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute exact path="/companies">
        <Companies />
      </PrivateRoute>
      <PrivateRoute exact path="/companies/:handle">
        <CompanyDetails />
      </PrivateRoute>
      <PrivateRoute exact path="/jobs">
        <Jobs />
      </PrivateRoute>
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>
      <Route exact path="/signup">
        <SignupForm signup={signup} />
      </Route>
      <PrivateRoute exact path="/profile">
        <ProfileForm />
      </PrivateRoute>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;

import React from "react";
import { Router } from "@reach/router";
import { navigate } from "gatsby";

import NotFound from "./404";
import Dashboard from "../components/Dashboard";
import { isLoggedIn, isBrowser } from "../services/auth";
import Login from "../components/Login";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/dashboard/login/` && isBrowser) {
    navigate(`/dashboard/login/`);
    return null;
  }

  return <Component location={location} {...rest} />;
};

export default ({ location }) => {
  return (
    <Router>
      {/* @ts-expect-error: router type */}
      <NotFound default />
      <PrivateRoute path="/dashboard/" component={Dashboard} location={location} />
      <PrivateRoute path="/dashboard/:slug" component={Dashboard} location={location} />
      <Login path="/dashboard/login/" location={location} />
    </Router>
  );
};

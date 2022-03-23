import React from "react";
import { Router } from "@reach/router";
import { navigate } from "gatsby";

import NotFound from "./404";
import Dashboard, {
  AllRepositories,
  AllRepositoriesComponent,
  Repository,
  Tracking,
  RepositoryComponent,
  Difference,
} from "../components/Dashboard";
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
      {/* @ts-expect-error TODO */}
      <NotFound default />
      <PrivateRoute path="/dashboard/" component={Dashboard} location={location} />
      <PrivateRoute path="/dashboard/tracking/" component={Tracking} location={location} />
      <PrivateRoute path="/dashboard/tracking/:slug/" component={Repository} location={location} />
      <PrivateRoute
        path="/dashboard/tracking/difference/"
        component={Difference}
        location={location}
      />
      <PrivateRoute
        path="/dashboard/tracking/*/*/"
        component={RepositoryComponent}
        location={location}
      />
      <PrivateRoute
        path="/dashboard/tracking/allrepositories/"
        component={AllRepositories}
        location={location}
      />
      <PrivateRoute
        path="/dashboard/tracking/allrepositories/:slug/"
        component={AllRepositoriesComponent}
        location={location}
      />
      <Login path="/dashboard/login/" location={location} />
    </Router>
  );
};

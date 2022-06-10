import { Router } from "@reach/router";
import { navigate, PageRendererProps } from "gatsby";
import React from "react";

import Dashboard, {
  AllRepositories,
  AllRepositoriesComponent,
  Repository,
  RepositoryComponent,
  Tracking,
} from "../components/Dashboard";
import Login from "../components/Login";
import { isBrowser, isLoggedIn } from "../services/auth";
import NotFound from "./404";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/dashboard/login/` && isBrowser) {
    navigate(`/dashboard/login/`);
    return null;
  }

  return <Component location={location} {...rest} />;
};

export default ({ location }: PageRendererProps) => {
  return (
    <Router>
      {/* @ts-expect-error TODO */}
      <NotFound default />
      <PrivateRoute path="/dashboard/" component={Dashboard} location={location} />
      <PrivateRoute path="/dashboard/tracking/" component={Tracking} location={location} />
      <PrivateRoute path="/dashboard/tracking/:slug/" component={Repository} location={location} />
      <PrivateRoute
        path="/dashboard/tracking/*\/*\/"
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

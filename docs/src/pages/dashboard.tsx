import { Router } from "@reach/router";
import { navigate, PageRendererProps } from "gatsby";
import React from "react";
import { helpers, queries } from "@kiwicom/orbit-tracking";
import type { ProjectPathsQuery, ProjectBlobsQuery } from "@kiwicom/orbit-tracking/dist/interfaces";
import { Loading } from "@kiwicom/orbit-components";

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

interface Props extends PageRendererProps {
  serverData: {
    data: string[];
  };
}

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/dashboard/login/` && isBrowser) {
    navigate(`/dashboard/login/`);
    return null;
  }

  return <Component location={location} {...rest} />;
};

export default ({ location, serverData }: Props) => {
  const { data } = serverData;

  if (!data) return <Loading>Loading...</Loading>;

  const pages = JSON.parse(data[0]);

  return (
    <Router>
      <NotFound default />
      <PrivateRoute path="/dashboard/" component={Dashboard} location={location} />
      <PrivateRoute
        path="/dashboard/tracking/"
        component={Tracking}
        location={location}
        pages={pages}
      />
      <PrivateRoute
        path="/dashboard/tracking/:slug/"
        component={Repository}
        location={location}
        pages={pages}
      />
      <PrivateRoute
        path="/dashboard/tracking/*\/*\/"
        component={RepositoryComponent}
        location={location}
        pages={pages}
      />
      <PrivateRoute
        path="/dashboard/tracking/allrepositories/"
        component={AllRepositories}
        location={location}
        pages={pages}
      />
      <PrivateRoute
        path="/dashboard/tracking/allrepositories/:slug/"
        component={AllRepositoriesComponent}
        location={location}
        pages={pages}
      />
      <Login path="/dashboard/login/" location={location} />
    </Router>
  );
};

export async function getServerData() {
  if (process.env.GATSBY_ORBIT_STORAGE_PATH) {
    const pathsRes = await helpers.apiRequest<ProjectPathsQuery>(queries.projectPathQuery, {
      path: process.env.GATSBY_ORBIT_STORAGE_PATH,
    });

    if (pathsRes) {
      const paths = pathsRes.data.project.repository.tree.blobs.nodes
        .map(b => b.path)
        .filter(n => n.includes(".json"));

      const resBlob = await helpers.apiRequest<ProjectBlobsQuery>(queries.projectRawBlobQuery, {
        path: process.env.GATSBY_ORBIT_STORAGE_PATH,
        paths,
        last: 1,
      });

      if (resBlob) {
        const data = resBlob.data.project.repository.blobs.nodes.map(({ rawBlob }) => rawBlob);
        return { props: { data }, status: 200 };
      }
    }

    return { props: { data: null }, status: 404 };
  }

  return { props: { data: null }, status: 500 };
}

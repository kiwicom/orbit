import React from "react";
import { Grid } from "@kiwicom/orbit-components";
import { WindowLocation } from "@reach/router";
import { Pet as PetIcon } from "@kiwicom/orbit-components/icons";

import Tile from "../Tile";
import DocLayout from "../DocLayout";
import Tracking from "./Tracking";
import AllRepositories from "./AllRepositories";
import AllRepositoriesComponent from "./AllRepositoriesComponent";
import Repository from "./Repository";
import RepositoryComponent from "./RepositoryComponent";
import Difference from "./Difference";

interface Props {
  path: string;
  location: WindowLocation;
}

const Dashboard = ({ path = "/dashboard/", location }: Props) => {
  return (
    <DocLayout location={location} title="Tracking" path={path} noElevation>
      <Grid columns="1fr" tablet={{ columns: "1fr 1fr" }}>
        <Tile title="Tracking" icon={<PetIcon />} href="tracking">
          Orbit tracking tool shows the data collected from frontend repositories with react-scanner
          and eslint
        </Tile>
      </Grid>
    </DocLayout>
  );
};

export default Dashboard;
export {
  Tracking,
  AllRepositories,
  AllRepositoriesComponent,
  Repository,
  RepositoryComponent,
  Difference,
};

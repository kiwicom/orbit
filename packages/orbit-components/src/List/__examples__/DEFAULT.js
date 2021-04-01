// @flow
import * as React from "react";

import List from "../index";
import ListItem from "../ListItem";

export default {
  Example: (): React.Node => (
    <List>
      <ListItem>Planes</ListItem>
      <ListItem>Trains</ListItem>
      <ListItem>Automobiles</ListItem>
    </List>
  ),
  info: {
    title: "Default list",
    description:
      "Default lists display their items in primary color with small circles for each item.",
  },
};

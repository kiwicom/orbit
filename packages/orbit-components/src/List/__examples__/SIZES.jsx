// @flow
import * as React from "react";

import List from "../index";
import ListItem from "../ListItem";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack>
      <List size="small">
        <ListItem>Planes</ListItem>
        <ListItem>Trains</ListItem>
        <ListItem>Automobiles</ListItem>
      </List>
      <List>
        <ListItem>Planes</ListItem>
        <ListItem>Trains</ListItem>
        <ListItem>Automobiles</ListItem>
      </List>
      <List size="large">
        <ListItem>Planes</ListItem>
        <ListItem>Trains</ListItem>
        <ListItem>Automobiles</ListItem>
      </List>
    </Stack>
  ),
  info: {
    title: "Sizes",
    description: "Lists come in three sizes: small, medium, and large.",
  },
};

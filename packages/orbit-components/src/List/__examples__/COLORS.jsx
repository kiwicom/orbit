// @flow
import * as React from "react";

import List from "../index";
import ListItem from "../ListItem";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack>
      <List type="primary">
        <ListItem>Planes</ListItem>
        <ListItem>Trains</ListItem>
        <ListItem>Automobiles</ListItem>
      </List>
      <List type="secondary">
        <ListItem>Planes</ListItem>
        <ListItem>Trains</ListItem>
        <ListItem>Automobiles</ListItem>
      </List>
    </Stack>
  ),
  info: {
    title: "Colors",
    description:
      "Lists come in two colors: primary (for important information) and secondary (for less important details).",
  },
};

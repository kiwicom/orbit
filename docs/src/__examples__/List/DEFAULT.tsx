import * as React from "react";
import { ListItem, List } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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

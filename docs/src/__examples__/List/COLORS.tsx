import * as React from "react";
import { ListItem, List, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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

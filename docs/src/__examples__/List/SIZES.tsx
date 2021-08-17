import React from "react";
import { ListItem, List, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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

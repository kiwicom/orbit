import React from "react";
import { ListItem, List } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <List>
      <ListItem>Planes</ListItem>
      <ListItem>Trains</ListItem>
      <ListItem>Automobiles</ListItem>
    </List>
  ),
  exampleKnobs: [
    {
      component: "List",
      knobs: [
        { name: "label", type: "text", defaultValue: "" },
        { name: "icon", type: "icon", defaultValue: "CircleSmall" },
        {
          name: "size",
          type: "select",
          defaultValue: "normal",
          options: ["small", "normal", "large"],
        },
        {
          name: "type",
          type: "select",
          defaultValue: "primary",
          options: ["primary", "secondary"],
        },
      ],
    },
  ],
};

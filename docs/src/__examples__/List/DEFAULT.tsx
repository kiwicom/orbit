import React from "react";
import { ListItem, List } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <List size="normal" type="primary">
      <ListItem>Planes</ListItem>
      <ListItem>Trains</ListItem>
      <ListItem>Automobiles</ListItem>
    </List>
  ),
  exampleKnobs: [
    {
      component: "List",
      knobs: [
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
    {
      component: "ListItem",
      knobs: [
        { name: "label", type: "text", defaultValue: "" },
        { name: "icon", type: "icon", defaultValue: "" },
      ],
    },
  ],
};

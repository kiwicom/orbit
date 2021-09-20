import React from "react";
import { Sticky, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <div style={{ height: "240px" }}>
      <Sticky>
        <Text>Scroll down and see this text stick to the top of the screen.</Text>
      </Sticky>
    </div>
  ),
  exampleKnobs: [
    {
      component: "Sticky",
      knobs: [
        {
          name: "offset",
          type: "number",
          defaultValue: 10,
        },
      ],
    },
  ],
};

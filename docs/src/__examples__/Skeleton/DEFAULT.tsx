import React from "react";
import { OrbitProvider, Skeleton, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme} useId={React.useId}>
      <Skeleton width={300} height={100} />
    </OrbitProvider>
  ),
  exampleKnobs: [
    {
      component: "Skeleton",
      knobs: [
        {
          name: "width",
          type: "number",
          defaultValue: 300,
        },
        {
          name: "height",
          type: "number",
          defaultValue: 100,
        },
      ],
    },
  ],
};

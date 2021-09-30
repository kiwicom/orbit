import React from "react";
import { Text } from "@kiwicom/orbit-components";

export default {
  Example: () => <Text>Text aligned to the left</Text>,
  exampleVariants: [
    { name: "Left", code: "() => <Text>Text aligned to the left</Text>" },
    { name: "Center", code: `() => <Text align="center">Centered text</Text>` },
    { name: "Right", code: `() => <Text align="right">Text aligned to the right</Text>` },
    {
      name: "Justify",
      code: `() => <Text align="justify">Stretches the text on the whole width</Text>`,
    },
  ],
};

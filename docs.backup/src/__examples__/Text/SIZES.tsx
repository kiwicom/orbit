import React from "react";
import { Text } from "@kiwicom/orbit-components";

export default {
  Example: () => <Text size="small">Small text</Text>,
  exampleVariants: [
    {
      name: "Small",
      code: `() => <Text size="small>Small text</Text>`,
    },
    {
      name: "Normal",
      code: `() => <Text size="normal">Medium text</Text>`,
    },
    {
      name: "Large",
      code: `() => <Text size="large">Large text</Text>`,
    },
    {
      name: "ExtraLarge",
      code: `() => <Text size="extraLarge">Large text</Text>`,
    },
  ],
};

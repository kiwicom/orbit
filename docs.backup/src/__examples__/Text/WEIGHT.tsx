import React from "react";
import { Text } from "@kiwicom/orbit-components";

export default {
  Example: () => <Text>Normal text</Text>,
  exampleVariants: [
    { name: "Normal", code: "() => <Text>Normal text</Text>" },
    { name: "Bold", code: `() => <Text weight="bold">Bold text</Text>` },
  ],
};

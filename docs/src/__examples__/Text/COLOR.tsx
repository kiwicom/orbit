import React from "react";
import { Text } from "@kiwicom/orbit-components";

export default {
  Example: () => <Text>Primary text</Text>,
  exampleVariants: [
    {
      name: "Primary",
      code: `() => <Text>Primary text</Text>`,
    },
    {
      name: "Secondary",
      code: `() => <Text type="secondary">Secondary text</Text>`,
    },
    {
      name: "Info",
      code: `() => <Text type="info">Info text</Text>`,
    },
    {
      name: "Success",
      code: `() => <Text type="Success">Success text</Text>`,
    },
    {
      name: "Warning",
      code: `() => <Text type="warning">Warning text</Text>`,
    },
    {
      name: "Critical",
      code: `() => <Text type="critical">Critical text</Text>`,
    },
    {
      name: "White",
      code: `() => <Text type="white">White text</Text>`,
    },
  ],
};

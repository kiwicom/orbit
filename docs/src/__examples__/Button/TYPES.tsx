import React from "react";
import { Button } from "@kiwicom/orbit-components";

export default {
  Example: () => <Button>Primary</Button>,
  exampleVariants: [
    {
      name: "Primary",
      code: `() => <Button>Primary</Button>`,
    },
    {
      name: "Secondary",
      code: `() => <Button type="secondary">Secondary</Button>`,
    },
    {
      name: "Critical",
      code: `() => <Button type="critical">Critical</Button>`,
    },
    {
      name: "White",
      code: `() => <Button type="white">White</Button>`,
    },
    {
      name: "PrimarySubtle",
      code: `() => <Button type="primarySubtle">PrimarySubtle</Button>`,
    },
    {
      name: "CriticalSubtle",
      code: `() => <Button type="criticalSubtle">CriticalSubtle</Button>`,
    },
  ],
};

import React from "react";
import { TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => <TextLink href="https://orbit.kiwi">Primary</TextLink>,
  exampleVariants: [
    { name: "Primary", code: `() => <TextLink href="https://orbit.kiwi">Primary</TextLink>` },
    {
      name: "Secondary",
      code: `() => <TextLink type="secondary" href="https://orbit.kiwi">Secondary</TextLink>`,
    },
    {
      name: "Info",
      code: `() => <TextLink type="info" href="https://orbit.kiwi">Info</TextLink>`,
    },
    {
      name: "Success",
      code: `() => <TextLink type="success" href="https://orbit.kiwi">Success</TextLink>`,
    },
    {
      name: "Warning",
      code: `() => <TextLink type="warning" href="https://orbit.kiwi">Warning</TextLink>`,
    },
    {
      name: "Critical",
      code: `() => <TextLink type="critical" href="https://orbit.kiwi">Critical</TextLink>`,
    },
  ],
};

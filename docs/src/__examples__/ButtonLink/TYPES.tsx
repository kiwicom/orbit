import React from "react";
import { ButtonLink } from "@kiwicom/orbit-components";

export default {
  Example: () => <ButtonLink>Primary</ButtonLink>,
  exampleVariants: [
    {
      name: "Primary",
      code: `() => <ButtonLink>Primary</ButtonLink>`,
    },
    {
      name: "Secondary",
      code: `() => <ButtonLink type="secondary">Secondary</ButtonLink>`,
    },
    {
      name: "Critical",
      code: `() => <ButtonLink type="critical">Critical</ButtonLink>`,
    },
  ],
};

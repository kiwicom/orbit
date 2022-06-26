import React from "react";
import { TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <TextLink size="small" href="https://orbit.kiwi">
      small
    </TextLink>
  ),
  exampleVariants: [
    {
      name: "Small",
      code: `() => <TextLink size="small" href="https://orbit.kiwi">Small</TextLink>`,
    },
    {
      name: "Normal",
      code: `() => <TextLink size="normal" href="https://orbit.kiwi">Normal</TextLink>`,
    },
    {
      name: "Large",
      code: `() => <TextLink size="large" href="https://orbit.kiwi">Large</TextLink>`,
    },
  ],
};

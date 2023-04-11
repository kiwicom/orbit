import React from "react";
import { Button } from "@kiwicom/orbit-components";
import { ChevronForward } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => <Button iconRight={<ChevronForward />}>Add item</Button>,
  exampleVariants: [
    {
      name: "With right icon",
      code: "() => <Button iconRight={<Icons.ChevronForward />}>Add item</Button>",
    },
    {
      name: "With left icon",
      code: "() => <Button iconLeft={<Icons.ChevronBackward />}>Add item</Button>",
    },
    {
      name: "With both icons",
      code: "() => <Button iconRight={<Icons.ChevronForward />} iconLeft={<Icons.ChevronBackward />}>Add item</Button>",
    },
    {
      name: "With only icon",
      code: "() => <Button iconLeft={<Icons.ChevronForward />} />",
    },
  ],
};

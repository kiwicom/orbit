import React from "react";
import { Button } from "@kiwicom/orbit-components";
import { ChevronRight } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => <Button iconRight={<ChevronRight />}>Add item</Button>,
  exampleVariants: [
    {
      name: "With right icon",
      code: "() => <Button iconRight={<Icons.ChevronRight />}>Add item</Button>",
    },
    {
      name: "With left icon",
      code: "() => <Button iconLeft={<Icons.ChevronLeft />}>Add item</Button>",
    },
    {
      name: "With both icons",
      code:
        "() => <Button iconRight={<Icons.ChevronRight />} iconLeft={<Icons.ChevronLeft />}>Add item</Button>",
    },
    {
      name: "With only icon",
      code: "() => <Button iconRight={<Icons.ChevronRight />} />",
    },
  ],
};

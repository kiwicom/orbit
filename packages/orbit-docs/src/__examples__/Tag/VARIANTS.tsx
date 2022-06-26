import React from "react";
import { Tag } from "@kiwicom/orbit-components";

export default {
  Example: () => <Tag>Tag</Tag>,
  exampleVariants: [
    {
      name: "Default",
      code: `() => <Tag>Default</Tag>`,
    },
    {
      name: "Selected",
      code: `() => <Tag selected>Selected</Tag>`,
    },
    {
      name: "onClick",
      code: `() => <Tag onClick={() => console.log('clicked')}>Clicked</Tag>`,
    },
    {
      name: "onRemove",
      code: `() => <Tag onClick={() => console.log('clicked')} onRemove={() => console.log('remove')}>Remove</Tag>`,
    },
    {
      name: "onRemove selected",
      code: `() => <Tag selected onClick={() => console.log('clicked')} onRemove={() => console.log('remove')}>Remove</Tag>`,
    },
  ],
};

import React from "react";
import { Tag } from "@kiwicom/orbit-components";

export default {
  Example: () => <Tag>Bags</Tag>,
  exampleKnobs: [
    {
      component: "Tag",
      knobs: [
        { name: "selected", type: "boolean", defaultValue: false },
        { name: "size", type: "select", options: ["small", "normal"], defaultValue: "normal" },
      ],
    },
  ],
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

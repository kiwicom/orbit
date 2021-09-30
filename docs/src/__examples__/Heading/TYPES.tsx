import React from "react";
import { Heading } from "@kiwicom/orbit-components";

export default {
  Example: () => <Heading type="display">Display title</Heading>,
  exampleVariants: [
    { name: "Display", code: `() => <Heading type="display">Display title</Heading>` },
    {
      name: "DisplaySubtitle",
      code: `() => <Heading type="displaySubtitle">DisplaySubtitle title</Heading>`,
    },
    { name: "Title1", code: `() => <Heading type="title1">Title1 title</Heading>` },
    { name: "Title2", code: `() => <Heading type="title2">Title2 title</Heading>` },
    { name: "Title3", code: `() => <Heading type="title3">Title3 title</Heading>` },
    { name: "Title4", code: `() => <Heading type="title4">Title4 title</Heading>` },
    { name: "Title5", code: `() => <Heading type="title5">Title5 title</Heading>` },
  ],
};

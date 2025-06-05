import React from "react";
import { Loading } from "@kiwicom/orbit-components";

export default {
  Example: () => <Loading type="buttonLoader" />,
  exampleVariants: [
    {
      name: "ButtonLoader",
      code: `() => <Button loading />`,
    },
    {
      name: "SearchLoader",
      code: `() => <Loading loading type="searchLoader" text="Useful when waiting for the results of a search" />`,
    },
    {
      name: "BoxLoader",
      code: `() => <Loading loading type="boxLoader" text="Useful when content in boxes like cards and card sections is being loaded." />`,
    },
    {
      name: "pageLoader",
      code: `() => <Loading loading text="Useful when an entire page is loading." />`,
    },
    {
      name: "InlineLoader",
      code: `() => <Loading loading type="inlineLoader" text="Useful when content in paragraphs and other inline elements is being loaded." />`,
    },
  ],
};

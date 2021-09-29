import React from "react";
import { Loading } from "@kiwicom/orbit-components";

export default {
  Example: () => <Loading type="buttonLoader" />,
  exampleVariants: [
    {
      name: "ButtonLoader",
      code: `() => <Button loading>Useful when a user has interacted with a button to show that something is happening.</Button>`,
    },
    {
      name: "SearchLoader",
      code: `() => <Loading type="searchLoader">Useful when waiting for the results of a search.</Loading>`,
    },
    {
      name: "BoxLoader",
      code: `() => <Loading type="boxLoader">Useful when content in boxes like cards and card sections is being loaded.</Loading>`,
    },
    {
      name: "pageLoader",
      code: `() => <Loading>Useful when an entire page is loading.</Loading>`,
    },
    {
      name: "InlineLoader",
      code: `() => <Loading type="inlineLoader">Useful when content in paragraphs and other inline elements is being loaded.</Loading>`,
    },
  ],
};

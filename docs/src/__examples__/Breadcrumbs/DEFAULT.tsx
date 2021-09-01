import React from "react";
import { Breadcrumbs, BreadcrumbsItem } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Breadcrumbs onGoBack={event => event.preventDefault()} goBackTitle="Back">
      <BreadcrumbsItem href="https://orbit.kiwi/" onClick={event => event.preventDefault()}>
        Orbit.kiwi
      </BreadcrumbsItem>
      <BreadcrumbsItem
        href="https://orbit.kiwi/components/"
        onClick={event => event.preventDefault()}
      >
        Components
      </BreadcrumbsItem>
      <BreadcrumbsItem>Breadcrumbs</BreadcrumbsItem>
    </Breadcrumbs>
  ),
  exampleKnobs: [
    {
      component: "Breadcrumbs",
      knobs: [
        {
          name: "spaceAfter",
          type: "select",
          defaultValue: "none",
          options: ["none", "smallest", "small", "normal", "medium", "large", "largest"],
        },
        {
          name: "href",
          type: "text",
          defaultValue: "",
        },
      ],
    },
  ],
};

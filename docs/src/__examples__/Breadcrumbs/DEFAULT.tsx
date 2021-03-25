import * as React from "react";
import { Breadcrumbs, BreadcrumbsItem } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Breadcrumbs>
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
  info: {
    title: "Default breadcrumbs",
    description:
      "Breadcrumbs items by default navigation to their provided href and list all necessary metadata so you don't have to set it up yourself.",
  },
};

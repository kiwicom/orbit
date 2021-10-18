// @flow
import * as React from "react";

import Breadcrumbs from "../index";
import BreadcrumbsItem from "../BreadcrumbsItem";

export default {
  Example: (): React.Node => (
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
  info: {
    title: "Breadcrumbs with back button",
    description:
      "If you add onGoBack to the breadcrumbs, it will have a back button. The title for the button is available for translation through the goBackTitle prop.",
  },
};

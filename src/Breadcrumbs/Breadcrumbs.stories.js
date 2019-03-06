// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import { withKnobs } from "@storybook/addon-knobs";

import Breadcrumbs, { BreadcrumbsItem } from "./index";

storiesOf("Breadcrumbs", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Default", () => (
    <Breadcrumbs>
      <BreadcrumbsItem href="https://kiwi.com" onClick={action("clicked")}>
        Kiwi.com
      </BreadcrumbsItem>
      <BreadcrumbsItem href="#1" onClick={action("clicked")}>
        1. Level
      </BreadcrumbsItem>
      <BreadcrumbsItem href="#2" onClick={action("clicked")}>
        2. Level
      </BreadcrumbsItem>
      <BreadcrumbsItem href="#3" onClick={action("clicked")}>
        3. Level
      </BreadcrumbsItem>
      <BreadcrumbsItem href="#4" onClick={action("clicked")}>
        4. Level
      </BreadcrumbsItem>
    </Breadcrumbs>
  ));

// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";

import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Breadcrumbs, { BreadcrumbsItem } from "./index";

storiesOf("Breadcrumbs", module)
  .add(
    "Default",
    () => (
      <Breadcrumbs>
        <BreadcrumbsItem href="https://kiwi.com" onClick={action("clicked")}>
          Kiwi.com
        </BreadcrumbsItem>
        <BreadcrumbsItem href="#1" onClick={action("clicked")}>
          1. Level
        </BreadcrumbsItem>
        <BreadcrumbsItem onClick={action("clicked")}>2. Level</BreadcrumbsItem>
        <BreadcrumbsItem href="#3">3. Level</BreadcrumbsItem>
        <BreadcrumbsItem>4. Level</BreadcrumbsItem>
      </Breadcrumbs>
    ),
    {
      info: "Some description about this type of component. ",
    },
  )
  .add(
    "Playground",
    () => {
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
      return (
        <Breadcrumbs onGoBack={action("onGoBack")} spaceAfter={spaceAfter}>
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
      );
    },
    {
      info: "Some description about this type of component. ",
    },
  );

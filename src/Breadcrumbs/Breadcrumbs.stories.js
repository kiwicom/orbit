// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";

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
      const href = text("href", "https://kiwi.com");
      return (
        <Breadcrumbs onGoBack={action("onGoBack")} spaceAfter={spaceAfter}>
          <BreadcrumbsItem id="rocket" href={href} onClick={action("clicked")}>
            Kiwi.com
          </BreadcrumbsItem>
          <BreadcrumbsItem id="rocket2" href={href} onClick={action("clicked")}>
            1. Level
          </BreadcrumbsItem>
          <BreadcrumbsItem id="rocket3" href={href} onClick={action("clicked")}>
            2. Level
          </BreadcrumbsItem>
          <BreadcrumbsItem id="rocket4" href={href} onClick={action("clicked")}>
            3. Level
          </BreadcrumbsItem>
          <BreadcrumbsItem id="rocket5" href={href} onClick={action("clicked")}>
            4. Level
          </BreadcrumbsItem>
        </Breadcrumbs>
      );
    },
    {
      info: "Some description about this type of component. ",
    },
  );

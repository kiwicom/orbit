// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs } from "@storybook/addon-knobs/react";

import Breadcrumbs, { BreadcrumbsItem } from "./index";

setAddon(chaptersAddon);

storiesOf("Breadcrumbs", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => ({
    info: "Some description about this type of component. ",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
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
            ),
          },
        ],
      },
    ],
  }));

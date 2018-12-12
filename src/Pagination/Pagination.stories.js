// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { action } from "@storybook/addon-actions";
import { withKnobs, number, text } from "@storybook/addon-knobs";

import Pagination from "./index";

setAddon(chaptersAddon);

storiesOf("Pagination", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const pageCount = number("pageCount", 6);

    return {
      info: "Some description about this type of component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Pagination pageCount={pageCount} onPageChange={action("onPageChange")} />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const dataTest = text("dataTest", "test");
    const pageCount = number("pageCount", 6);
    const selectedPage = number("selectedPage", 2);
    const previousLabel = text("previousLabel", "Previous");
    const nextLabel = text("nextLabel", "Next");

    return {
      info: "Some description about this type of component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Pagination
                  dataTest={dataTest}
                  pageCount={pageCount}
                  selectedPage={selectedPage}
                  previousLabel={previousLabel}
                  nextLabel={nextLabel}
                  onPageChange={action("onPageChange")}
                />
              ),
            },
          ],
        },
      ],
    };
  });

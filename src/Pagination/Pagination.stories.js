// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { number, text } from "@storybook/addon-knobs";

import Pagination from "./index";

storiesOf("Pagination", module)
  .add("Default", () => {
    const pageCount = number("pageCount", 6);

    return <Pagination pageCount={pageCount} onPageChange={action("onPageChange")} />;
  })
  .add("Playground", () => {
    const dataTest = text("dataTest", "test");
    const pageCount = number("pageCount", 6);
    const selectedPage = number("selectedPage", 2);
    const previousLabel = text("previousLabel", "Previous");
    const nextLabel = text("nextLabel", "Next");

    return (
      <Pagination
        dataTest={dataTest}
        pageCount={pageCount}
        selectedPage={selectedPage}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        onPageChange={action("onPageChange")}
      />
    );
  });

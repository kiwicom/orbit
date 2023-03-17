import * as React from "react";
import { action } from "@storybook/addon-actions";
import { number, text, boolean, select } from "@storybook/addon-knobs";

import { SIZES } from "./consts";

import Pagination from ".";

export default {
  title: "Pagination",
};

export const Default = () => {
  const pageCount = number("pageCount", 6);
  const labelPrev = text("labelPrev", "prev");
  const labelNext = text("labelNext", "next");
  const labelProgress = text("labelProgress", "of");

  return (
    <Pagination
      labelPrev={labelPrev}
      labelNext={labelNext}
      labelProgress={labelProgress}
      pageCount={pageCount}
      onPageChange={action("onPageChange")}
    />
  );
};

export const WithALotOfPages = () => {
  const selectedPage = number("selectedPage", 44);
  const pageCount = number("pageCount", 100);
  const labelPrev = text("labelPrev", "prev");
  const labelNext = text("labelNext", "next");
  const labelProgress = text("labelProgress", "of");

  return (
    <Pagination
      labelPrev={labelPrev}
      labelNext={labelNext}
      labelProgress={`${selectedPage} ${labelProgress} ${pageCount}`}
      pageCount={pageCount}
      selectedPage={selectedPage}
      onPageChange={action("onPageChange")}
    />
  );
};

WithALotOfPages.story = {
  name: "With a lot of pages",
};

export const SmallSize = () => {
  const size = select("size", Object.values(SIZES), SIZES.SMALL);
  const pageCount = number("pageCount", 100);
  const labelPrev = text("labelPrev", "prev");
  const labelNext = text("labelNext", "next");
  const labelProgress = text("labelProgress", "of");

  return (
    <Pagination
      labelPrev={labelPrev}
      labelNext={labelNext}
      labelProgress={labelProgress}
      pageCount={pageCount}
      size={size}
      onPageChange={action("onPageChange")}
    />
  );
};

SmallSize.story = {
  name: "Small size",
};

export const Playground = () => {
  const dataTest = text("dataTest", "test");
  const pageCount = number("pageCount", 6);
  const selectedPage = number("selectedPage", 2);
  const hideLabels = boolean("hideLabels", false);
  const size = select("size", Object.values(SIZES), SIZES.NORMAL);
  const labelPrev = text("labelPrev", "prev");
  const labelNext = text("labelNext", "next");
  const labelProgress = text("labelProgress", "of");

  return (
    <Pagination
      labelPrev={labelPrev}
      labelNext={labelNext}
      labelProgress={labelProgress}
      dataTest={dataTest}
      pageCount={pageCount}
      selectedPage={selectedPage}
      onPageChange={action("onPageChange")}
      hideLabels={hideLabels}
      size={size}
    />
  );
};

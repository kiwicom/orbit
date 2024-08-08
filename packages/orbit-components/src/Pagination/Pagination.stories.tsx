import * as React from "react";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SIZES } from "./consts";

import Pagination from ".";

export default {
  title: "Pagination",
};

export const Default = ({ selectedPage, pageCount, labelPrev, labelNext, labelProgress }) => {
  return (
    <Pagination
      labelPrev={labelPrev}
      labelNext={labelNext}
      labelProgress={`${selectedPage} ${labelProgress} ${pageCount}`}
      pageCount={pageCount}
      onPageChange={action("onPageChange")}
    />
  );
};

Default.args = {
  selectedPage: 1,
  pageCount: 6,
  labelPrev: "prev",
  labelNext: "next",
  labelProgress: "of",
};

export const WithALotOfPages = ({
  selectedPage,
  pageCount,
  labelPrev,
  labelNext,
  labelProgress,
}) => {
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

WithALotOfPages.args = {
  selectedPage: 44,
  pageCount: 100,
  labelPrev: "prev",
  labelNext: "next",
  labelProgress: "of",
};

export const SmallSize = ({
  selectedPage,
  size,
  pageCount,
  labelPrev,
  labelNext,
  labelProgress,
}) => {
  return (
    <Pagination
      labelPrev={labelPrev}
      labelNext={labelNext}
      labelProgress={`${selectedPage} ${labelProgress} ${pageCount}`}
      pageCount={pageCount}
      size={size}
      onPageChange={action("onPageChange")}
    />
  );
};

SmallSize.story = {
  name: "Small size",
};

SmallSize.args = {
  selectedPage: 1,
  size: SIZES.SMALL,
  pageCount: 100,
  labelPrev: "prev",
  labelNext: "next",
  labelProgress: "of",
};

SmallSize.argTypes = {
  size: {
    options: Object.values(SIZES),
    control: {
      type: "select",
    },
  },
};

export const Playground = ({
  dataTest,
  pageCount,
  selectedPage,
  hideLabels,
  size,
  labelPrev,
  labelNext,
  labelProgress,
}) => {
  return (
    <Pagination
      labelPrev={labelPrev}
      labelNext={labelNext}
      labelProgress={`${selectedPage} ${labelProgress} ${pageCount}`}
      dataTest={dataTest}
      pageCount={pageCount}
      selectedPage={selectedPage}
      onPageChange={action("onPageChange")}
      hideLabels={hideLabels}
      size={size}
    />
  );
};

Playground.args = {
  dataTest: "test",
  pageCount: 6,
  selectedPage: 2,
  hideLabels: false,
  size: SIZES.NORMAL,
  labelPrev: "prev",
  labelNext: "next",
  labelProgress: "of",
};

Playground.argTypes = {
  size: {
    options: Object.values(SIZES),
    control: {
      type: "select",
    },
  },
};

export const Rtl = ({ pageCount, selectedPage, hideLabels, size, labelProgress }) => {
  return (
    <RenderInRtl>
      <Pagination
        labelPrev="Prev"
        labelNext="Next"
        labelProgress={labelProgress}
        pageCount={pageCount}
        selectedPage={selectedPage}
        onPageChange={action("onPageChange")}
        hideLabels={hideLabels}
        size={size}
      />
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",
  parameters: {
    info: (
      <div dir="ltr">
        <p className="mb-400">
          Note that when you use bidirectional text (including both RTL and LTR words) for{" "}
          <code>labelProgress</code> prop, it may not render properly due to how in-browser unicode
          bidirectional algorithm works.
        </p>
        <p className="mb-400">
          If that’s the case, you should wrap every given word properly to ensure correct rendering.
          Eg.{" "}
          <code>
            &lt;span dir=&quot;rtl&quot;&gt;שלום &lt;span
            dir=&quot;ltr&quot;&gt;world!&lt;/span&gt;&lt;/span&gt;
          </code>
        </p>
        <p>
          <a
            href="https://www.w3.org/International/articles/inline-bidi-markup/"
            target="_blank"
            rel="noreferrer"
          >
            More info
          </a>
        </p>
      </div>
    ),
  },
};

Rtl.args = {
  pageCount: 6,
  selectedPage: 2,
  hideLabels: false,
  size: SIZES.NORMAL,
  labelProgress: "2 מתוך 6",
};

Rtl.argTypes = {
  size: {
    options: Object.values(SIZES),
    control: {
      type: "select",
    },
  },
};

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { number, text, boolean, select } from "@storybook/addon-knobs";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SIZES } from "./consts";

import Pagination from ".";

export default {
  title: "Pagination",
};

export const Default = () => {
  const selectedPage = number("selectedPage", 1);
  const pageCount = number("pageCount", 6);
  const labelPrev = text("labelPrev", "prev");
  const labelNext = text("labelNext", "next");
  const labelProgress = text("labelProgress", "of");

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
  const selectedPage = number("selectedPage", 1);
  const size = select("size", Object.values(SIZES), SIZES.SMALL);
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

export const Rtl = () => {
  const pageCount = number("pageCount", 6);
  const selectedPage = number("selectedPage", 2);
  const hideLabels = boolean("hideLabels", false);
  const size = select("size", Object.values(SIZES), SIZES.NORMAL);
  const labelProgress = text("labelProgress", "2 מתוך 6");

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
        <p className="mb-md">
          Note that when you use bidirectional text (including both RTL and LTR words) for{" "}
          <code>labelProgress</code> prop, it may not render properly due to how in-browser unicode
          bidirectional algorithm works.
        </p>
        <p className="mb-md">
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

// @flow
import * as React from "react";

import PictureCard from "../index";
import Stack from "../../Stack";

export default {
  Example: () => (
    <Stack>
      <PictureCard
        href="https://www.kiwi.com/en/landing/london-united-kingdom/athens-greece/"
        image={{
          code: "athens_gr",
          name: "Athens, Greece",
          original: "1200x628",
        }}
      />
      <PictureCard
        external
        href="https://www.kiwi.com/en/landing/london-united-kingdom/athens-greece/"
        image={{
          code: "athens_gr",
          name: "Athens, Greece",
          original: "1200x628",
        }}
      />
    </Stack>
  ),
  info: {
    title: "Links",
    description:
      "To turn the card into a link as an <code><a></code> element, pass the <code>href</code> prop. Passing <code>external</code> will make it open in a new window with the appropriate <code>rel</code> attribute for security..",
  },
};

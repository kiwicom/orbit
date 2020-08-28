// @flow
import * as React from "react";

import Button from "../../Button";
import PictureCard from "../index";

export default {
  Example: () => (
    <PictureCard
      actions={
        <Button
          href="https://www.kiwi.com/en/landing/london-united-kingdom/athens-greece/"
          external
        >
          Find connections
        </Button>
      }
      image={{
        code: "athens_gr",
        name: "Athens, Greece",
        original: "1200x628",
      }}
    />
  ),
  info: {
    title: "Actions",
    description:
      "Actions adds space for actionable elements like buttons to appear on hover/focus.",
  },
};

// @flow
import * as React from "react";

import PictureCard from "../index";

export default {
  Example: () => (
    <PictureCard
      onClick={() => {
        window.open(
          "https://www.kiwi.com/en/landing/london-united-kingdom/athens-greece/",
          "_blank",
          "noopener,noreferrer",
        );
      }}
      image={{
        code: "athens_gr",
        name: "Athens, Greece",
        original: "1200x628",
      }}
    />
  ),
  info: {
    title: "On click",
    description:
      "To add interactions on click, enter, or space, use the <code>onClick</code> callback. By default, adding an <code>onClick</code> callback will make the card focusable.",
  },
};

// @flow
import * as React from "react";

import PictureCard from "../index";

export default {
  Example: () => (
    <PictureCard
      image={{
        code: "athens_gr",
        name: "Athens, Greece",
        original: "1200x628",
      }}
    />
  ),
  info: {
    title: "Default picture card",
    description:
      "By default, picture cards present the picture in a container with a height of 300px and a width that fills its parent. If you are not providing a title or other text, use the image's <code>name</code> to provide alternative text. With no content, the card defaults to not being focusable.",
  },
};

// @flow
import * as React from "react";

import PictureCard from "../index";

export default {
  Example: () => (
    <PictureCard
      image={{
        name: "Athens, Greece",
        src: "https://cdn.pixabay.com/photo/2019/09/29/17/21/greece-4513852_1280.jpg",
      }}
    />
  ),
  info: {
    title: "Custom image",
    description:
      "You can pass any image you like using the <code>src</code> prop in <code>image</code>.",
  },
};

import React from "react";

import type { Props } from "./types";

import Slider from ".";

export default function SliderStory(props: Props) {
  return (
    <div className="py-400 px-600">
      <Slider {...props} />
    </div>
  );
}

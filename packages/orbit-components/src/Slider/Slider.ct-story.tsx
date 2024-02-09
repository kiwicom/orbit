import React from "react";

import type { Props } from "./types";

import Slider from ".";

export default function SliderStory(props: Props) {
  return (
    <div className="py-md px-lg">
      <Slider {...props} />
    </div>
  );
}

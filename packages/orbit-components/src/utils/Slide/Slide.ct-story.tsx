import * as React from "react";

import type { Props } from "./types";

import Slide from ".";

export function SlideStory(props: Omit<Props, "children">) {
  return (
    <div className="p-400">
      <Slide {...props}>
        Some
        <br />
        elaborate
        <br />
        content.
      </Slide>
    </div>
  );
}

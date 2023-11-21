import * as React from "react";

import type { Props } from "./types";

import Radio from ".";

// Green backgrounds to provide contrast

export function Test(props: Props) {
  return (
    <div className="p-xxs bg-[#CFC]">
      <Radio label="Label" {...props} />
    </div>
  );
}

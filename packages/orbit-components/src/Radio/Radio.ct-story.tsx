import * as React from "react";

import type { Props } from "./types";

import Radio, { FakeRadio } from ".";

// Green backgrounds to provide contrast

export function Test(props: Props) {
  return (
    <div className="bg-[#CFC]">
      <Radio label="Label" {...props} />
    </div>
  );
}

export function TestFakeRadio() {
  return (
    <div className="space-y-200 flex flex-col">
      <FakeRadio />
      <FakeRadio checked />
      <FakeRadio disabled />
      <FakeRadio disabled checked />
      <FakeRadio hasError />
    </div>
  );
}

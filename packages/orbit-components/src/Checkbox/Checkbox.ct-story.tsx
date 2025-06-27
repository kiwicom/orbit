import React from "react";

import Checkbox, { FakeCheckbox } from ".";

export function CheckboxStory() {
  return (
    <div className="space-y-200 flex flex-col">
      <Checkbox label="Check this box" />
      <Checkbox label="Check this box" info="I will find you and will tick you" />
      <Checkbox label="Check this box" checked />
      <Checkbox label="Check this box" disabled />
      <Checkbox label="Check this box" disabled checked />
      <Checkbox label="Check this box" hasError />
      <p>FakeCheckbox</p>
      <FakeCheckbox />
      <FakeCheckbox checked />
      <FakeCheckbox disabled />
      <FakeCheckbox disabled checked />
      <FakeCheckbox hasError />
    </div>
  );
}

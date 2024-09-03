import React from "react";

import Tooltip from "../Tooltip";

import Checkbox from ".";

export function CheckboxStory() {
  return (
    <div className="space-y-200 flex flex-col">
      <Checkbox label="Check this box" />
      <Checkbox label="Check this box" info="I will find you and will tick you" />
      <Checkbox label="Check this box" checked />
      <Checkbox label="Check this box" disabled />
      <Checkbox label="Check this box" disabled checked />
      <Checkbox label="Check this box" hasError />
    </div>
  );
}

export function CheckboxWithTooltipStory() {
  return (
    <div className="space-y-200 lm:pt-1200 lm:min-h-800 flex min-h-[700px] flex-col">
      <Checkbox
        label="Check this box"
        tooltip={<Tooltip content="Tooltip content is visible" placement="top" />}
        checked
      />
    </div>
  );
}

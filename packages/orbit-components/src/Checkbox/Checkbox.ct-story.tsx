import React from "react";

import Text from "../Text";

import Checkbox from ".";

export default function CheckboxStory() {
  return (
    <div className="space-y-xs flex flex-col">
      <Checkbox label="Check this box" />
      <Checkbox label="Check this box" info="I will find you and will tick you" />
      <Checkbox label="Check this box" checked />
      <Checkbox label="Check this box" disabled />
      <Checkbox label="Check this box" disabled checked />
      <Checkbox label="Check this box" disabled tooltip={<Text>Tooltip</Text>} />
      <Checkbox label="Check this box" hasError />
    </div>
  );
}

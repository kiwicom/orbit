import React from "react";

import Airplane from "../icons/Airplane";
import ChevronDown from "../icons/ChevronDown";
import Button from "../Button";

import ButtonGroup from ".";

export default function ButtonGroupVisualStory() {
  return (
    <ButtonGroup>
      <Button iconLeft={<Airplane ariaHidden />}>Button</Button>
      <Button iconLeft={<ChevronDown ariaHidden />} title="Show more" />
    </ButtonGroup>
  );
}

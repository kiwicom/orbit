import React from "react";
import { Checkbox, Stack } from "@kiwicom/orbit-components";

const Checkboxes = () => {
  const label = "Text label";
  const info = "Additional info";

  return (
    <Stack>
      <Stack direction="row">
        <Checkbox label={label} info={info} />
        <Checkbox label={label} info={info} checked />
      </Stack>
      <Stack direction="row">
        <Checkbox label={label} info={info} hasError />
        <Checkbox label={label} info={info} disabled />
      </Stack>
    </Stack>
  );
};

export default Checkboxes;

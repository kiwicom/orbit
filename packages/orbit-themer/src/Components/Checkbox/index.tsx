import React from "react";
import { Checkbox, Stack } from "@kiwicom/orbit-components";

const Checkboxes = () => {
  const label = "Text label";
  const info = "Additional info";

  return (
    <Stack>
      <Stack direction="row">
        <Checkbox label={label} info={info} readOnly />
        <Checkbox label={label} info={info} checked readOnly />
      </Stack>
      <Stack direction="row">
        <Checkbox label={label} info={info} hasError readOnly />
        <Checkbox label={label} info={info} disabled readOnly />
      </Stack>
    </Stack>
  );
};

export default Checkboxes;

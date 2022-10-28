import React from "react";
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox";
import Stack from "@kiwicom/orbit-components/lib/Stack";

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

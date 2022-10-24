import React from "react";
import Radio from "@kiwicom/orbit-components/lib/Radio";
import Stack from "@kiwicom/orbit-components/lib/Stack";

const Radios = () => {
  const label = "Text label";
  const info = "Additional info";

  return (
    <Stack>
      <Stack direction="row">
        <Radio label={label} info={info} readOnly />
        <Radio label={label} info={info} checked readOnly />
      </Stack>
      <Stack direction="row">
        <Radio label={label} info={info} hasError readOnly />
        <Radio label={label} info={info} disabled readOnly />
      </Stack>
    </Stack>
  );
};

export default Radios;

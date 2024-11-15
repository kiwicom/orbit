import React from "react";
import { Radio, Stack } from "@kiwicom/orbit-components";

const Radios = () => {
  const label = "Text label";
  const info = "Additional info";

  return (
    <Stack>
      <Stack direction="row">
        <Radio label={label} info={info} />
        <Radio label={label} info={info} checked />
      </Stack>
      <Stack direction="row">
        <Radio label={label} info={info} hasError />
        <Radio label={label} info={info} disabled />
      </Stack>
    </Stack>
  );
};

export default Radios;

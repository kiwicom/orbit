import React from "react";
import { Button, Stack } from "@kiwicom/orbit-components";

const Buttons = () => {
  const size = "small";
  return (
    <Stack>
      <Stack direction="row">
        <Button size={size} type="primary">
          Primary
        </Button>
        <Button size={size} type="primarySubtle">
          Primary subtle
        </Button>
      </Stack>
      <Stack direction="row">
        <Button size={size} type="critical">
          Critical
        </Button>
        <Button size={size} type="criticalSubtle">
          Critical subtle
        </Button>
      </Stack>
      <Stack direction="row">
        <Button size={size} type="secondary">
          Secondary
        </Button>
        <Button size={size} type="white">
          White
        </Button>
      </Stack>
    </Stack>
  );
};

export default Buttons;

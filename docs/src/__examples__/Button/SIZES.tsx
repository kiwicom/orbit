import * as React from "react";
import { Stack, Button } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack flex>
      <Button size="small">Small button</Button>
      <Button>Normal button</Button>
      <Button size="large">Large button</Button>
    </Stack>
  ),
};

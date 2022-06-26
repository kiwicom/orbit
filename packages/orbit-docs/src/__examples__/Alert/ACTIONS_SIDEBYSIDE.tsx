import React from "react";
import { Heading, Stack, Alert, AlertButton } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack shrink direction="column" spacing="XSmall">
      <Heading type="title5">Type: Success</Heading>
      <Alert type="success" title="Your payment was successful." icon>
        <Stack flex spacing="XSmall">
          <AlertButton type="success">Success</AlertButton>
          <AlertButton type="successSubtle">Success</AlertButton>
        </Stack>
      </Alert>
    </Stack>
  ),
};

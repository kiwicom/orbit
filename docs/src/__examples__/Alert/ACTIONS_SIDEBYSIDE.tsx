import React from "react";
import { Heading, Stack, Alert, AlertButton } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack shrink direction="column" spacing="200">
      <Heading type="title5">Type: Success</Heading>
      <Alert type="success" title="Your payment was successful." icon>
        <Stack flex spacing="200">
          <AlertButton type="success">Success</AlertButton>
          <AlertButton type="successSubtle">Success</AlertButton>
        </Stack>
      </Alert>
    </Stack>
  ),
};

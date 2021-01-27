// @flow
import * as React from "react";

import Alert from "../index";
import AlertButton from "../AlertButton";
import Heading from "../../Heading";
import Stack from "../../Stack";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack direction="row">
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title5">Type: Success</Heading>
          <Alert type="success" title="Your payment was successful." icon>
            <Stack flex>
              <AlertButton type="success">Success</AlertButton>
              <AlertButton type="successSubtle">Success</AlertButton>
            </Stack>
          </Alert>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title5">Type: Info</Heading>
          <Alert type="info" title="Check your details." icon>
            <Stack flex>
              <AlertButton type="info">More info</AlertButton>
              <AlertButton type="infoSubtle">Contact support</AlertButton>
            </Stack>
          </Alert>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title5">Type: Warning</Heading>
          <Alert type="warning" title="Visa may be required." icon>
            <Stack flex>
              <AlertButton type="warning">Check visa requirements</AlertButton>
              <AlertButton type="warningSubtle">Contact support</AlertButton>
            </Stack>
          </Alert>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title5">Type: Critical</Heading>
          <Alert type="critical" title="Your payment failed." icon>
            <Stack flex>
              <AlertButton type="critical">Retry</AlertButton>
              <AlertButton type="criticalSubtle">Contact support</AlertButton>
            </Stack>
          </Alert>
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Actions",
    description:
      "Alerts have the possibility to include actions with the message. Use special buttons to match the button color with the alert color.",
  },
};

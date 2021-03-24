import * as React from "react";
import { Stack, Heading, AlertButton } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack direction="row" align="end" spaceAfter="medium">
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title5">Type: Success</Heading>
          <AlertButton type="success">Success</AlertButton>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title5">Type: Info</Heading>
          <AlertButton type="info">Info</AlertButton>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title5">Type: Warning</Heading>
          <AlertButton type="warning">Warning</AlertButton>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title5">Type: Critical</Heading>
          <AlertButton type="critical">Critical</AlertButton>
        </Stack>
      </Stack>
      <Stack direction="row" align="end">
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title5">Type: Success Subtle</Heading>
          <AlertButton type="successSubtle">Success</AlertButton>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title5">Type: Info Subtle</Heading>
          <AlertButton type="infoSubtle">Info</AlertButton>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title5">Type: Warning Subtle</Heading>
          <AlertButton type="warningSubtle">Warning</AlertButton>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title5">Type: Critical Subtle</Heading>
          <AlertButton type="criticalSubtle">Critical</AlertButton>
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

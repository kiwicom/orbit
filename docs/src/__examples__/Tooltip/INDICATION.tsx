import React from "react";
import { Heading, Stack, Text, Tooltip, Alert } from "@kiwicom/orbit-components";
import { CheckCircle, Visa } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack>
      <Text>
        If you&apos;re building a travel app, you should give{" "}
        <Tooltip
          renderInPortal={false}
          content={
            <Stack>
              <Heading inverted as="h3" type="title3">
                Orbit design system
              </Heading>
              <Text>An open source design system for your next travel project.</Text>
            </Stack>
          }
        >
          <Text>Orbit</Text>
        </Tooltip>{" "}
        a try.
      </Text>
      <Alert icon={<CheckCircle />} type="success">
        If you&apos;re building a travel app, you should give{" "}
        <Tooltip
          renderInPortal={false}
          content={
            <Stack>
              <Heading inverted as="h3" type="title3">
                Orbit design system
              </Heading>
              <Text>An open source design system for your next travel project.</Text>
            </Stack>
          }
        >
          <Text>Orbit</Text>
        </Tooltip>{" "}
        a try.
      </Alert>
      <Alert icon={<Visa />} type="warning">
        You{" "}
        <Tooltip renderInPortal={false} content={<Text>Check with your embassy.</Text>}>
          <Text>may need a visa</Text>
        </Tooltip>{" "}
        for your trip.
      </Alert>
      <Text>
        The following text has a tooltip:{" "}
        <Tooltip
          removeUnderlinedText
          renderInPortal={false}
          content={
            <Stack>
              <Heading inverted as="h3" type="title3">
                Orbit design system
              </Heading>
              <Text>An open source design system for your next travel project.</Text>
            </Stack>
          }
        >
          <Text>Orbit</Text>
        </Tooltip>
      </Text>
    </Stack>
  ),
};

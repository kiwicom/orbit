import React from "react";
import { Heading, Stack, Button } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack flex>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Type: Primary</Heading>
          <Button>Add passenger</Button>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Type: Secondary</Heading>
          <Button type="secondary">Cancel</Button>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Type: Critical</Heading>
          <Button type="critical">Cancel</Button>
        </Stack>
        <Stack>
          <div
            style={{
              backgroundColor: "#252A31",
              padding: "12px",
              paddingTop: "0",
            }}
          >
            <Stack shrink direction="column" spacing="XSmall">
              <Heading inverted type="title3">
                Type: White
              </Heading>

              <Button type="white">Cancel</Button>
            </Stack>
          </div>
        </Stack>
      </Stack>
      <Stack flex>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Type: Primary Subtle</Heading>
          <Button type="primarySubtle">Add passenger</Button>
        </Stack>
        <div />
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Type: Critical Subtle</Heading>
          <Button type="criticalSubtle">Cancel</Button>
        </Stack>
        <div />
      </Stack>
    </Stack>
  ),
  knobs: [
    {
      name: "type",
      type: "select",
      defaultValue: "primary",
      options: ["primary", "secondary", "critical", "primarySubtle", "criticalSubtle", "white"],
    },
  ],
};

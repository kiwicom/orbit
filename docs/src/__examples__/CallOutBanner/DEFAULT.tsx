import React from "react";
import { InformationCircle, NewWindow } from "@kiwicom/orbit-components/icons";
import { CallOutBanner, Button, Stack, TextLink, Illustration } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <CallOutBanner
      title="Accommodation in Warsaw"
      description="Select the perfect place to rest during your stay in Warsaw."
      illustration={<Illustration name="Accommodation" />}
      actions={
        <Stack flex align="center">
          <Button
            size="small"
            type="secondary"
            href="https://rooms.kiwi.com"
            external
            iconRight={<NewWindow ariaLabel="Opens in new window" />}
          >
            Find a room
          </Button>
          <TextLink iconLeft={<InformationCircle ariaHidden />} size="small" standAlone>
            More info
          </TextLink>
        </Stack>
      }
    />
  ),
  exampleKnobs: [
    {
      component: "CallOutBanner",
      knobs: [
        {
          name: "title",
          type: "text",
          defaultValue: "Accommodation in Warsaw",
        },
        {
          name: "description",
          type: "text",
          defaultValue: "Select the perfect place to rest during your stay in Warsaw.",
        },
      ],
    },
  ],
};

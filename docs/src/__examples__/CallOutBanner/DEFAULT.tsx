import * as React from "react";
import * as Icons from "@kiwicom/orbit-components/icons";
import { CallOutBanner, Button, Stack, TextLink, Illustration } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <CallOutBanner
      title="Accommodation in Warsaw"
      description="Select the perfect place to rest during your stay in Warsaw."
      illustration={<Illustration name="Accommodation" />}
      actions={
        <Stack flex align="center">
          <Button size="small" type="secondary" href="https://rooms.kiwi.com" external>
            Find a room
          </Button>
          <TextLink iconLeft={<Icons.InformationCircle />} size="small" standAlone>
            More info
          </TextLink>
        </Stack>
      }
    />
  ),
  info: {
    title: "Default callout banner",
    description: "Callout banners use illustrations and titles to draw attention to actions.",
  },
};

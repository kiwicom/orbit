// @flow
import * as React from "react";

import Button from "../../Button";
import ButtonLink from "../../ButtonLink";
import CallOutBanner from "../index";
import Illustration from "../../Illustration";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <CallOutBanner
      title="Accommodation in Warsaw"
      description="Select the perfect place to rest during your stay in Warsaw."
      illustration={<Illustration name="Accommodation" />}
      actions={
        <Stack flex>
          <Button size="small" type="secondary" href="https://rooms.kiwi.com" external>
            Find a room
          </Button>
          <ButtonLink iconLeft={<Icons.InformationCircle />} size="small" type="inline">
            More info
          </ButtonLink>
        </Stack>
      }
    />
  ),
  info: {
    title: "Default callout banner",
    description: "Callout banners use illustrations and titles to draw attention to actions.",
  },
};

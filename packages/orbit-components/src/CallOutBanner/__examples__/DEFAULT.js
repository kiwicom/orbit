// @flow
import * as React from "react";

import Button from "../../Button";
import TextLink from "../../TextLink";
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

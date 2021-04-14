import * as React from "react";
import { Check, InformationCircle } from "@kiwicom/orbit-components/icons";
import {
  CallOutBanner,
  Button,
  Stack,
  List,
  ListItem,
  TextLink,
  Illustration,
} from "@kiwicom/orbit-components";

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
          <TextLink iconLeft={<InformationCircle />} size="small" standAlone>
            More info
          </TextLink>
        </Stack>
      }
    >
      <List type="secondary">
        <ListItem icon={<Check color="success" />}>50% off</ListItem>
        <ListItem icon={<Check color="success" />}>From budget deals to ultimate luxury</ListItem>
      </List>
    </CallOutBanner>
  ),
  info: {
    title: "With structured content",
    description:
      "When you have more information to present, try to structure it with components like lists so users can scan it quickly.",
  },
};

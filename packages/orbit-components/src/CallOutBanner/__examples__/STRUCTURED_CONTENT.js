// @flow
import * as React from "react";

import Button from "../../Button";
import TextLink from "../../TextLink";
import CallOutBanner from "../index";
import Illustration from "../../Illustration";
import List from "../../List";
import ListItem from "../../List/ListItem";
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
    >
      <List type="secondary">
        <ListItem icon={<Icons.Check color="success" />}>50% off</ListItem>
        <ListItem icon={<Icons.Check color="success" />}>
          From budget deals to ultimate luxury
        </ListItem>
      </List>
    </CallOutBanner>
  ),
  info: {
    title: "With structured content",
    description:
      "When you have more information to present, try to structure it with components like lists so users can scan it quickly.",
  },
};

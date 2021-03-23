import * as React from "react";
import { Heading, Stack, Text, List, ListItem, TextLink, Tooltip } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Text>
      If you&apos;re building a travel app, you should give{" "}
      <Tooltip
        content={
          <Stack>
            <img
              src="https://orbit.kiwi/wp-content/themes/design-systems-docs/images/orbit-header.png"
              alt=""
              width="350px"
            />
            <Heading inverted as="h3" type="title3">
              Orbit design system
            </Heading>
            <Text>An open source design system for your next travel project.</Text>
            <List>
              <ListItem>
                <TextLink external href="https://orbit.kiwi">
                  Documentation
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink external href="https://github.com/kiwicom/orbit">
                  GitHub repo
                </TextLink>
              </ListItem>
            </List>
          </Stack>
        }
      >
        <Text>Orbit</Text>
      </Tooltip>{" "}
      a try.
    </Text>
  ),
  info: {
    title: "Other content",
    description:
      "Tooltips are very flexible in terms of the content they accept. Text and TextLink components are automatically rendered in white. Other components (such as the Heading in the example) may have to be adjusted.",
  },
};

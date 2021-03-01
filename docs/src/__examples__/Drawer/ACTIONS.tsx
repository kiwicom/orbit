import * as React from "react";
import {
  Drawer,
  Button,
  ButtonLink,
  Heading,
  Stack,
  Text,
  List,
  ListItem,
  Tile,
} from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

export default {
  Example: () => {
    const [showDrawer, setShowDrawer] = React.useState(false);
    return (
      <>
        {showDrawer && (
          <Drawer
            actions={
              <Button size="small" type="secondary">
                Sign in
              </Button>
            }
            title="Help"
            onClose={() => {
              setShowDrawer(false);
            }}
            shown={showDrawer}
          >
            <Stack>
              <Stack>
                <Heading as="h3" type="title3">
                  Priority Boarding
                </Heading>
                <Text>Priority Boarding will get you where you need to go.</Text>
                <Text>Advantages</Text>
                <List>
                  <ListItem>You go to the front of the line for boarding.</ListItem>
                  <ListItem>Your cabin bag is guaranteed to be allowed in the cabin.</ListItem>
                </List>
              </Stack>
              <Heading as="h4" type="title3">
                Related articles
              </Heading>
              <Tile
                title="Cabin baggage"
                description="Small baggage you take into the plane with you"
              />
              <Tile
                title="Self transfer"
                description="How to get quickly to the next part of your trip"
              />
            </Stack>
          </Drawer>
        )}
        <Stack flex>
          <Button type="secondary">Add priority boarding</Button>
          <ButtonLink
            iconLeft={<Icons.QuestionCircle />}
            title="Open help"
            circled
            onClick={() => {
              setShowDrawer(true);
            }}
          />
        </Stack>
      </>
    );
  },
  info: {
    title: "Actions",
    description:
      "If you need buttons at the top of your drawer, for example to encourage signing in for personalized help, use the drawer's actions.",
  },
};

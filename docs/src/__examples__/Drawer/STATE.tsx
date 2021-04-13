import * as React from "react";
import { Button, ButtonLink, Heading, Stack, Text, Drawer, Tile } from "@kiwicom/orbit-components";
import { QuestionCircle } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [showDrawer, setShowDrawer] = React.useState(false);
    const [article, setArticle] = React.useState("priority");

    let title = "";
    let content = "";
    let tiles;
    const cabinTile = (
      <Tile
        title="Cabin baggage"
        description="Small baggage you take into the plane with you"
        onClick={() => setArticle("cabin")}
      />
    );
    const transferTile = (
      <Tile
        title="Self-transfer"
        description="How to get quickly to the next part of your trip"
        onClick={() => setArticle("transfer")}
      />
    );
    const priorityTile = (
      <Tile
        title="Priority Boarding"
        description="Jump to the front of the line"
        onClick={() => setArticle("priority")}
      />
    );
    switch (article) {
      case "cabin":
        title = "Cabin baggage";
        content = "Cabin baggage is mall baggage you take into the plane with you.";
        tiles = (
          <Stack>
            {transferTile}
            {priorityTile}
          </Stack>
        );
        break;
      case "transfer":
        title = "Self-transfer";
        content =
          "To transfer fast, purchase priority boarding and only take cabin baggage with you so you don't have to pick up any checked baggage";
        tiles = (
          <Stack>
            {cabinTile}
            {priorityTile}
          </Stack>
        );
        break;
      default:
        title = "Priority boarding";
        content = "Priority Boarding will get you where you need to go.";
        tiles = (
          <Stack>
            {transferTile}
            {cabinTile}
          </Stack>
        );
    }
    return (
      <>
        {showDrawer && (
          <Drawer
            title="Help"
            onClose={() => {
              setShowDrawer(false);
            }}
            shown={showDrawer}
          >
            <Stack>
              <Stack>
                <Heading as="h3" type="title3">
                  {title}
                </Heading>
                <Text>{content}</Text>
              </Stack>
              <Heading as="h4" type="title3">
                Related articles
              </Heading>
              <Text type="secondary">Click a tile to change the state.</Text>
              {tiles}
            </Stack>
          </Drawer>
        )}
        <Stack flex>
          <Button type="secondary">Add priority boarding</Button>
          <ButtonLink
            iconLeft={<QuestionCircle />}
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
    title: "State",
    description:
      "If the content of your drawer might change, keep the most recent state active even on open and close.",
  },
};

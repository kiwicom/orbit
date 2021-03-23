import * as React from "react";
import { Button, Drawer, LinkList, Stack, TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showDefaultDrawer, setShowDefaultDrawer] = React.useState(false);
    const [showWideDrawer, setShowWideDrawer] = React.useState(false);
    const content = (
      <LinkList>
        <TextLink href="https://orbit.kiwi/components/drawer/" external type="secondary">
          Drawer guidelines
        </TextLink>
        <TextLink href="https://orbit.kiwi/components/drawer/react/" external type="secondary">
          Drawer React API
        </TextLink>
        <TextLink
          href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/Drawer"
          external
          type="secondary"
        >
          Drawer on GitHub
        </TextLink>
      </LinkList>
    );
    return (
      <>
        {showDefaultDrawer && (
          <Drawer
            onClose={() => {
              setShowDefaultDrawer(false);
            }}
            shown={showDefaultDrawer}
          >
            {content}
          </Drawer>
        )}
        {showWideDrawer && (
          <Drawer
            width="580px"
            onClose={() => {
              setShowWideDrawer(false);
            }}
            shown={showWideDrawer}
          >
            {content}
          </Drawer>
        )}
        <Stack>
          <Button
            onClick={() => {
              setShowDefaultDrawer(true);
            }}
          >
            Open default drawer
          </Button>
          <Button
            onClick={() => {
              setShowWideDrawer(true);
            }}
          >
            Open wide drawer
          </Button>
        </Stack>
      </>
    );
  },
  info: {
    title: "Width",
    description: "You can specify a width for your drawer. The default is 320px.",
  },
};

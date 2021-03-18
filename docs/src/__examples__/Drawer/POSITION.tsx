import * as React from "react";
import { Button, Drawer, LinkList, Stack, TextLink } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [showLeftDrawer, setShowLeftDrawer] = React.useState(false);
    const [showRightDrawer, setShowRightDrawer] = React.useState(false);
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
        {showLeftDrawer && (
          <Drawer
            position="left"
            onClose={() => {
              setShowLeftDrawer(false);
            }}
            shown={showLeftDrawer}
          >
            {content}
          </Drawer>
        )}
        <Stack justify="center">
          <Button
            iconLeft={<Icons.ChevronLeft />}
            title="Open left drawer"
            onClick={() => {
              setShowLeftDrawer(true);
            }}
          />
          <Button
            iconLeft={<Icons.ChevronRight />}
            title="Open right drawer"
            onClick={() => {
              setShowRightDrawer(true);
            }}
          />
        </Stack>
        {showRightDrawer && (
          <Drawer
            onClose={() => {
              setShowRightDrawer(false);
            }}
            shown={showRightDrawer}
          >
            {content}
          </Drawer>
        )}
      </>
    );
  },
  info: {
    title: "Position",
    description: "Drawers can appear on the left or the right (the default).",
  },
};

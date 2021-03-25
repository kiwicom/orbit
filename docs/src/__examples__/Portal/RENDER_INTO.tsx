import * as React from "react";
import { Button, Portal, TextLink, Drawer, LinkList } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showDrawer, setShowDrawer] = React.useState(false);
    return (
      <>
        <Portal renderInto="docs-root">
          {showDrawer && (
            <Drawer
              onClose={() => {
                setShowDrawer(false);
              }}
              shown={showDrawer}
            >
              <LinkList>
                <TextLink href="https://orbit.kiwi/components/drawer/" external type="secondary">
                  Drawer guidelines
                </TextLink>
                <TextLink
                  href="https://orbit.kiwi/components/drawer/react/"
                  external
                  type="secondary"
                >
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
            </Drawer>
          )}
        </Portal>
        {!showDrawer && (
          <Button
            onClick={() => {
              setShowDrawer(true);
            }}
          >
            Show drawer
          </Button>
        )}
      </>
    );
  },
  info: {
    title: "Render into",
    description:
      "The portal's contents can be rendered into any div you want outside the DOM hierarchy of the parent. Just give the div the same id that you pass to the portal's <code>renderInto</code> prop.",
  },
};

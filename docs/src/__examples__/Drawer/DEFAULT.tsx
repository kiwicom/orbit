import * as React from "react";
import { Drawer, Button, LinkList, TextLink } from "@kiwicom/orbit-components";
import { MenuHamburger } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    const [showDrawer, setShowDrawer] = React.useState(false);
    return (
      <>
        {showDrawer && (
          <Drawer
            onClose={() => {
              setShowDrawer(false);
            }}
            shown={showDrawer}
          >
            <LinkList>
              <TextLink
                href="https://orbit.kiwi/components/overlay/drawer/"
                external
                type="secondary"
              >
                Drawer guidelines
              </TextLink>
              <TextLink
                href="https://orbit.kiwi/components/overlay/drawer/react/"
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
        <Button
          iconLeft={<MenuHamburger />}
          title="Open menu"
          onClick={() => {
            setShowDrawer(true);
          }}
        />
      </>
    );
  },
  info: {
    title: "Default drawer",
    description: "Drawers should appear on a user action and be closable.",
  },
};

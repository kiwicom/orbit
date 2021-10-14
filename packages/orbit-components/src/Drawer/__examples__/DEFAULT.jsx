// @flow
import * as React from "react";

import Button from "../../Button";
import Drawer from "../index";
import LinkList from "../../LinkList";
import TextLink from "../../TextLink";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => {
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
        <Button
          iconLeft={<Icons.MenuHamburger />}
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

// @flow
import * as React from "react";

import Button from "../../Button";
import Drawer from "../index";
import Stack from "../../Stack";
import Tile from "../../Tile";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => {
    const [showDrawer, setShowDrawer] = React.useState(false);
    return (
      <>
        {showDrawer && (
          <Drawer
            suppressed
            onClose={() => {
              setShowDrawer(false);
            }}
            shown={showDrawer}
          >
            <Stack>
              <Tile
                title="Drawer guidelines"
                href="https://orbit.kiwi/components/drawer/"
                external
              />
              <Tile
                title="Drawer React API"
                href="https://orbit.kiwi/components/drawer/react/"
                external
              />
              <Tile
                title="Drawer on GitHub"
                href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/Drawer"
                external
              />
            </Stack>
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
    title: "Suppressed drawer",
    description:
      "To give a drawer a cloud background (for example, to make child tiles stand out), use the <code>suppressed</code> prop.",
  },
};

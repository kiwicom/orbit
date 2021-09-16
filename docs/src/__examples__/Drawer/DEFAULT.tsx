import React from "react";
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
  exampleKnobs: [
    {
      component: "Dialog",
      knobs: [
        {
          name: "width",
          type: "text",
          defaultValue: "320px",
        },
        {
          name: "position",
          type: "select",
          options: ["right", "left"],
          defaultValue: "right",
        },
        {
          name: "title",
          type: "text",
          defaultValue: "",
        },
        {
          name: "shown",
          type: "boolean",
          defaultValue: true,
        },
        {
          name: "suppressed",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "lockScrolling",
          type: "boolean",
          defaultValue: false,
        },
      ],
    },
  ],
};

// @flow
import * as React from "react";

import ButtonLink from "../../ButtonLink";
import LinkList from "../../LinkList";
import NavigationBar from "../index";
import TextLink from "../../TextLink";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <NavigationBar>
      <Stack direction="row" align="center" justify="center">
        <ButtonLink href="https://orbit.kiwi">
          <img
            src="https://orbit.kiwi/files/2019/08/cropped-OrbitLogo-1.png"
            alt="Orbit by Kiwi.com"
            height="40px"
          />
        </ButtonLink>
        <LinkList direction="row">
          <TextLink type="secondary">Travel</TextLink>
          <TextLink type="secondary">Rooms</TextLink>
          <TextLink type="secondary">Careers</TextLink>
        </LinkList>
        <Stack inline>
          <LinkList direction="row">
            <TextLink type="secondary">English</TextLink>
            <TextLink type="secondary">Help</TextLink>
            <TextLink type="secondary">My account</TextLink>
          </LinkList>
        </Stack>
      </Stack>
    </NavigationBar>
  ),
  info: {
    title: "Default navigation bar",
    description: "Drawers should appear on a user action and be closable.",
  },
};

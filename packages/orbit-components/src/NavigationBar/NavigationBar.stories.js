// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import LinkList from "../LinkList";
import ChevronDown from "../icons/ChevronDown";
import StarFull from "../icons/StarFull";
import QuestionCircle from "../icons/QuestionCircle";
import AccountCircle from "../icons/AccountCircle";
import TextLink from "../TextLink";

import NavigationBar from "./index";

storiesOf("NavigationBar", module)
  .add(
    "NavBar up to tablet",
    () => {
      const dataTest = text("dataTest", "test");
      return (
        <div style={{ height: "1000px" }}>
          <NavigationBar
            onMenuOpen={action("onMenuOpen")}
            onShow={action("onShow")}
            onHide={action("onHide")}
            dataTest={dataTest}
          >
            <Stack justify="between" spacing="none">
              <ButtonLink iconRight={<ChevronDown />} type="secondary">
                Flights
              </ButtonLink>
              <Stack direction="row" spacing="XXSmall" justify="end" shrink>
                <ButtonLink iconLeft={<StarFull />} type="secondary" />
                <ButtonLink iconLeft={<QuestionCircle />} type="secondary" />
                <ButtonLink iconLeft={<AccountCircle />} type="secondary" />
              </Stack>
            </Stack>
          </NavigationBar>
        </div>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "NavBar desktop",
    () => {
      const dataTest = text("dataTest", "test");
      return (
        <div style={{ height: "1000px" }}>
          <NavigationBar
            onMenuOpen={action("onMenuOpen")}
            onShow={action("onShow")}
            onHide={action("onHide")}
            dataTest={dataTest}
          >
            <Stack flex align="center" justify="between" spacing="none">
              <LinkList direction="row">
                <TextLink type="secondary">Flights</TextLink>
                <TextLink type="secondary">Flights</TextLink>
                <TextLink type="secondary">Flights</TextLink>
                <TextLink type="secondary">Flights</TextLink>
              </LinkList>
              <Stack direction="row" spacing="XXSmall" justify="end" shrink>
                <ButtonLink type="secondary">Starred</ButtonLink>
                <ButtonLink type="secondary">Help</ButtonLink>
                <ButtonLink type="secondary">Account</ButtonLink>
              </Stack>
            </Stack>
          </NavigationBar>
        </div>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  );

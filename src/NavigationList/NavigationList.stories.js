// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import ButtonLink from "../ButtonLink/index";
import CountryFlag from "../CountryFlag/index";

import NavigationList, { NavigationListItem } from "./index";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("NavigationList", module)
  .add(
    "Default",
    () => {
      const children = text("Children", "Content");
      const title = text("title", "Title of the List");
      const Icon = getIcon(getIcons("iconLeft", "PlusCircle"));
      return (
        <NavigationList title={title}>
          <NavigationListItem onClick={action("clicked")} icon={<Icon />}>
            {children}
          </NavigationListItem>
          <NavigationListItem onClick={action("clicked")} icon={<Icon />} selectable selected>
            {children}
          </NavigationListItem>
          <NavigationListItem onClick={action("clicked")} icon={<Icon />}>
            {children}
          </NavigationListItem>
        </NavigationList>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Inline type",
    () => {
      return (
        <NavigationList type="inline">
          <ButtonLink
            iconLeft={<CountryFlag code="gb" name="English" />}
            type="secondary"
            transparent
          >
            English
          </ButtonLink>
          <ButtonLink type="secondary" transparent>
            EUR - €
          </ButtonLink>
          <ButtonLink type="secondary" transparent>
            Help
          </ButtonLink>
          <ButtonLink type="secondary" transparent>
            Starred
          </ButtonLink>
          <ButtonLink type="secondary" transparent>
            My Bookings
          </ButtonLink>
        </NavigationList>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  );

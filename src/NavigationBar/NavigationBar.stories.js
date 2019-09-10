// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import NavigationGroup from "../NavigationGroup";
import CountryFlag from "../CountryFlag";
import ButtonLink from "../ButtonLink";

import NavigationBar from "./index";

storiesOf("NavigationBar", module).add(
  "Playground",
  () => {
    const dataTest = text("dataTest", "test");
    return (
      <NavigationBar onMenuOpen={action("onMenuOpen")} dataTest={dataTest}>
        <NavigationGroup type="inline">
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
        </NavigationGroup>
      </NavigationBar>
    );
  },
  {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
);

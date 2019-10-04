// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import NavigationList from "../NavigationList";
import CountryFlag from "../CountryFlag";
import ButtonLink from "../ButtonLink";

import NavigationBar from "./index";

storiesOf("NavigationBar", module).add(
  "Playground",
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
        </NavigationBar>
      </div>
    );
  },
  {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
);

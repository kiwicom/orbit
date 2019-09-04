// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Stack from "../Stack";
import NavigationLink from "../NavigationLink";
import CountryFlag from "../CountryFlag";

import NavigationBar from "./index";

storiesOf("NavigationBar", module).add(
  "Playground",
  () => {
    return (
      <div style={{ marginTop: "1000px" }}>
        <NavigationBar onOpen={action("onOpen")}>
          <Stack direction="row" spacing="none" shrink>
            <NavigationLink type="horizontal" selectable selected>
              Travel
            </NavigationLink>
            <NavigationLink type="horizontal" selectable>
              Rooms
            </NavigationLink>
            <NavigationLink type="horizontal" selectable>
              Cars
            </NavigationLink>
            <NavigationLink type="horizontal" selectable>
              Stories
            </NavigationLink>
          </Stack>
          <Stack direction="row" spacing="tight" shrink justify="end">
            <NavigationLink type="horizontal" icon={<CountryFlag code="gb" name="English" />}>
              English
            </NavigationLink>
            <NavigationLink type="horizontal">EUR - €</NavigationLink>
            <NavigationLink type="horizontal">Help</NavigationLink>
            <NavigationLink type="horizontal">Starred</NavigationLink>
            <NavigationLink type="horizontal">My Bookings</NavigationLink>
          </Stack>
        </NavigationBar>
      </div>
    );
  },
  {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
);

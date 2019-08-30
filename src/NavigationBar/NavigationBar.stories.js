// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, boolean, select } from "@storybook/addon-knobs";

import Stack from "../Stack";
import Airplane from "../icons/Airplane";
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
            <NavigationLink type="horizontal" selected>
              Travel
            </NavigationLink>
            <NavigationLink type="horizontal">Rooms</NavigationLink>
            <NavigationLink type="horizontal">Cars</NavigationLink>
            <NavigationLink type="horizontal">Stories</NavigationLink>
          </Stack>
          <Stack direction="row" spacing="none" shrink justify="end">
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

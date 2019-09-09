// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Stack from "../Stack";
import NavigationLink from "../NavigationLink";
import CountryFlag from "../CountryFlag";
import Drawer from "../Drawer/index";
import NavigationGroup from "../NavigationGroup";
import AccountCircle from "../icons/AccountCircle";
import Deals from "../icons/Deals";
import ContactEmail from "../icons/ContactEmail";
import Trip from "../icons/Trip";
import City from "../icons/City";
import Suitcase from "../icons/Suitcase";
import KiwicomCare from "../icons/KiwicomCare";
import Code from "../icons/Code";
import KiwicomGuarantee from "../icons/KiwicomGuarantee";
import Kiwicom from "../icons/Kiwicom";
import TermsAndConditions from "../icons/TermsAndConditions";
import Security from "../icons/Security";
import Settings from "../icons/Settings";

import NavigationBar from "./index";

const SideBar = ({ shown, onClose }) => (
  <Drawer type="navigation" shown={shown} onClose={onClose}>
    <NavigationGroup>
      <NavigationLink type="vertical" icon={<AccountCircle />}>
        Sign in
      </NavigationLink>
      <NavigationLink type="vertical" icon={<AccountCircle />}>
        Register
      </NavigationLink>
    </NavigationGroup>
    <NavigationGroup title="Connect with us">
      <NavigationLink type="vertical" icon={<Deals />}>
        Refer a Friend
      </NavigationLink>
      <NavigationLink type="vertical" icon={<ContactEmail />}>
        Subscribe to Newsletter
      </NavigationLink>
      <NavigationLink type="vertical" icon={<Trip />}>
        Stories
      </NavigationLink>
    </NavigationGroup>
    <NavigationGroup title="Company">
      <NavigationLink type="vertical" icon={<City />} selectable selected>
        About Kiwi.com
      </NavigationLink>
      <NavigationLink type="vertical" icon={<Suitcase />}>
        Careers
      </NavigationLink>
      <NavigationLink type="vertical" icon={<KiwicomCare />}>
        Care Kiwi.com
      </NavigationLink>
      <NavigationLink type="vertical" icon={<Code />}>
        Code Kiwi.com
      </NavigationLink>
      <NavigationLink type="vertical" icon={<KiwicomGuarantee />}>
        Kiwi.com Guarantee
      </NavigationLink>
      <NavigationLink type="vertical" icon={<Kiwicom />}>
        Press kit
      </NavigationLink>
    </NavigationGroup>
    <NavigationGroup title="Terms & Conditions">
      <NavigationLink type="vertical" icon={<TermsAndConditions />}>
        Terms & Conditions
      </NavigationLink>
      <NavigationLink type="vertical" icon={<TermsAndConditions />}>
        Terms of Use
      </NavigationLink>
      <NavigationLink type="vertical" icon={<Security />}>
        Privacy Policy
      </NavigationLink>
      <NavigationLink type="vertical" icon={<Security />}>
        Security
      </NavigationLink>
      <NavigationLink type="vertical" icon={<Settings />}>
        Cookies settings
      </NavigationLink>
    </NavigationGroup>
  </Drawer>
);
const NavBar = () => {
  const [shown, setShown] = React.useState(false);

  const handleClose = () => {
    setShown(false);
  };
  const handleOpen = () => {
    setShown(true);
  };
  return (
    <React.Fragment>
      <NavigationBar onOpen={handleOpen}>
        <Stack direction="row" spacing="none" shrink>
          <NavigationLink type="horizontal" selectable selected>
            Travel
          </NavigationLink>
        </Stack>
        <Stack direction="row" spacing="tight" shrink justify="end">
          <NavigationLink type="horizontal">Help</NavigationLink>
          <NavigationLink type="horizontal">My Bookings</NavigationLink>
        </Stack>
      </NavigationBar>
      <SideBar shown={shown} onClose={handleClose} />
    </React.Fragment>
  );
};
storiesOf("NavigationBar", module)
  .add(
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
  )
  .add(
    "Real",
    () => {
      return (
        <div style={{ marginTop: "5000px" }}>
          <NavBar />
        </div>
      );
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  );

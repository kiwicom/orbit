// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, text, select } from "@storybook/addon-knobs";

import Stack from "../Stack";
import Heading from "../Heading";
import Button from "../Button";
import Text from "../Text";
import TextLink from "../TextLink";
import Separator from "../Separator";
import Illustration from "../Illustration";
import NewWindow from "../icons/NewWindow";
import NavigationLink from "../NavigationLink";
import AccountCircle from "../icons/AccountCircle";
import NavigationGroup from "../NavigationGroup";
import Deals from "../icons/Deals";
import Settings from "../icons/Settings";
import KiwicomCare from "../icons/KiwicomCare";
import Code from "../icons/Code";
import KiwicomGuarantee from "../icons/KiwicomGuarantee";
import Kiwicom from "../icons/Kiwicom";
import ContactEmail from "../icons/ContactEmail";
import Security from "../icons/Security";
import TermsAndConditions from "../icons/TermsAndConditions";
import Suitcase from "../icons/Suitcase";
import Trip from "../icons/Trip";
import City from "../icons/City";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { POSITIONS } from "./consts";

import Drawer from "./index";

storiesOf("Drawer", module)
  .add(
    "Side Navigation",
    () => {
      const shown = boolean("shown", true);
      const dataTest = text("dataTest", "test");
      const width = text("width", "320px");
      return (
        <Drawer
          type="navigation"
          dataTest={dataTest}
          width={width}
          shown={shown}
          onClose={action("onClose")}
        >
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
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "SmartFAQ",
    () => {
      const shown = boolean("shown", true);
      const dataTest = text("dataTest", "test");
      const position = select("position", Object.values(POSITIONS), POSITIONS.RIGHT);
      const width = text("width", "480px");
      return (
        <Drawer
          shown={shown}
          width={width}
          position={position}
          dataTest={dataTest}
          onClose={action("onClose")}
          type="box"
        >
          <Stack>
            <Illustration name="Accommodation" />
            <Heading element="h2">Need help?</Heading>
            <Text type="secondary">
              We are here for you. First, let is narrow down your request.
            </Text>
            <Button>I have an existing booking</Button>
            <Button type="secondary">I do not have booking</Button>
            <Separator />
            <Text align="center">
              <TextLink icon={<NewWindow />} type="secondary">
                Full FAQ site
              </TextLink>
            </Text>
          </Stack>
        </Drawer>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Side Navigation in RTL",
    () => {
      const shown = boolean("shown", true);
      const dataTest = text("dataTest", "test");
      const width = text("width", "320px");
      return (
        <RenderInRtl>
          <Drawer
            type="navigation"
            dataTest={dataTest}
            width={width}
            shown={shown}
            onClose={action("onClose")}
          >
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
        </RenderInRtl>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "SmartFAQ in RTL",
    () => {
      const shown = boolean("shown", true);
      const dataTest = text("dataTest", "test");
      const position = select("position", Object.values(POSITIONS), POSITIONS.RIGHT);
      const width = text("width", "480px");
      return (
        <RenderInRtl>
          <Drawer
            shown={shown}
            width={width}
            position={position}
            dataTest={dataTest}
            onClose={action("onClose")}
            type="box"
          >
            <Stack>
              <Illustration name="Accommodation" />
              <Heading element="h2">Need help?</Heading>
              <Text type="secondary">
                We are here for you. First, let is narrow down your request.
              </Text>
              <Button>I have an existing booking</Button>
              <Button type="secondary">I do not have booking</Button>
              <Separator />
              <Text align="center">
                <TextLink icon={<NewWindow />} type="secondary">
                  Full FAQ site
                </TextLink>
              </Text>
            </Stack>
          </Drawer>
        </RenderInRtl>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  );

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
import AccountCircle from "../icons/AccountCircle";
import NavigationList, { NavigationListItem } from "../NavigationList";
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
import POSITIONS from "./consts";
import InputField from "../InputField";
import Search from "../icons/Search";
import Tile from "../Tile";

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
          dataTest={dataTest}
          width={width}
          shown={shown}
          noPadding
          onClose={action("onClose")}
        >
          <NavigationList>
            <NavigationListItem icon={<AccountCircle />} href="https://kiwi.com" external>Sign in</NavigationListItem>
            <NavigationListItem icon={<AccountCircle />}>Register</NavigationListItem>
          </NavigationList>
          <NavigationList title="Connect with us">
            <NavigationListItem icon={<Deals />}>Refer a Friend</NavigationListItem>
            <NavigationListItem icon={<ContactEmail />}>Subscribe to Newsletter</NavigationListItem>
            <NavigationListItem icon={<Trip />}>Stories</NavigationListItem>
          </NavigationList>
          <NavigationList title="Company">
            <NavigationListItem icon={<City />} selectable selected>
              About Kiwi.com
            </NavigationListItem>
            <NavigationListItem icon={<Suitcase />}>Careers</NavigationListItem>
            <NavigationListItem icon={<KiwicomCare />}>Care Kiwi.com</NavigationListItem>
            <NavigationListItem icon={<Code />}>Code Kiwi.com</NavigationListItem>
            <NavigationListItem icon={<KiwicomGuarantee />}>Kiwi.com Guarantee</NavigationListItem>
            <NavigationListItem icon={<Kiwicom />}>Press kit</NavigationListItem>
          </NavigationList>
          <NavigationList title="Terms & Conditions">
            <NavigationListItem icon={<TermsAndConditions />}>
              Terms & Conditions
            </NavigationListItem>
            <NavigationListItem icon={<TermsAndConditions />}>Terms of Use</NavigationListItem>
            <NavigationListItem icon={<Security />}>Privacy Policy</NavigationListItem>
            <NavigationListItem icon={<Security />}>Security</NavigationListItem>
            <NavigationListItem icon={<Settings />}>Cookies settings</NavigationListItem>
          </NavigationList>
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
    "Suppressed",
    () => {
      const shown = boolean("shown", true);
      const dataTest = text("dataTest", "test");
      const position = select("position", Object.values(POSITIONS), POSITIONS.RIGHT);
      const width = text("width", "480px");
      const suppressed = boolean("suppressed", true);
      return (
        <Drawer
          shown={shown}
          width={width}
          position={position}
          dataTest={dataTest}
          onClose={action("onClose")}
          suppressed={suppressed}
        >
          <Stack>
            <Tile
              title="Cabin baggage"
              description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
            />
            <Tile
              title="Cabin baggage"
              description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
            />
            <Tile
              title="Cabin baggage"
              description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
            />
            <Tile
              title="Cabin baggage"
              description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
            />
            <Tile
              title="Cabin baggage"
              description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
            />
            <Tile
              title="Cabin baggage"
              description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
            />
          </Stack>
        </Drawer>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "SmartFAQ Search",
    () => {
      const shown = boolean("shown", true);
      const dataTest = text("dataTest", "test");
      const position = select("position", Object.values(POSITIONS), POSITIONS.RIGHT);
      const width = text("width", "480px");
      const suppressed = boolean("suppressed", true);
      return (
        <Drawer
          shown={shown}
          width={width}
          position={position}
          dataTest={dataTest}
          onClose={action("onClose")}
          suppressed={suppressed}
          title="Help"
          actions={
            <Button type="secondary" size="small">
              Sign In
            </Button>
          }
        >
          <Stack>
            <InputField placeholder="Search" prefix={<Search />} />
            <Tile
              title="Cabin baggage"
              description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
            />
            <Tile
              title="Cabin baggage"
              description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
            />
            <Tile
              title="Cabin baggage"
              description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
            />
            <Tile
              title="Cabin baggage"
              description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
            />
            <Tile
              title="Cabin baggage"
              description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
            />
            <Tile
              title="Cabin baggage"
              description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
            />
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
            dataTest={dataTest}
            width={width}
            shown={shown}
            noPadding
            onClose={action("onClose")}
          >
            <NavigationList>
              <NavigationListItem icon={<AccountCircle />}>Sign in</NavigationListItem>
              <NavigationListItem icon={<AccountCircle />}>Register</NavigationListItem>
            </NavigationList>
            <NavigationList title="Connect with us">
              <NavigationListItem icon={<Deals />}>Refer a Friend</NavigationListItem>
              <NavigationListItem icon={<ContactEmail />}>
                Subscribe to Newsletter
              </NavigationListItem>
              <NavigationListItem icon={<Trip />}>Stories</NavigationListItem>
            </NavigationList>
            <NavigationList title="Company">
              <NavigationListItem icon={<City />} selectable selected>
                About Kiwi.com
              </NavigationListItem>
              <NavigationListItem icon={<Suitcase />}>Careers</NavigationListItem>
              <NavigationListItem icon={<KiwicomCare />}>Care Kiwi.com</NavigationListItem>
              <NavigationListItem icon={<Code />}>Code Kiwi.com</NavigationListItem>
              <NavigationListItem icon={<KiwicomGuarantee />}>
                Kiwi.com Guarantee
              </NavigationListItem>
              <NavigationListItem icon={<Kiwicom />}>Press kit</NavigationListItem>
            </NavigationList>
            <NavigationList title="Terms & Conditions">
              <NavigationListItem icon={<TermsAndConditions />}>
                Terms & Conditions
              </NavigationListItem>
              <NavigationListItem icon={<TermsAndConditions />}>Terms of Use</NavigationListItem>
              <NavigationListItem icon={<Security />}>Privacy Policy</NavigationListItem>
              <NavigationListItem icon={<Security />}>Security</NavigationListItem>
              <NavigationListItem icon={<Settings />}>Cookies settings</NavigationListItem>
            </NavigationList>
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
  )
  .add(
    "SmartFAQ Search in RTL",
    () => {
      const shown = boolean("shown", true);
      const dataTest = text("dataTest", "test");
      const position = select("position", Object.values(POSITIONS), POSITIONS.RIGHT);
      const width = text("width", "480px");
      const suppressed = boolean("suppressed", true);
      return (
        <RenderInRtl>
          <Drawer
            shown={shown}
            width={width}
            position={position}
            dataTest={dataTest}
            onClose={action("onClose")}
            suppressed={suppressed}
            title="Help"
            actions={
              <Button type="secondary" size="small">
                Sign In
              </Button>
            }
          >
            <Stack>
              <InputField placeholder="Search" prefix={<Search />} />
              <Tile
                title="Cabin baggage"
                description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
              />
              <Tile
                title="Cabin baggage"
                description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
              />
              <Tile
                title="Cabin baggage"
                description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
              />
              <Tile
                title="Cabin baggage"
                description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
              />
              <Tile
                title="Cabin baggage"
                description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
              />
              <Tile
                title="Cabin baggage"
                description="Cabin baggage allowances vary by airline and ticket type. Check your e-ticket for more info."
              />
            </Stack>
          </Drawer>
        </RenderInRtl>
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  );

// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, boolean, select } from "@storybook/addon-knobs";

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

import Drawer from "./index";

storiesOf("Drawer", module)
  .add(
    "Side Navigation",
    () => {
      const shown = boolean("shown", true);
      return (
        <Drawer type="navigation" shown={shown} onClose={action("onClose")}>
          <Stack>
            <NavigationLink type="vertical" icon={<AccountCircle />} selectable selected>
              Sign in
            </NavigationLink>
            <NavigationLink type="vertical" icon={<AccountCircle />}>
              Register
            </NavigationLink>
            <Heading type="title5" element="div">
              Connect with us
            </Heading>
            <NavigationLink type="vertical">Refer a Friend</NavigationLink>
            <NavigationLink type="vertical">Subscribe to Newsletter</NavigationLink>
            <NavigationLink type="vertical">Stories</NavigationLink>
            <Heading type="title5" element="div">
              Company
            </Heading>
            <NavigationLink type="vertical">About Kiwi.com</NavigationLink>
            <NavigationLink type="vertical">Careers</NavigationLink>
            <NavigationLink type="vertical">Care Kiwi.com</NavigationLink>
            <NavigationLink type="vertical">Code Kiwi.com</NavigationLink>
            <NavigationLink type="vertical">Kiwi.com Guarantee</NavigationLink>
            <NavigationLink type="vertical">Press kit</NavigationLink>
            <Heading type="title5" element="div">
              Terms & Conditions
            </Heading>
            <NavigationLink type="vertical">Terms & Conditions</NavigationLink>
            <NavigationLink type="vertical">Terms of Use</NavigationLink>
            <NavigationLink type="vertical">Privacy Policy</NavigationLink>
            <NavigationLink type="vertical">Security</NavigationLink>
            <NavigationLink type="vertical">Cookies settings</NavigationLink>
          </Stack>
        </Drawer>
      );
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "SmartFAQs",
    () => {
      const shown = boolean("shown", true);
      return (
        <Drawer shown={shown} width="480px" onClose={action("onClose")} type="box">
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
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  );

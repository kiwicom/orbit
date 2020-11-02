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
import RenderInRtl from "../utils/rtl/RenderInRtl";
import POSITIONS from "./consts";
import InputField from "../InputField";
import Search from "../icons/Search";
import Tile from "../Tile";
import Collapse from "../Collapse";
import LinkList from "../LinkList";

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
          onClose={action("onClose")}
          actions={
            <Stack direction="row" justify="between" spacing="XSmall">
              <Button type="secondary" size="small">
                Manage my bookings
              </Button>
            </Stack>
          }
        >
          <Collapse label="Discover" initialExpanded>
            <LinkList indent>
              <TextLink type="secondary">Refer a Friend</TextLink>
              <TextLink type="secondary">Subscribe to newsletter</TextLink>
              <TextLink type="secondary">Kiwi.com Stories</TextLink>
            </LinkList>
          </Collapse>
          <Collapse label="Guidelines">
            <LinkList indent>
              <TextLink type="secondary">Terms & Conditions</TextLink>
              <TextLink type="secondary">Terms of Use</TextLink>
              <TextLink type="secondary">Privacy Policy</TextLink>
              <TextLink type="secondary">Security</TextLink>
              <TextLink type="secondary">Cookies settings</TextLink>
            </LinkList>
          </Collapse>
          <Collapse label="Company">
            <LinkList indent>
              <TextLink type="secondary">About Kiwi.com</TextLink>
              <TextLink type="secondary">Careers</TextLink>
              <TextLink type="secondary">Care Kiwi.com</TextLink>
              <TextLink type="secondary">Code Kiwi.com</TextLink>
              <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
              <TextLink type="secondary">Press kit</TextLink>
            </LinkList>
          </Collapse>
          <LinkList>
            <TextLink type="secondary">Sign out</TextLink>
          </LinkList>
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
            <Heading as="h2">Need help?</Heading>
            <Text type="secondary">
              We are here for you. First, let is narrow down your request.
            </Text>
            <Button>I have an existing booking</Button>
            <Button type="secondary">I do not have booking</Button>
            <Separator />
            <Text align="center">
              <TextLink iconRight={<NewWindow />} type="secondary">
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
    "With Title",
    () => {
      const shown = boolean("shown", true);
      const dataTest = text("dataTest", "test");
      const title = text("Title", "Title");
      const width = text("width", "320px");
      return (
        <Drawer
          title={title}
          dataTest={dataTest}
          width={width}
          shown={shown}
          onClose={action("onClose")}
        >
          <Collapse label="Discover" initialExpanded>
            <LinkList indent>
              <TextLink type="secondary">Refer a Friend</TextLink>
              <TextLink type="secondary">Subscribe to newsletter</TextLink>
              <TextLink type="secondary">Kiwi.com Stories</TextLink>
            </LinkList>
          </Collapse>
          <Collapse label="Guidelines">
            <LinkList indent>
              <TextLink type="secondary">Terms & Conditions</TextLink>
              <TextLink type="secondary">Terms of Use</TextLink>
              <TextLink type="secondary">Privacy Policy</TextLink>
              <TextLink type="secondary">Security</TextLink>
              <TextLink type="secondary">Cookies settings</TextLink>
            </LinkList>
          </Collapse>
          <Collapse label="Company">
            <LinkList indent>
              <TextLink type="secondary">About Kiwi.com</TextLink>
              <TextLink type="secondary">Careers</TextLink>
              <TextLink type="secondary">Care Kiwi.com</TextLink>
              <TextLink type="secondary">Code Kiwi.com</TextLink>
              <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
              <TextLink type="secondary">Press kit</TextLink>
            </LinkList>
          </Collapse>
          <LinkList>
            <TextLink type="secondary">Sign out</TextLink>
          </LinkList>
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
            onClose={action("onClose")}
            actions={
              <Stack direction="row" justify="between" spacing="XSmall">
                <Button type="secondary" size="small">
                  Manage my bookings
                </Button>
              </Stack>
            }
          >
            <Collapse label="Discover" initialExpanded>
              <LinkList>
                <TextLink type="secondary">Refer a Friend</TextLink>
                <TextLink type="secondary">Subscribe to newsletter</TextLink>
                <TextLink type="secondary">Kiwi.com Stories</TextLink>
              </LinkList>
            </Collapse>
            <Collapse label="Guidelines">
              <LinkList>
                <TextLink type="secondary">Terms & Conditions</TextLink>
                <TextLink type="secondary">Terms of Use</TextLink>
                <TextLink type="secondary">Privacy Policy</TextLink>
                <TextLink type="secondary">Security</TextLink>
                <TextLink type="secondary">Cookies settings</TextLink>
              </LinkList>
            </Collapse>
            <Collapse label="Company">
              <LinkList>
                <TextLink type="secondary">About Kiwi.com</TextLink>
                <TextLink type="secondary">Careers</TextLink>
                <TextLink type="secondary">Care Kiwi.com</TextLink>
                <TextLink type="secondary">Code Kiwi.com</TextLink>
                <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
                <TextLink type="secondary">Press kit</TextLink>
              </LinkList>
            </Collapse>
            <LinkList>
              <TextLink type="secondary">Sign out</TextLink>
            </LinkList>
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
              <Heading as="h2">Need help?</Heading>
              <Text type="secondary">
                We are here for you. First, let is narrow down your request.
              </Text>
              <Button>I have an existing booking</Button>
              <Button type="secondary">I do not have booking</Button>
              <Separator />
              <Text align="center">
                <TextLink iconRight={<NewWindow />} type="secondary">
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

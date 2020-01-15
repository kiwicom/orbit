// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Stack from "../Stack";
import Text from "../Text";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import TripSector, { TripDate } from "../TripSector";
import TripSegment from "../TripSegment";
import List, { ListItem } from "../List";
import Badge from "../Badge";
import Heading from "../Heading";
import CountryFlag from "../CountryFlag";

import Tile from "./index";

const getIcons = defaultIcon => select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Tile", module)
  .add(
    "Default - just wrapper",
    () => {
      const content = text("content", "Lorem ipsum dolor sit amet");
      const noPadding = boolean("noPadding", false);
      return (
        <Tile onClick={action("clicked")} noPadding={noPadding}>
          {content}
        </Tile>
      );
    },
    {
      info: "This is the default configuration of this component.",
    },
  )

  .add(
    "Default - with header props",
    () => {
      const title = text("Title", "Expandable");
      const description = text(
        "Description",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      );
      const Icon = getIcon(getIcons("Airplane"));
      return (
        <Tile
          onClick={action("clicked")}
          icon={Icon && <Icon />}
          title={title}
          description={description}
        />
      );
    },
    {
      info: "This is the default configuration of this component.",
    },
  )
  .add(
    "Default - with header props, as href",
    () => {
      const title = text("Title", "Expandable");
      const description = text(
        "Description",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      );
      const Icon = getIcon(getIcons("Airplane"));
      const href = text("href", "#");
      const external = boolean("external", false);
      return (
        <Tile
          icon={Icon && <Icon />}
          title={title}
          description={description}
          href={href}
          external={external}
        />
      );
    },
    {
      info: "This is the default configuration of this component.",
    },
  )
  .add(
    "TripSector Tile",
    () => (
      <Tile
        title="Dynamic Tile height"
        description="This is a example of dynamic Tile height with TripSector"
        expandable
      >
        <TripSector dataTest="test">
          <TripDate>Mon 22 Oct</TripDate>
          <TripSegment
            carrier={{ code: "FR", type: "airline", name: "Ryanair" }}
            duration="2h"
            departure="Barcelona BCN"
            departureTime="6:30"
            arrival="Paris BVA"
            arrivalTime="8:30"
          >
            <List size="small" type="secondary">
              <ListItem>Airline: Ryanair</ListItem>
              <ListItem>Flight no: D8 1762</ListItem>
            </List>
          </TripSegment>
        </TripSector>
      </Tile>
    ),
    {
      info: "TripSector in expandable Card to test if Whole TripSector is visible after expand",
    },
  )
  .add(
    "Expandable with custom description",
    () => {
      const showMore = boolean("showMore", false);
      const Icon = getIcon(getIcons("GenderMan"));

      return (
        <Tile
          icon={Icon && <Icon />}
          onClick={action("clicked")}
          expandable
          header={
            <Stack justify="between" align="center" direction="row" shrink>
              <Stack spacing="none" direction="column" shrink>
                <Stack direction="row" align="center" spacing="condensed">
                  <Heading type="title4" element="h4">
                    Mr. Hot potato
                  </Heading>
                  <CountryFlag code="cz" />
                </Stack>
                <Text>13/37/1337</Text>
              </Stack>
              <Stack align="center" basis="0%">
                <Badge type="info">You</Badge>
              </Stack>
            </Stack>
          }
        >
          This is example of expanded content
          {showMore && (
            <Text>
              Etiam posuere lacus quis dolor. Mauris elementum mauris vitae tortor. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
              Aenean id metus id velit ullamcorper pulvinar. Mauris metus. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
          )}
        </Tile>
      );
    },
    {
      info: "This is the playground configuration of this component.",
    },
  )
  .add(
    "Playground",
    () => {
      const href = text("Href", "https://www.kiwi.com/");
      const title = text("Title", "Tile with title");
      const external = boolean("External", false);
      const Icon = getIcon(getIcons("Airplane"));
      const description = text(
        "Description",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      );
      const header = text("header", null);
      const expandable = boolean("expandable", false);
      const initialExpanded = boolean("initialExpanded", false);
      const noPadding = boolean("noPadding", false);
      const dataTest = text("dataTest", "test");
      const children = text("children", null);
      return (
        <Tile
          href={href}
          onClick={action("clicked")}
          icon={Icon && <Icon />}
          title={title}
          description={description}
          header={header}
          external={external}
          expandable={expandable}
          initialExpanded={initialExpanded}
          noPadding={noPadding}
          dataTest={dataTest}
        >
          {children}
        </Tile>
      );
    },
    {
      info: "This is the default configuration of this component.",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <Tile
          onClick={action("clicked")}
          description={
            <Stack justify="between" direction="row">
              <Text>Mr. John Smith</Text>
              <Text>20 kg</Text>
            </Stack>
          }
        >
          This is example of expanded content
        </Tile>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );

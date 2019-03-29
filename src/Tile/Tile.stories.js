// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Stack from "../Stack";
import Text from "../Text";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Tile from "./index";

const getIcons = defaultIcon => select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Tile", module)
  .add(
    "Default",
    () => {
      const title = text("Title", "Default");
      return <Tile onClick={action("clicked")} title={title} />;
    },
    {
      info: "This is the default configuration of this component.",
    },
  )

  .add(
    "Expandable",
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
        >
          This is example of expanded content
        </Tile>
      );
    },
    {
      info: "This is the default configuration of this component.",
    },
  )
  .add(
    "Expandable with custom description",
    () => {
      const showMore = boolean("showMore", false);

      return (
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
      const dataTest = text("dataTest", "test");

      return (
        <Tile
          href={href}
          onClick={action("clicked")}
          icon={Icon && <Icon />}
          title={title}
          description={description}
          external={external}
          dataTest={dataTest}
        />
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

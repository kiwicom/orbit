import * as React from "react";
import { action } from "@storybook/addon-actions";

import TileGroup from "../TileGroup";
import * as Icons from "../icons";
import Stack from "../Stack";
import Text from "../Text";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Badge from "../Badge";
import Heading from "../Heading";
import CountryFlag from "../CountryFlag";

import Tile from ".";

const getIcon = source => Icons[source];

export default {
  title: "Tile",
};

export const DefaultJustWrapper = ({ content, noPadding, as }) => {
  return (
    <Tile as={as === "" ? undefined : "div"} onClick={action("clicked")} noPadding={noPadding}>
      {content}
    </Tile>
  );
};

DefaultJustWrapper.story = {
  name: "Default - just wrapper",

  parameters: {
    info: "This is the default configuration of this component.",
  },
};

DefaultJustWrapper.args = {
  content: "Lorem ipsum dolor sit amet",
  noPadding: false,
  as: "",
};

export const DefaultWithHeaderProps = ({ title, description, icon, noHeaderIcon }) => {
  const Icon = getIcon(icon);
  return (
    <Tile
      onClick={action("clicked")}
      icon={Icon && <Icon />}
      title={title}
      description={description}
      noHeaderIcon={noHeaderIcon}
    />
  );
};

DefaultWithHeaderProps.story = {
  name: "Default - with header props",

  parameters: {
    info: "This is the default configuration of this component.",
  },
};

DefaultWithHeaderProps.args = {
  title: "Expandable",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  icon: "Airplane",
  noHeaderIcon: false,
};

DefaultWithHeaderProps.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const DefaultWithHeaderPropsAsHref = ({ title, description, icon, href, external }) => {
  const Icon = getIcon(icon);

  return (
    <Tile
      icon={Icon && <Icon />}
      title={title}
      description={description}
      href={href}
      external={external}
    />
  );
};

DefaultWithHeaderPropsAsHref.story = {
  name: "Default - with header props, as href",

  parameters: {
    info: "This is the default configuration of this component.",
  },
};

DefaultWithHeaderPropsAsHref.args = {
  title: "Expandable",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  icon: "Airplane",
  href: "#",
  external: false,
};

DefaultWithHeaderPropsAsHref.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const ExpandableWithCustomDescription = ({ showMore, icon }) => {
  const Icon = getIcon(icon);

  return (
    <Tile
      icon={Icon && <Icon />}
      onClick={action("clicked")}
      expandable
      header={
        <Stack justify="between" align="center" direction="row" shrink>
          <Stack spacing="none" direction="column" shrink>
            <Stack direction="row" align="center" spacing="200">
              <Heading type="title4" as="h4">
                Mr. Hot potato
              </Heading>
              <CountryFlag code="cz" />
            </Stack>
            <Text>13/37/1337</Text>
          </Stack>
          <Stack align="center" basis="0%">
            <Badge type="infoSubtle">You</Badge>
          </Stack>
        </Stack>
      }
    >
      This is example of expanded content
      {showMore && (
        <Text>
          Etiam posuere lacus quis dolor. Mauris elementum mauris vitae tortor. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aenean id
          metus id velit ullamcorper pulvinar. Mauris metus. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.
        </Text>
      )}
    </Tile>
  );
};

ExpandableWithCustomDescription.story = {
  name: "Expandable with custom description",

  parameters: {
    info: "This is the playground configuration of this component.",
  },
};

ExpandableWithCustomDescription.args = {
  showMore: false,
  icon: "GenderMan",
};

ExpandableWithCustomDescription.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Group = () => {
  return (
    <TileGroup as="ul">
      <Tile as="li" href="#">
        List Item
      </Tile>
      <Tile as="li" href="#">
        List Item
      </Tile>
      <Tile as="li" href="#">
        List Item
      </Tile>
      <Tile as="li" href="#">
        List Item
      </Tile>
    </TileGroup>
  );
};

export const Playground = ({
  href,
  title,
  external,
  icon,
  description,
  header,
  expandable,
  initialExpanded,
  noPadding,
  dataTest,
  children,
  htmlTitle,
  as,
  expanded,
}) => {
  const Icon = getIcon(icon);

  return (
    <Tile
      href={href}
      as={as === "" ? undefined : "div"}
      onClick={action("clicked")}
      icon={Icon && <Icon />}
      expanded={expanded}
      title={title}
      description={description}
      header={header}
      external={external}
      expandable={expandable}
      initialExpanded={initialExpanded}
      noPadding={noPadding}
      dataTest={dataTest}
      htmlTitle={htmlTitle}
    >
      {children}
    </Tile>
  );
};

Playground.story = {
  parameters: {
    info: "This is the default configuration of this component.",
  },
};

Playground.args = {
  href: "https://www.kiwi.com/",
  title: "Tile with title",
  external: false,
  icon: "Airplane",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  header: "",
  expandable: false,
  initialExpanded: false,
  noPadding: false,
  dataTest: "test",
  children: "",
  htmlTitle: "Title for more info",
  as: "",
  expanded: false,
};

Playground.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Rtl = () => (
  <RenderInRtl>
    <Tile
      onClick={action("clicked")}
      description={
        <Stack justify="between" direction="row">
          <Text>Mr. John Smith</Text>
          <Text>20 kg</Text>
        </Stack>
      }
      expandable
    >
      This is example of expanded content
    </Tile>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

import * as React from "react";
import { action } from "@storybook/addon-actions";

import * as Icons from "../icons";
import Stack from "../Stack";
import Text from "../Text";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Badge from "../Badge";
import Heading from "../Heading";
import CountryFlag from "../CountryFlag";
import Tile from "../Tile";

import TileGroup from ".";

const getIcon = source => Icons[source];

export default {
  title: "TileGroup",
};

export const DefaultJustWrapper = ({ dataTest, as, content }) => {
  return (
    <TileGroup as={as} dataTest={dataTest}>
      <Tile onClick={action("clicked")}>{content}</Tile>
      <Tile onClick={action("clicked")}>{content}</Tile>
      <Tile onClick={action("clicked")}>{content}</Tile>
      <Tile onClick={action("clicked")}>{content}</Tile>
    </TileGroup>
  );
};

DefaultJustWrapper.story = {
  name: "Default - just wrapper",

  parameters: {
    info: "This is the default configuration of this component.",
  },
};

DefaultJustWrapper.args = {
  dataTest: "test",
  as: "div",
  content: "Lorem ipsum dolor sit amet",
};

export const DefaultWithHeaderProps = ({ title, description, icon }) => {
  const Icon = getIcon(icon);
  return (
    <TileGroup>
      <Tile
        onClick={action("clicked")}
        icon={Icon && <Icon />}
        title={title}
        description={description}
      />
      <Tile
        onClick={action("clicked")}
        icon={Icon && <Icon />}
        title={title}
        description={description}
      />
      <Tile
        onClick={action("clicked")}
        icon={Icon && <Icon />}
        title={title}
        description={description}
      />
      <Tile
        onClick={action("clicked")}
        icon={Icon && <Icon />}
        title={title}
        description={description}
      />
    </TileGroup>
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
};

DefaultWithHeaderProps.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const ExpandableWithCustomDescription = ({ icon }) => {
  const Icon = getIcon(icon);

  return (
    <TileGroup>
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
      </Tile>
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
      </Tile>
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
      </Tile>
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
      </Tile>
    </TileGroup>
  );
};

ExpandableWithCustomDescription.story = {
  name: "Expandable with custom description",

  parameters: {
    info: "This is the playground configuration of this component.",
  },
};

ExpandableWithCustomDescription.args = {
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

export const Rtl = () => (
  <RenderInRtl>
    <TileGroup>
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
    </TileGroup>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

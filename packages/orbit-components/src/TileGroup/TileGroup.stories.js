// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Stack from "../Stack";
import Text from "../Text";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Badge from "../Badge";
import Heading from "../Heading";
import CountryFlag from "../CountryFlag";
import Tile from "../Tile";

import TileGroup from "./index";

const getIcons = defaultIcon => select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("TileGroup", module)
  .add(
    "Default - just wrapper",
    () => {
      const dataTest = text("dataTest", "test");

      const content = text("content", "Lorem ipsum dolor sit amet");
      return (
        <TileGroup dataTest={dataTest}>
          <Tile onClick={action("clicked")}>{content}</Tile>
          <Tile onClick={action("clicked")}>{content}</Tile>
          <Tile onClick={action("clicked")}>{content}</Tile>
          <Tile onClick={action("clicked")}>{content}</Tile>
        </TileGroup>
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
    },
    {
      info: "This is the default configuration of this component.",
    },
  )
  .add(
    "Expandable with custom description",
    () => {
      const Icon = getIcon(getIcons("GenderMan"));

      return (
        <TileGroup>
          <Tile
            icon={Icon && <Icon />}
            onClick={action("clicked")}
            expandable
            header={
              <Stack justify="between" align="center" direction="row" shrink>
                <Stack spacing="none" direction="column" shrink>
                  <Stack direction="row" align="center" spacing="XSmall">
                    <Heading type="title4" as="h4">
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
          </Tile>
          <Tile
            icon={Icon && <Icon />}
            onClick={action("clicked")}
            expandable
            header={
              <Stack justify="between" align="center" direction="row" shrink>
                <Stack spacing="none" direction="column" shrink>
                  <Stack direction="row" align="center" spacing="XSmall">
                    <Heading type="title4" as="h4">
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
          </Tile>
          <Tile
            icon={Icon && <Icon />}
            onClick={action("clicked")}
            expandable
            header={
              <Stack justify="between" align="center" direction="row" shrink>
                <Stack spacing="none" direction="column" shrink>
                  <Stack direction="row" align="center" spacing="XSmall">
                    <Heading type="title4" as="h4">
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
          </Tile>
          <Tile
            icon={Icon && <Icon />}
            onClick={action("clicked")}
            expandable
            header={
              <Stack justify="between" align="center" direction="row" shrink>
                <Stack spacing="none" direction="column" shrink>
                  <Stack direction="row" align="center" spacing="XSmall">
                    <Heading type="title4" as="h4">
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
          </Tile>
        </TileGroup>
      );
    },
    {
      info: "This is the playground configuration of this component.",
    },
  )
  .add(
    "RTL",
    () => (
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
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );

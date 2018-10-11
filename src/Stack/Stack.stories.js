// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, boolean, select, object, text } from "@storybook/addon-knobs/react";

import { DIRECTIONS, ALIGNS, SPACINGS, JUSTIFY } from "./consts";
import Edit from "../icons/Edit";
import Button from "../Button";
import InputField from "../InputField";
import Text from "../Text";
import TextLink from "../TextLink";
import Airplane from "../icons/Airplane";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import ButtonGroup from "../ButtonGroup";
import Card from "../Card";
import Checkbox from "../Checkbox";
import Alert from "../Alert";
import Badge from "../Badge";
import ButtonLink from "../ButtonLink";
import CardHeader from "../Card/CardHeader";
import CarrierLogo from "../CarrierLogo";
import Radio from "../Radio";
import CountryFlag from "../CountryFlag";
import Illustration from "../Illustration";
import ServiceLogo from "../ServiceLogo";
import Heading from "../Heading";
import Select from "../Select";
import InputGroup from "../InputGroup";
import Table from "../Table";
import TableHead from "../Table/TableHead";
import TableRow from "../Table/TableRow";
import TableCell from "../Table/TableCell";
import TableBody from "../Table/TableBody";
import Textarea from "../Textarea";
import Tile from "../Tile";

import Stack from "./index";

setAddon(chaptersAddon);

storiesOf("Stack", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => ({
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Stack>
                <Button type="success" iconLeft={<Airplane />}>
                  Button
                </Button>
                <Button type="warning">Button</Button>
              </Stack>
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Mobile properties", () => {
    const inline = boolean("Inline", false);
    const direction = select("Direction", [undefined, ...Object.values(DIRECTIONS)]);
    const wrap = boolean("Wrap", false);
    const grow = boolean("Grow", true);
    const shrink = boolean("Shrink", false);
    const basis = text("Basis", "auto");
    const align = select("Align", [undefined, ...Object.values(ALIGNS)]);
    const justify = select("Justify", [undefined, ...Object.values(JUSTIFY)]);
    const spacing = select("Spacing", [undefined, ...Object.values(SPACINGS)]);
    const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Stack
                  inline={inline}
                  direction={direction}
                  wrap={wrap}
                  shrink={shrink}
                  grow={grow}
                  basis={basis}
                  align={align}
                  justify={justify}
                  spacing={spacing}
                  spaceAfter={spaceAfter}
                >
                  <Button type="success" iconLeft={<Airplane />}>
                    Button
                  </Button>
                  <Button type="warning">Button</Button>
                </Stack>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Desktop properties", () => {
    const inline = boolean("Inline", false);
    const direction = select("Direction", [undefined, ...Object.values(DIRECTIONS)]);
    const wrap = boolean("Wrap", false);
    const grow = boolean("Grow", true);
    const shrink = boolean("Shrink", false);
    const basis = text("Basis", "auto");
    const align = select("Align", [undefined, ...Object.values(ALIGNS)]);
    const justify = select("Justify", [undefined, ...Object.values(JUSTIFY)]);
    const spacing = select("Spacing", [undefined, ...Object.values(SPACINGS)], SPACINGS.COMFY);
    const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);
    const desktop = {
      inline,
      direction,
      wrap,
      grow,
      shrink,
      basis,
      align,
      justify,
      spacing,
      spaceAfter,
    };

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Stack desktop={desktop}>
                  <InputField type="password" label="Password" help="You need some help!" />
                  <Button>Sign In</Button>
                </Stack>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Nested example", () => ({
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Stack spacing="comfy" direction="column" align="start">
                <Stack spacing="condensed" direction="row" inline>
                  <Text weight="bold">email@gmail.com</Text>
                  <Edit size="small" color="success" />
                </Stack>
                <Stack direction="row" spaceAfter="large" align="end">
                  <InputField type="password" label="Password" error="You need some help!" />
                  <Button>Sign In</Button>
                </Stack>
                <Text size="small">
                  <TextLink type="secondary">Forgot password?</TextLink>
                </Text>
              </Stack>
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Full", () => {
    const flex = boolean("flex", false);
    const inline = boolean("Inline", false);
    const direction = select("Direction", [undefined, ...Object.values(DIRECTIONS)]);
    const wrap = boolean("Wrap", false);
    const grow = boolean("Grow", true);
    const shrink = boolean("Shrink", false);
    const basis = text("Basis", undefined);
    const align = select("Align", [undefined, ...Object.values(ALIGNS)]);
    const justify = select("Justify", [undefined, ...Object.values(JUSTIFY)]);
    const spacing = select("Spacing", [undefined, ...Object.values(SPACINGS)]);
    const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);
    const desktop = object("Desktop", {
      inline: false,
      direction: DIRECTIONS.ROW,
      wrap: false,
      grow: false,
      shrink: false,
      basis: "auto",
      align: ALIGNS.END,
      justify: JUSTIFY.CENTER,
      spacing: SPACINGS.CONDENSED,
      spaceAfter: SPACINGS_AFTER.LARGE,
    });

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Stack
                  flex={flex}
                  direction={direction}
                  align={align}
                  justify={justify}
                  wrap={wrap}
                  grow={grow}
                  basis={basis}
                  inline={inline}
                  shrink={shrink}
                  spacing={spacing}
                  spaceAfter={spaceAfter}
                  desktop={desktop}
                >
                  <InputField type="password" label="Password" help="You need some help!" />
                  <Button>Sign In</Button>
                </Stack>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => ({
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Stack direction="column">
                <Stack direction="row" align="center">
                  <Alert title="hola amigo" icon>
                    My message
                  </Alert>
                  <Alert title="hola amigo" icon>
                    My message
                  </Alert>
                  <Button>Hola amigo</Button>
                </Stack>
                <Stack direction="row" justify="around">
                  <Button>Hola amigo</Button>
                  <ButtonLink>Hola amigo</ButtonLink>
                </Stack>
                <Stack direction="row" justify="between">
                  <Badge>Hola amigo</Badge>
                  <Badge type="dark">Hola amigo</Badge>
                </Stack>
                <Stack direction="column" align="center">
                  <ButtonGroup connected>
                    <Button>Hola amigo</Button>
                    <Button>Hola amigo</Button>
                  </ButtonGroup>
                  <ButtonGroup connected>
                    <Button type="secondary">Hola amigo</Button>
                    <Button type="secondary">Hola amigo</Button>
                  </ButtonGroup>
                </Stack>
                <Stack direction="row" justify="center">
                  <ButtonGroup connected>
                    <Button>Hola amigo</Button>
                    <Button>Hola amigo</Button>
                  </ButtonGroup>
                  <ButtonGroup connected>
                    <Button type="secondary">Hola amigo</Button>
                    <Button type="secondary">Hola amigo</Button>
                  </ButtonGroup>
                </Stack>
                <Stack direction="row" align="center">
                  <Card>
                    <CardHeader title="Hola amigo" />
                  </Card>
                  <Card>
                    <CardHeader title="Hola amigo" />
                  </Card>
                </Stack>
                <Stack direction="column" align="center">
                  <Card>
                    <CardHeader title="Hola amigo" />
                  </Card>
                  <Card>
                    <CardHeader title="Hola amigo" />
                  </Card>
                </Stack>
                <Stack direction="row" justify="between">
                  <CarrierLogo
                    carriers={[
                      { code: "YO", name: "Lorem ipsum", type: "bus" },
                      { code: "LAL", name: "Lorem ipsum", type: "train" },
                      { code: "KEK", name: "Lorem ipsum", type: "airline" },
                    ]}
                  />
                  <CarrierLogo
                    carriers={[
                      { code: "YO", name: "Lorem ipsum", type: "bus" },
                      { code: "LAL", name: "Lorem ipsum", type: "train" },
                      { code: "KEK", name: "Lorem ipsum", type: "airline" },
                    ]}
                  />
                </Stack>
                <Stack direction="row">
                  <Checkbox label="My Label" info="Some help" />
                  <Radio label="My Label" info="Some help" />
                </Stack>
                <Stack direction="column" align="center">
                  <Checkbox label="My Label" info="Some help" />
                  <Radio label="My Label" info="Some help" />
                </Stack>
                <Stack direction="row">
                  <CountryFlag code="cz" />
                  <CountryFlag code="us" />
                </Stack>
                <Stack direction="column">
                  <CountryFlag code="cz" />
                  <CountryFlag code="us" />
                </Stack>
                <Stack direction="column" align="center">
                  <Heading>Hola Amigo</Heading>
                  <Heading type="title2">Hola Amigo</Heading>
                </Stack>
                <Stack direction="row" justify="start" align="end">
                  <Heading>Hola Amigo</Heading>
                  <Heading type="title2">Hola Amigo</Heading>
                </Stack>
                <Stack direction="row" justify="start" align="center">
                  <Airplane />
                  <Text>Hola Amigo</Text>
                </Stack>
                <Stack>
                  <Illustration name="Accommodation" size="small" />
                  <Text>Hola Amigo</Text>
                </Stack>
                <Stack direction="row" align="center">
                  <Illustration name="Accommodation" size="small" />
                  <Text>Hola Amigo</Text>
                </Stack>
                <Stack direction="row">
                  <InputField label="My label" />
                  <Select
                    label="My label"
                    options={[
                      { value: 1, label: "First item" },
                      { value: 2, label: "Second item" },
                      { value: 3, label: "Third item" },
                    ]}
                  />
                  <InputGroup label="My label">
                    <InputField label="My label" />
                    <Select
                      label="My label"
                      options={[
                        { value: 1, label: "First item" },
                        { value: 2, label: "Second item" },
                        { value: 3, label: "Third item" },
                      ]}
                    />
                  </InputGroup>
                </Stack>
                <Stack direction="column">
                  <InputField label="My label" />
                  <Select
                    label="My label"
                    options={[
                      { value: 1, label: "First item" },
                      { value: 2, label: "Second item" },
                      { value: 3, label: "Third item" },
                    ]}
                  />
                  <InputGroup label="My label" flex="1 1 100%">
                    <InputField label="My label" />
                    <Select
                      label="My label"
                      options={[
                        { value: 1, label: "First item" },
                        { value: 2, label: "Second item" },
                        { value: 3, label: "Third item" },
                      ]}
                    />
                  </InputGroup>
                  <Textarea label="My label" />
                </Stack>
                <Stack direction="row" align="center">
                  <Heading type="title3">My heading</Heading>
                  <ServiceLogo name="Visa" />
                </Stack>
                <Stack>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Stack>
                <Stack direction="row">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Stack>
                <Stack direction="row">
                  <Tile
                    href="https://kiwi.com"
                    icon={<Airplane />}
                    title="My title"
                    description="Some description"
                  />
                  <Tile
                    href="https://kiwi.com"
                    icon={<Airplane />}
                    title="My title"
                    description="Some description"
                  />
                </Stack>
                <Stack>
                  <Tile icon={<Airplane />} title="My title" description="Some description">
                    Some children
                  </Tile>
                  <Tile icon={<Airplane />} title="My title" description="Some description">
                    Some children
                  </Tile>
                </Stack>
              </Stack>
            ),
          },
        ],
      },
    ],
  }));

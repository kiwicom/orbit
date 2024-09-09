import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { DIRECTIONS, ALIGNS, SPACINGS, JUSTIFY } from "../utils/layout/consts";
import Edit from "../icons/Edit";
import Button from "../Button";
import InputField from "../InputField";
import Text from "../Text";
import TextLink from "../TextLink";
import Airplane from "../icons/Airplane";
import { SPACINGS_AFTER } from "../common/consts";
import ButtonGroup from "../ButtonGroup";
import Card from "../Card";
import Checkbox from "../Checkbox";
import Alert from "../Alert";
import Badge from "../Badge";
import ButtonLink from "../ButtonLink";
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
import CardSection from "../Card/CardSection";
import StopoverArrow from "../StopoverArrow";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import ChoiceGroup from "../ChoiceGroup";

import Stack from ".";

const meta: Meta<typeof Stack> = {
  title: "Stack",
  component: Stack,

  args: {
    inline: false,
    direction: undefined,
    wrap: false,
    grow: true,
    shrink: false,
    basis: "auto",
    align: ALIGNS.END,
    justify: undefined,
    spacing: undefined,
    spaceAfter: undefined,
  },

  argTypes: {
    direction: {
      options: Object.values(DIRECTIONS),
      control: {
        type: "select",
      },
    },
    align: {
      options: Object.values(ALIGNS),
      control: {
        type: "select",
      },
    },
    justify: {
      options: Object.values(JUSTIFY),
      control: {
        type: "select",
      },
    },
    spacing: {
      options: Object.values(SPACINGS),
      control: {
        type: "select",
      },
    },
    spaceAfter: {
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: () => (
    <Stack>
      <Button type="primary" iconLeft={<Airplane />}>
        Button
      </Button>
      <Button type="secondary">Button</Button>
    </Stack>
  ),

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const MobileProperties: Story = {
  render: args => (
    <Stack {...args}>
      <Button type="primary" iconLeft={<Airplane />}>
        Button
      </Button>
      <Button type="secondary">Button</Button>
    </Stack>
  ),

  args: {
    direction: DIRECTIONS.ROW,
    align: ALIGNS.START,
    justify: JUSTIFY.START,
    spacing: SPACINGS.NONE,
  },
};

export const MediumMobileProperties: Story = {
  render: args => (
    <Stack mediumMobile={{ ...args }}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  ),

  args: {
    direction: DIRECTIONS.COLUMN,
  },
};

export const LargeMobileProperties: Story = {
  render: args => (
    <Stack largeMobile={{ ...args }}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  ),
};

export const TabletProperties: Story = {
  render: args => (
    <Stack tablet={{ ...args }}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  ),

  args: {
    spacing: SPACINGS.TWO_HUNDRED,
  },
};

export const DesktopProperties: Story = {
  render: args => (
    <Stack desktop={{ ...args }}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  ),

  args: {
    direction: DIRECTIONS.ROW,
    align: ALIGNS.START,
    justify: JUSTIFY.BETWEEN,
  },
};

export const LargeDesktopProperties: Story = {
  render: args => (
    <Stack largeDesktop={{ ...args }}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  ),

  args: {
    spacing: SPACINGS.EIGHT_HUNDRED,
  },
};

export const NestedExample: Story = {
  render: () => (
    <Stack spacing="600" direction="column" align="start">
      <Stack spacing="200" direction="row" inline>
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

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const ComponentsPreview: Story = {
  render: () => (
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
        <ButtonGroup>
          <Button>Hola amigo</Button>
          <Button>Hola amigo</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="secondary">Hola amigo</Button>
          <Button type="secondary">Hola amigo</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row" justify="center">
        <ButtonGroup>
          <Button>Hola amigo</Button>
          <Button>Hola amigo</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="secondary">Hola amigo</Button>
          <Button type="secondary">Hola amigo</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row" align="center">
        <Card title="Hola amigo" />
        <Card>
          <CardSection>
            <Heading type="title3">Insert your title here...</Heading>
            <Text>subtitle</Text>
          </CardSection>
          <CardSection
            title={<Heading type="title3">Insert your title here...</Heading>}
            description="subtitle"
          >
            Content
          </CardSection>
        </Card>
      </Stack>
      <Stack direction="column" align="center">
        <Card title="Hola amigo" />
        <Card title="Insert your title here..." description="subtitle">
          <CardSection
            title={<Heading type="title3">Insert your title here...</Heading>}
            description="subtitle"
          />
          <CardSection
            expandable
            title={<Heading type="title3">Insert your title here...</Heading>}
          >
            Hidden content
          </CardSection>
          <CardSection
            title={<Heading type="title3">Insert your title here...</Heading>}
            description="subtitle"
          />
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
        <ChoiceGroup
          label="What was the reason for your cancellation?"
          labelSize="normal"
          labelAs="h4"
          onChange={action("onChange")}
        >
          <Checkbox label="Reason one" value="one" />
          <Checkbox label="Reason two" value="two" />
          <Checkbox label="Reason three" value="three" />
        </ChoiceGroup>
        <ChoiceGroup
          label="What was the reason for your cancellation?"
          labelSize="normal"
          labelAs="h4"
          onChange={action("onChange")}
        >
          <Checkbox label="Reason one" value="one" />
          <Checkbox label="Reason two" value="two" />
          <Checkbox label="Reason three" value="three" />
        </ChoiceGroup>
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
        <Illustration name="Accommodation" size="extraSmall" />
        <Text>Hola Amigo</Text>
      </Stack>
      <Stack direction="row" align="center">
        <Illustration name="Accommodation" size="extraSmall" />
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
      <Stack direction="row" align="center">
        <Heading>Orbit Design System</Heading>
      </Stack>
      <Stack direction="row" align="center">
        <Text>Prague</Text>
        <StopoverArrow stops="3" />
        <Text>Barcelona</Text>
      </Stack>
    </Stack>
  ),

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Playground: Story = {
  render: args => (
    <Stack {...args}>
      <Button type="secondary">Sign In</Button>
      <Button>Log In</Button>
    </Stack>
  ),

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    as: "div",
    flex: true,
    legacy: false,
    basis: "",
    align: ALIGNS.START,
    justify: JUSTIFY.START,
    spacing: SPACINGS.NONE,
    spaceAfter: SPACINGS_AFTER.SMALL,
    id: "ID",
  },
};

export const Rtl: Story = {
  render: () => (
    <RenderInRtl>
      <Stack spacing="600" direction="column" align="start">
        <Stack spacing="200" direction="row" inline>
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
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};

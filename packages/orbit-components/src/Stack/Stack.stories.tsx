import * as React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, object, text } from "@storybook/addon-knobs";

import { DIRECTIONS, ALIGNS, SPACINGS, JUSTIFY } from "../utils/layout/consts";
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

export default {
  title: "Stack",
};

export const Default = () => (
  <Stack>
    <Button type="primary" iconLeft={<Airplane />}>
      Button
    </Button>
    <Button type="secondary">Button</Button>
  </Stack>
);

Default.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const MobileProperties = () => {
  const inline = boolean("Inline", false);
  const direction = select("Direction", Object.values(DIRECTIONS), DIRECTIONS.ROW);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "auto");
  const align = select("Align", Object.values(ALIGNS), ALIGNS.START);
  const justify = select("Justify", Object.values(JUSTIFY), JUSTIFY.START);
  const spacing = select("Spacing", Object.values(SPACINGS), SPACINGS.NONE);
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), undefined);

  return (
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
      <Button type="primary" iconLeft={<Airplane />}>
        Button
      </Button>
      <Button type="secondary">Button</Button>
    </Stack>
  );
};

MobileProperties.story = {
  name: "Mobile properties",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const MediumMobileProperties = () => {
  const inline = boolean("Inline", false);
  const direction = select("Direction", Object.values(DIRECTIONS), undefined);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "auto");
  const align = select("Align", Object.values(ALIGNS), ALIGNS.END);
  const justify = select("Justify", Object.values(JUSTIFY), undefined);
  const spacing = select("Spacing", Object.values(SPACINGS), undefined);
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), undefined);

  const mediumMobile = {
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

  return (
    <Stack mediumMobile={mediumMobile}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  );
};

MediumMobileProperties.story = {
  name: "MediumMobile properties",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const LargeMobileProperties = () => {
  const inline = boolean("Inline", false);
  const direction = select("Direction", Object.values(DIRECTIONS), undefined);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "auto");
  const align = select("Align", Object.values(ALIGNS), ALIGNS.END);
  const justify = select("Justify", Object.values(JUSTIFY), undefined);
  const spacing = select("Spacing", Object.values(SPACINGS), undefined);
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), undefined);

  const largeMobile = {
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

  return (
    <Stack largeMobile={largeMobile}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  );
};

LargeMobileProperties.story = {
  name: "LargeMobile properties",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const TabletProperties = () => {
  const inline = boolean("Inline", false);
  const direction = select("Direction", Object.values(DIRECTIONS), undefined);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "auto");
  const align = select("Align", Object.values(ALIGNS), ALIGNS.END);
  const justify = select("Justify", Object.values(JUSTIFY), undefined);
  const spacing = select("Spacing", Object.values(SPACINGS), undefined);
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), undefined);

  const tablet = {
    inline,
    direction,
    spaceAfter,
    wrap,
    grow,
    shrink,
    basis,
    align,
    justify,
    spacing,
    spaceAfter,
  };

  return (
    <Stack tablet={tablet}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  );
};

TabletProperties.story = {
  name: "Tablet properties",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const DesktopProperties = () => {
  const inline = boolean("Inline", false);
  const direction = select("Direction", Object.values(DIRECTIONS), undefined);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "auto");
  const align = select("Align", Object.values(ALIGNS), ALIGNS.END);
  const justify = select("Justify", Object.values(JUSTIFY), undefined);
  const spacing = select("Spacing", Object.values(SPACINGS), undefined);
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), undefined);

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

  return (
    <Stack desktop={desktop}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  );
};

DesktopProperties.story = {
  name: "Desktop properties",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const LargeDesktopProperties = () => {
  const inline = boolean("Inline", false);
  const direction = select("Direction", Object.values(DIRECTIONS), undefined);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "auto");
  const align = select("Align", Object.values(ALIGNS), ALIGNS.END);
  const justify = select("Justify", Object.values(JUSTIFY), undefined);
  const spacing = select("Spacing", Object.values(SPACINGS), undefined);
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), undefined);

  const largeDesktop = {
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

  return (
    <Stack largeDesktop={largeDesktop}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  );
};

LargeDesktopProperties.story = {
  name: "LargeDesktop properties",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const NestedExample = () => (
  <Stack spacing="large" direction="column" align="start">
    <Stack spacing="XSmall" direction="row" inline>
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
);

NestedExample.story = {
  name: "Nested example",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Playground = () => {
  const dataTest = text("dataTest", "test");
  const flex = boolean("flex", true);
  const inline = boolean("Inline", false);
  const direction = select("Direction", Object.values(DIRECTIONS), undefined);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "");
  const align = select("Align", Object.values(ALIGNS), ALIGNS.START);
  const justify = select("Justify", Object.values(JUSTIFY), JUSTIFY.START);
  const spacing = select("Spacing", Object.values(SPACINGS), SPACINGS.NONE);
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.SMALL);

  const mediumMobile = object("mediumMobile", {
    direction: DIRECTIONS.COLUMN,
  });
  const largeMobile = object("largeMobile", {
    align: ALIGNS.END,
  });
  const tablet = object("tablet", {
    spacing: SPACINGS.XSMALL,
  });
  const desktop = object("desktop", {
    justify: JUSTIFY.BETWEEN,
    direction: DIRECTIONS.ROW,
    align: ALIGNS.START,
  });
  const largeDesktop = object("largeDesktop", {
    spacing: SPACINGS.XLARGE,
  });

  return (
    <Stack
      dataTest={dataTest}
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
      mediumMobile={mediumMobile}
      largeMobile={largeMobile}
      tablet={tablet}
      desktop={desktop}
      largeDesktop={largeDesktop}
    >
      <Button type="secondary">Sign In</Button>
      <Button>Log In</Button>
    </Stack>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const ComponentsPreview = () => (
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
        <CardSection expandable title={<Heading type="title3">Insert your title here...</Heading>}>
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
);

ComponentsPreview.story = {
  name: "Components preview",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = () => (
  <RenderInRtl>
    <Stack spacing="large" direction="column" align="start">
      <Stack spacing="XSmall" direction="row" inline>
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
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

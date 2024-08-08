import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import Stack from "../Stack";
import Text from "../Text";
import ButtonLink from "../ButtonLink";
import Badge from "../Badge";
import Clock from "../icons/Clock";
import CardSection from "./CardSection";
import { ELEMENT_OPTIONS } from "../Heading/consts";

import Card from ".";

type CardPropsAndCustomArgs = React.ComponentProps<typeof Card> & {
  expanded: boolean;
  sectionTitle: string;
  sectionDescription: string;
  initialExpanded?: boolean;
};

const meta: Meta<CardPropsAndCustomArgs> = {
  title: "Card",
  component: Card,

  args: {
    description: "This is description of the card",
    title: "Card with title",
    titleAs: ELEMENT_OPTIONS.H2,
    sectionTitle: "Section Title",
    sectionDescription: "Section Description",
    expanded: false,
    initialExpanded: false,
    dataA11ySection: "",
    loading: false,
  },

  argTypes: {
    titleAs: {
      options: Object.values(ELEMENT_OPTIONS),
      control: {
        type: "select",
      },
    },
  },

  parameters: {
    controls: {
      exclude: ["labelClose"],
    },
  },
};

export default meta;

type Story = StoryObj<CardPropsAndCustomArgs>;

export const Default: Story = {};

export const CardWithDescription: Story = {
  render: args => <Card {...args} onClose={action("onClose")} />,
};

export const CardWithActions: Story = {
  render: args => (
    <Card
      {...args}
      actions={
        <ButtonLink compact size="small">
          Button
        </ButtonLink>
      }
    />
  ),

  parameters: {
    controls: {
      exclude: ["expanded", "initialExpanded", "labelClose"],
    },
  },
};

export const CardWithOnlySection: Story = {
  render: () => (
    <Card>
      <CardSection>This is content of card</CardSection>
    </Card>
  ),

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const CardWithSections: Story = {
  render: ({ sectionTitle, sectionDescription, ...args }) => (
    <Card {...args}>
      <CardSection title={sectionTitle} description={sectionDescription} />
      <CardSection title={sectionTitle} description={sectionDescription} />
      <CardSection title={sectionTitle} description={sectionDescription} />
    </Card>
  ),

  parameters: {
    controls: {
      exclude: ["expanded", "initialExpanded", "labelClose"],
    },
  },
};

export const CardWithExpandableSections: Story = {
  render: ({ sectionTitle, ...args }) => (
    <Card {...args} onClose={action("onClose")}>
      <CardSection expandable title={sectionTitle}>
        This is a section content
      </CardSection>
      <CardSection expandable title={sectionTitle}>
        This is a section content
      </CardSection>
      <CardSection expandable title={sectionTitle}>
        This is a section content
      </CardSection>
    </Card>
  ),

  parameters: {
    controls: {
      exclude: ["expanded", "initialExpanded", "labelClose"],
    },
  },
};

export const CardWithControlledAndUncontrolled: Story = {
  render: ({ expanded, sectionTitle, ...args }) => (
    <Card {...args}>
      <CardSection
        expandable
        expanded={expanded}
        onClose={action("onClose")}
        onExpand={action("onExpand")}
        title={sectionTitle}
      >
        This is a section content
      </CardSection>
      <CardSection
        expandable
        title={sectionTitle}
        onClose={action("onClose")}
        onExpand={action("onExpand")}
      >
        This is a section content
      </CardSection>
    </Card>
  ),

  args: {
    expanded: true,
  },
};

export const CardWithControlledWithControls: Story = {
  render: ({ expanded, sectionTitle, ...args }) => (
    <Card {...args}>
      <CardSection expandable expanded={expanded} title={sectionTitle}>
        This is a section content
      </CardSection>
    </Card>
  ),
};

export const CardWithDefaultExpanded: Story = {
  render: ({ initialExpanded }) => (
    <Card>
      <CardSection
        expandable
        header={
          <Stack inline align="center" justify="end">
            <Text type="secondary">Trip length: 1h55m</Text>
            <Badge icon={<Clock />} type="warningSubtle">
              Unavailable
            </Badge>
          </Stack>
        }
      >
        Hidden content
      </CardSection>
      <CardSection
        expandable
        initialExpanded={initialExpanded}
        onExpand={action("onExpand")}
        actions={
          <ButtonLink compact type="secondary" size="small">
            Close
          </ButtonLink>
        }
        onClose={action("onClose")}
        header={
          <Stack inline justify="end">
            <Text type="secondary">Trip length: 1h55m</Text>
            <Badge icon={<Clock />} type="warningSubtle">
              Unavailable
            </Badge>
          </Stack>
        }
      >
        By default visible content
      </CardSection>
    </Card>
  ),

  args: {
    initialExpanded: true,
  },

  parameters: {
    controls: {
      exclude: ["expanded", "labelClose"],
    },
  },
};

export const CardWithMixedSections: Story = {
  render: ({ sectionTitle, sectionDescription, ...args }) => (
    <Card
      {...args}
      actions={
        <ButtonLink compact size="small">
          Button
        </ButtonLink>
      }
    >
      <CardSection
        expandable
        title={sectionTitle}
        actions={
          <ButtonLink compact size="small" type="secondary">
            Button
          </ButtonLink>
        }
        description={sectionDescription}
      >
        Section Content
      </CardSection>
      <CardSection expandable title={sectionTitle} description={sectionDescription}>
        Expandable Content
      </CardSection>
      <CardSection title={sectionTitle} description={sectionDescription}>
        Section Content
      </CardSection>
    </Card>
  ),
};
export const LoadingCard: Story = {
  render: args => (
    <Card {...args}>
      <CardSection>kek</CardSection>
    </Card>
  ),

  args: {
    loading: true,
  },
};

export const Rtl: Story = {
  render: () => (
    <RenderInRtl>
      <Card title="Title of the CardHeader" description="Description of the CardHeader">
        <CardSection title="Content with Heading and text">
          <Text>Text in content</Text>
        </CardSection>
        <CardSection title="Content with Heading and text">
          <Text>Text in content</Text>
        </CardSection>
        <CardSection title="Content with Heading and text" expandable>
          Text in content
        </CardSection>

        <CardSection
          expandable
          title="Content with Heading and text"
          initialExpanded
          actions={
            <ButtonLink compact size="small">
              Action
            </ButtonLink>
          }
        >
          <Text>Text in content</Text>
        </CardSection>
      </Card>
    </RenderInRtl>
  ),

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Accessibility: Story = {};

export const Playground: Story = {};

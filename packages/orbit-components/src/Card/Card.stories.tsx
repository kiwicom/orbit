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
  onClick: () => void;
  buttonClick: () => void;
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
      exclude: ["dataA11ySection", "labelClose"],
    },
  },
};

export default meta;

type Story = StoryObj<CardPropsAndCustomArgs>;

export const Default: Story = {
  render: args => <Card {...args} />,
  args: {
    sectionTitle: undefined,
    sectionDescription: undefined,
  },
  parameters: {
    controls: {
      exclude: [
        "labelClose",
        "sectionTitle",
        "sectionDescription",
        "expanded",
        "initialExpanded",
        "loading",
        "titleAs",
      ],
    },
  },
};

export const CardWithDescription: Story = {
  render: args => <Card {...args} onClose={action("onClose")} />,

  args: {
    sectionTitle: undefined,
    sectionDescription: undefined,
  },

  parameters: {
    controls: {
      exclude: ["sectionTitle", "sectionDescription", "expanded", "initialExpanded", "labelClose"],
    },
  },
};

export const CardWithActions: Story = {
  render: args => (
    <Card
      {...args}
      actions={
        <ButtonLink onClick={action("onClick")} compact size="small">
          Button
        </ButtonLink>
      }
    />
  ),

  args: {
    sectionTitle: undefined,
    sectionDescription: undefined,
  },

  parameters: {
    controls: {
      exclude: ["sectionTitle", "sectionDescription", "expanded", "initialExpanded", "labelClose"],
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
  render: ({ sectionTitle, sectionDescription, expanded, initialExpanded, ...args }) => (
    <Card {...args} onClose={action("onClose")}>
      <CardSection
        expandable
        expanded={expanded}
        initialExpanded={initialExpanded}
        title={sectionTitle}
        description={sectionDescription}
      >
        This is a section content
      </CardSection>
      <CardSection
        expandable
        expanded={expanded}
        initialExpanded={initialExpanded}
        title={sectionTitle}
        description={sectionDescription}
      >
        This is a section content
      </CardSection>
      <CardSection
        expandable
        expanded={expanded}
        initialExpanded={initialExpanded}
        title={sectionTitle}
        description={sectionDescription}
      >
        This is a section content
      </CardSection>
    </Card>
  ),

  parameters: {
    controls: {
      exclude: ["labelClose"],
    },
  },
};

export const CardWithControlledAndUncontrolled: Story = {
  render: ({ expanded, sectionTitle, sectionDescription, ...args }) => (
    <Card {...args}>
      <CardSection
        expandable
        expanded={expanded}
        onClose={action("onClose")}
        onExpand={action("onExpand")}
        title={sectionTitle}
        description={sectionDescription}
      >
        This is a section content
      </CardSection>
      <CardSection
        expandable
        title={sectionTitle}
        onClose={action("onClose")}
        onExpand={action("onExpand")}
        description={sectionDescription}
      >
        This is a section content
      </CardSection>
    </Card>
  ),

  parameters: {
    controls: {
      exclude: ["labelClose"],
    },
  },

  args: {
    expanded: true,
  },
};

export const CardWithControlledWithControls: Story = {
  render: ({ expanded, sectionTitle, sectionDescription, ...args }) => (
    <Card {...args}>
      <CardSection
        expandable
        expanded={expanded}
        title={sectionTitle}
        description={sectionDescription}
      >
        This is a section content
      </CardSection>
    </Card>
  ),

  parameters: {
    controls: {
      exclude: ["labelClose"],
    },
  },
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
          <ButtonLink onClick={action("onClose")} compact type="secondary" size="small">
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
      disable: true,
    },
  },
};

export const CardWithMixedSections: Story = {
  render: ({ sectionTitle, sectionDescription, onClick, buttonClick, ...args }) => (
    <Card
      {...args}
      actions={
        <ButtonLink onClick={buttonClick} compact size="small">
          Button
        </ButtonLink>
      }
    >
      <CardSection
        expandable
        title={sectionTitle}
        actions={
          <ButtonLink onClick={buttonClick} compact size="small" type="secondary">
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
      <CardSection
        title={sectionTitle}
        actions={<ButtonLink onClick={buttonClick}>Button</ButtonLink>}
      />
      <CardSection onClick={onClick} title={sectionTitle} description={sectionDescription}>
        Section Content with onClick
      </CardSection>
      <CardSection
        expandable
        onClick={onClick}
        actions={
          <ButtonLink onClick={buttonClick} compact size="small">
            Button
          </ButtonLink>
        }
        title={sectionTitle}
        description={sectionDescription}
      >
        Expandable section Content with onClick and actions
      </CardSection>
      <CardSection
        onClick={onClick}
        actions={
          <ButtonLink onClick={buttonClick} compact size="small">
            Button
          </ButtonLink>
        }
        title={sectionTitle}
        description={sectionDescription}
      >
        Non-expandable section Content with onClick and actions
      </CardSection>
    </Card>
  ),

  args: {
    onClick: action("onClick"),
    buttonClick: action("buttonClick"),
  },

  parameters: {
    controls: {
      exclude: ["labelClose", "initialExpanded", "expanded", "onClick", "buttonClick"],
    },
  },
};

export const LoadingCard: Story = {
  render: args => (
    <Card {...args}>
      <CardSection>kek</CardSection>
    </Card>
  ),

  parameters: {
    controls: {
      exclude: ["sectionTitle", "sectionDescription", "expanded", "initialExpanded", "labelClose"],
    },
  },

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

export const Playground: Story = {
  render: ({ sectionTitle, sectionDescription, expanded, initialExpanded, ...args }) => (
    <Card {...args}>
      <CardSection
        expandable
        expanded={expanded}
        initialExpanded={initialExpanded}
        title={sectionTitle}
        description={sectionDescription}
      >
        Expandable Content
      </CardSection>
    </Card>
  ),
};

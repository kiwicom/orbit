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
    titleAs: ELEMENT_OPTIONS.DIV,
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
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
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
        "children",
        "margin",
        "actions",
        "onClose",
        "header",
        "dataA11ySection",
      ],
    },
  },
};

export const CardClosable: Story = {
  render: args => <Card {...args} onClose={action("onClose")} />,

  args: {
    sectionTitle: undefined,
    sectionDescription: undefined,
  },

  parameters: {
    controls: {
      exclude: [
        "sectionTitle",
        "sectionDescription",
        "expanded",
        "initialExpanded",
        "labelClose",
        "children",
        "margin",
        "actions",
        "onClose",
        "header",
        "dataA11ySection",
        "titleAs",
        "loading",
      ],
    },
  },
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

  args: {
    sectionTitle: undefined,
    sectionDescription: undefined,
  },

  parameters: {
    controls: {
      exclude: [
        "sectionTitle",
        "sectionDescription",
        "expanded",
        "initialExpanded",
        "labelClose",
        "children",
        "margin",
        "actions",
        "onClose",
        "header",
        "dataA11ySection",
        "titleAs",
        "loading",
      ],
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
      <CardSection
        title={sectionTitle}
        description={sectionDescription}
        onClick={action("onClick")}
        actions={<ButtonLink asComponent="div">Button</ButtonLink>}
      />
      <CardSection title={sectionTitle} description={sectionDescription} />
      <CardSection title={sectionTitle} description={sectionDescription} />
    </Card>
  ),

  parameters: {
    controls: {
      exclude: [
        "expanded",
        "initialExpanded",
        "labelClose",
        "children",
        "margin",
        "actions",
        "onClose",
        "header",
        "dataA11ySection",
        "titleAs",
        "loading",
      ],
    },
  },
};

export const CardWithExpandableSections: Story = {
  render: ({ sectionTitle, sectionDescription, initialExpanded = false, ...args }) => (
    <Card {...args} onClose={action("onClose")}>
      <CardSection
        expandable
        initialExpanded={initialExpanded}
        title={sectionTitle}
        description={sectionDescription}
      >
        This is a section content
      </CardSection>
      <CardSection
        expandable
        initialExpanded={initialExpanded}
        title={sectionTitle}
        description={sectionDescription}
      >
        This is a section content
      </CardSection>
      <CardSection
        expandable
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
      exclude: [
        "labelClose",
        "expanded",
        "children",
        "margin",
        "actions",
        "onClose",
        "header",
        "dataA11ySection",
        "titleAs",
        "loading",
      ],
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
      exclude: [
        "labelClose",
        "children",
        "margin",
        "actions",
        "onClose",
        "header",
        "dataA11ySection",
        "titleAs",
        "loading",
      ],
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
      exclude: [
        "labelClose",
        "children",
        "margin",
        "actions",
        "onClose",
        "header",
        "dataA11ySection",
        "titleAs",
        "loading",
      ],
    },
  },
};

export const CardWithDefaultExpanded: Story = {
  render: ({ initialExpanded = false }) => (
    <Card>
      <CardSection
        expandable
        header={
          <Stack inline align="center" justify="end">
            <Text type="secondary">Trip length: 1h55m</Text>
            <Badge icon={<Clock ariaHidden />} type="warningSubtle">
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
        onClose={action("onClose")}
        header={
          <Stack inline justify="end">
            <Text type="secondary">Trip length: 1h55m</Text>
            <Badge icon={<Clock ariaHidden />} type="warningSubtle">
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
  render: ({ sectionTitle, sectionDescription, ...args }) => (
    <Card
      {...args}
      actions={
        <ButtonLink compact size="small">
          Button
        </ButtonLink>
      }
    >
      <CardSection expandable title={sectionTitle} description={sectionDescription}>
        Section Content
      </CardSection>
      <CardSection expandable title={sectionTitle} description={sectionDescription}>
        Expandable Content
      </CardSection>
      <CardSection title={sectionTitle} description={sectionDescription}>
        Section Content
      </CardSection>
      <CardSection title={sectionTitle} actions={<ButtonLink>Button</ButtonLink>} />
    </Card>
  ),

  parameters: {
    controls: {
      exclude: [
        "expanded",
        "initialExpanded",
        "labelClose",
        "children",
        "margin",
        "actions",
        "onClose",
        "header",
        "dataA11ySection",
        "titleAs",
        "loading",
      ],
    },
  },
};
export const LoadingCard: Story = {
  render: ({ loading, ...args }) => (
    <Card loading={loading} {...args} {...(loading && { loadingTitle: "Loading" })}>
      <CardSection>kek</CardSection>
    </Card>
  ),

  parameters: {
    controls: {
      exclude: [
        "sectionTitle",
        "sectionDescription",
        "expanded",
        "initialExpanded",
        "labelClose",
        "children",
        "margin",
        "actions",
        "onClose",
        "header",
        "dataA11ySection",
        "titleAs",
      ],
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

        <CardSection expandable title="Content with Heading and text" initialExpanded>
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
  render: ({ sectionTitle, sectionDescription, expanded, initialExpanded = false, ...args }) => (
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

  parameters: {
    controls: {
      exclude: [
        "children",
        "margin",
        "actions",
        "onClose",
        "header",
        "dataA11ySection",
        "labelClose",
        "initialExpanded",
      ],
    },
  },
};

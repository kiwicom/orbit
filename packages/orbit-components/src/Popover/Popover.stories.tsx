import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "../Tooltip";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { AUTO_PLACEMENTS, PLACEMENTS } from "../common/placements";
import Stack from "../Stack";
import Button from "../Button";
import Stepper from "../Stepper";
import ListChoice from "../ListChoice";
import Text from "../Text";
import * as Icons from "../icons";
import ChevronDown from "../icons/ChevronDown";
import Card, { CardSection } from "../Card";
import Loading from "../Loading";

import Popover from ".";

const Content = () => <div style={{ height: "700px" }} />;

const listChoiceContent = Array.from({ length: 3 }, (_, idx) => (
  <ListChoice
    key={idx}
    title="Choice Title"
    description="Further description"
    selectable
    icon={<Icons.Accommodation />}
    onClick={action("onClick")}
  />
));

const selects = (
  <Stack direction="column">
    <Stack flex shrink align="center" justify="between">
      <Stack inline direction="column" spacing="none">
        <Text>Adult</Text>
        <Text type="secondary">11+</Text>
      </Stack>
      <Stepper
        minValue={0}
        ariaLabelValue="Number of adult passengers"
        titleIncrement="Add adult passenger"
        titleDecrement="Remove adult passenger"
      />
    </Stack>
    <Stack flex shrink align="center" justify="between">
      <Stack inline direction="column" spacing="none">
        <Text>Child</Text>
        <Text type="secondary">2-11</Text>
      </Stack>
      <Stepper
        minValue={0}
        ariaLabelValue="Number of children passengers"
        titleIncrement="Add children passenger"
        titleDecrement="Remove children passenger"
      />
    </Stack>
  </Stack>
);

const content = <Stack>{selects}</Stack>;

const actions = (
  <Stack direction="row" justify="between">
    <Button type="secondary" size="small">
      Cancel
    </Button>
    <Button size="small">Done</Button>
  </Stack>
);

const longContent = <Stack>{Array(8).fill(selects)}</Stack>;

const meta: Meta<typeof Popover> = {
  title: "Popover",
  component: Popover,

  args: {
    onOpen: action("open"),
    onClose: action("close"),
    ariaLabel: "Passengers select",
    role: "dialog",
  },

  parameters: {
    info: "Popover component. Check Orbit.Kiwi for more detailed guidelines.",
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: args => (
    <Popover {...args} content={content}>
      <Button asComponent="div" type="secondary" iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  ),

  args: {
    onClose: undefined,
    onOpen: undefined,
  },

  parameters: {
    info: "Default setup of Popover component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const Placement: Story = {
  render: args => (
    <Stack justify="center">
      <Popover {...args} content={content}>
        <Button asComponent="div" type="secondary" iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
    </Stack>
  ),

  parameters: {
    controls: {
      exclude: [
        "labelClose",
        "renderInPortal",
        "lockScrolling",
        "renderTimeout",
        "onOpen",
        "onClose",
        "ariaLabel",
        "ariaLabelledby",
        "role",
      ],
    },
  },

  args: {
    placement: PLACEMENTS.BOTTOM_START,
  },

  argTypes: {
    placement: {
      options: [...Object.values(AUTO_PLACEMENTS), ...Object.values(PLACEMENTS)],
      control: {
        type: "select",
      },
    },
  },
};

export const OpenedByProp: Story = {
  render: args => (
    <Popover {...args} content={content}>
      <Button asComponent="div" type="secondary" iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  ),

  parameters: {
    controls: {
      exclude: [
        "labelClose",
        "renderInPortal",
        "placement",
        "lockScrolling",
        "renderTimeout",
        "onOpen",
        "onClose",
        "ariaLabel",
        "ariaLabelledby",
        "role",
      ],
    },
  },

  args: {
    opened: false,
  },
};

export const Overlapped: Story = {
  render: ({ opened, ...args }) => (
    <Popover {...args} content={content} actions={actions} opened={opened}>
      <Button asComponent="div" type="secondary" ariaExpanded={opened} iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  ),

  parameters: {
    controls: {
      exclude: [
        "labelClose",
        "renderInPortal",
        "placement",
        "lockScrolling",
        "renderTimeout",
        "onOpen",
        "onClose",
        "ariaLabel",
        "ariaLabelledby",
        "role",
      ],
    },
  },

  args: {
    overlapped: true,
  },
};

export const MultiplePopovers: Story = {
  render: args => (
    <Stack flex>
      <Popover {...args} content={content}>
        <Button asComponent="div" type="secondary" iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
      <Popover {...args} content={content} actions={actions}>
        <Button asComponent="div" type="secondary" iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
    </Stack>
  ),

  parameters: {
    info: "Example of multiple Popovers. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const LongContent: Story = {
  render: args => (
    <>
      <Popover
        {...args}
        content={longContent}
        actions={
          <Stack direction="row" justify="between">
            <Button type="secondary">Cancel</Button>
            <Button>Done</Button>
          </Stack>
        }
      >
        <Button asComponent="div" type="secondary" iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
      <Content />
      <Popover {...args} content={longContent}>
        <Button asComponent="div" type="secondary" iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
    </>
  ),

  parameters: {
    info: "Example of Popover with long content. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const ScrollingPage: Story = {
  render: args => (
    <>
      <div className="sticky" style={{ top: "20px" }}>
        <Card>
          <Popover {...args} content={content}>
            <Button asComponent="div" type="secondary" iconRight={<ChevronDown />} fullWidth>
              Open popover
            </Button>
          </Popover>
        </Card>
      </div>
      <Content />
    </>
  ),

  parameters: {
    info: "Example of Popover placed in scrolling element. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: [
        "renderInPortal",
        "placement",
        "lockScrolling",
        "renderTimeout",
        "onOpen",
        "onClose",
        "labelClose",
        "ariaLabel",
        "ariaLabelledby",
        "role",
      ],
    },
  },

  args: {
    fixed: true,
  },
};

export const ScrollingContent: Story = {
  render: args => (
    <div className="bg-cloud-dark overflow-scroll" style={{ height: "50vh" }}>
      <Content />
      <div className="bg-cloud-light">
        <Popover {...args} content={content}>
          <Button asComponent="div" type="secondary" iconRight={<ChevronDown />} fullWidth>
            Open popover
          </Button>
        </Popover>
      </div>
      <Content />
    </div>
  ),

  parameters: {
    info: "Example of Popover placed in scrolling element. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const LazyContentSimulated: Story = {
  render: args => {
    const [render, setRender] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        if (!render) {
          setRender(true);
        }
      }, 2000);
    }, [render]);

    return (
      <Stack justify="start">
        <Popover {...args} content={render ? listChoiceContent : <Loading />}>
          <Button asComponent="div" type="secondary">
            Test
          </Button>
        </Popover>
      </Stack>
    );
  },

  parameters: {
    info: "Example of Popover with lazy loading component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const InsideCard: Story = {
  render: args => {
    return (
      <Card>
        <CardSection
          title={<Text>Card title</Text>}
          actions={
            <Popover {...args} content={<div>Content</div>}>
              <Button asComponent="div" type="secondary">
                Open Popover
              </Button>
            </Popover>
          }
        />
      </Card>
    );
  },

  parameters: {
    info: "Example of Popover placed in card. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const WithTooltip: Story = {
  render: args => (
    <Popover {...args} content={<Tooltip content="Content">Tooltip</Tooltip>}>
      <Button asComponent="div" type="secondary" iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  ),

  parameters: {
    info: "Example of Popover component with tooltip in content. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const WithListChoice: Story = {
  render: args => (
    <Popover {...args} content={listChoiceContent}>
      <Button asComponent="div" type="secondary" iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  ),

  parameters: {
    info: "Example of Popover component with ListChoice in content prop. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

type PlaygroundArgsAndCustomTypes = StoryObj<
  React.ComponentProps<typeof Popover> & { footerActions: boolean }
>;
export const Playground: PlaygroundArgsAndCustomTypes = {
  render: ({ footerActions, opened, ...args }) => (
    <Stack justify="center">
      <Popover
        {...args}
        content={content}
        opened={opened}
        actions={
          footerActions && (
            <Stack direction="row" justify="between">
              <Button type="secondary" size="small">
                Cancel
              </Button>
              <Button size="small">Done</Button>
            </Stack>
          )
        }
      >
        <Button
          asComponent="div"
          type="secondary"
          ariaExpanded={opened}
          iconRight={<ChevronDown />}
        >
          Open popover
        </Button>
      </Popover>
    </Stack>
  ),

  parameters: {
    info: "You can try all possible configurations of this component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onOpen", "onClose"],
    },
  },

  args: {
    ...Placement.args,
    labelClose: "Close",
    renderInPortal: true,
    opened: true,
    zIndex: 710,
    id: "popover-id",
    offset: { top: 0, left: 0 },
    fixed: true,
    lockScrolling: true,
    noFlip: false,
    renderTimeout: 0,
    allowOverflow: false,
    noPadding: false,
    width: "350px",
    maxHeight: "",
    overlapped: false,
    footerActions: true,
  },

  argTypes: {
    ...Placement.argTypes,
    role: {
      options: ["dialog", "menu", "grid", "listbox", "tree"],
      control: {
        type: "select",
      },
    },
  },
};

export const Rtl: Story = {
  render: () => (
    <RenderInRtl>
      <Stack flex>
        <Popover content={content}>
          <Button asComponent="div" type="secondary" iconRight={<ChevronDown />}>
            Open popover
          </Button>
        </Popover>
      </Stack>
    </RenderInRtl>
  ),

  parameters: {
    info: "Example of RTL Popover component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

import * as React from "react";
import { action } from "@storybook/addon-actions";

import Tooltip from "../Tooltip";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { PLACEMENTS } from "../common/consts";
import Stack from "../Stack";
import Button from "../Button";
import Stepper from "../Stepper";
import ListChoice from "../ListChoice";
import Text from "../Text";
import * as Icons from "../icons";
import ChevronDown from "../icons/ChevronDown";
import Card, { CardSection } from "../Card";
import Loading from "../Loading";
import Modal from "../Modal";

import Popover from ".";

const Content = () => <div style={{ height: "2000px" }} />;

const selects = (
  <Stack direction="column">
    <Stack flex shrink align="center" justify="between">
      <Stack inline direction="column" spacing="none">
        <Text>Adult</Text>
        <Text type="secondary">11+</Text>
      </Stack>
      <Stepper minValue={0} />
    </Stack>
    <Stack flex shrink align="center" justify="between">
      <Stack inline direction="column" spacing="none">
        <Text>Child</Text>
        <Text type="secondary">2-11</Text>
      </Stack>
      <Stepper minValue={0} />
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

const longContent = (
  <Stack>
    {selects}
    {selects}
    {selects}
    {selects}
    {selects}
    {selects}
    {selects}
  </Stack>
);

const PopoverState = ({ labelClose, placement }) => {
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
      <Popover
        labelClose={labelClose}
        placement={placement}
        content={
          render ? (
            <div>
              <ListChoice
                title="Choice Title"
                description="Further description"
                selectable
                icon={<Icons.Accommodation />}
                onClick={action("onClick")}
              />
              <ListChoice
                title="Choice Title"
                description="Further description"
                selectable
                selected
                icon={<Icons.Accommodation />}
                onClick={action("onClick")}
              />
              <ListChoice
                title="Choice Title"
                description="Further description"
                selectable
                icon={<Icons.Accommodation />}
                onClick={action("onClick")}
              />
            </div>
          ) : (
            <Loading />
          )
        }
      >
        <Button>Test</Button>
      </Popover>
    </Stack>
  );
};

PopoverState.args = {
  placement: PLACEMENTS.BOTTOM_START,
  labelClose: "Close",
};

PopoverState.argTypes = {
  placement: {
    options: Object.values(PLACEMENTS),
    control: {
      type: "select",
    },
  },
};

export default {
  title: "Popover",
};

export const Default = ({ labelClose }) => {
  return (
    <Popover content={content} labelClose={labelClose}>
      <Button type="secondary" iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  );
};

Default.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Default.args = {
  labelClose: "Close",
};

export const InsideCard = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [isOpenedPopover, setIsOpenedPopover] = React.useState(false);

  return (
    <>
      <Card>
        <CardSection
          onClick={() => {
            setIsOpened(true);
          }}
          onClose={() => setIsOpened(false)}
        >
          <Popover
            opened={isOpenedPopover}
            onClose={() => {
              setIsOpenedPopover(false);
            }}
            content={<div>Content</div>}
          >
            <Button
              onClick={ev => {
                ev.stopPropagation();
                setIsOpenedPopover(true);
              }}
            >
              Open Popover
            </Button>
          </Popover>
        </CardSection>
      </Card>
      {isOpened && <Modal onClose={() => setIsOpened(false)}>kek</Modal>}
    </>
  );
};

export const WithTooltip = ({ labelClose }) => {
  return (
    <Popover content={<Tooltip content="Content">Tooltip</Tooltip>} labelClose={labelClose}>
      <Button type="secondary" iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  );
};

WithTooltip.args = {
  labelClose: "Close",
};

export const Placement = ({ placement, labelClose }) => {
  return (
    <Stack justify="center">
      <Popover content={content} placement={placement} labelClose={labelClose}>
        <Button type="secondary" iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
    </Stack>
  );
};

Placement.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Placement.args = {
  placement: PLACEMENTS.TOP_START,
  labelClose: "Close",
};

Placement.argTypes = {
  placement: {
    options: Object.values(PLACEMENTS),
    control: {
      type: "select",
    },
  },
};

export const WithListChoice = ({ width, labelClose }) => {
  return (
    <Popover
      noPadding
      width={width}
      labelClose={labelClose}
      content={
        <div>
          <ListChoice
            title="Choice Title"
            description="Further description"
            selectable
            icon={<Icons.Accommodation />}
            onClick={action("onClick")}
          />
          <ListChoice
            title="Choice Title"
            description="Further description"
            selectable
            selected
            icon={<Icons.Accommodation />}
            onClick={action("onClick")}
          />
          <ListChoice
            title="Choice Title"
            description="Further description"
            selectable
            icon={<Icons.Accommodation />}
            onClick={action("onClick")}
          />
        </div>
      }
      placement="bottom-start"
    >
      <Button type="secondary" iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  );
};

WithListChoice.story = {
  name: "With ListChoice",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

WithListChoice.args = {
  width: "250px",
  labelClose: "Close",
};

export const OpenedByProp = ({ opened, labelClose }) => {
  return (
    <Popover
      opened={opened}
      content={content}
      onOpen={action("open")}
      onClose={action("close")}
      labelClose={labelClose}
    >
      <Button type="secondary" iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  );
};

OpenedByProp.story = {
  name: "Opened by prop",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

OpenedByProp.args = {
  opened: false,
  labelClose: "Close",
};

export const Overlapped = ({ overlapped, opened }) => {
  return (
    <Popover
      overlapped={overlapped}
      content={content}
      actions={actions}
      onOpen={action("open")}
      onClose={action("close")}
    >
      <Button type="secondary" ariaExpanded={opened} iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  );
};

Overlapped.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Overlapped.args = {
  overlapped: true,
  opened: false,
};

export const MultiplePopovers = () => {
  return (
    <Stack flex>
      <Popover
        content={content}
        onOpen={action("open")}
        onClose={action("close")}
        placement="bottom-start"
      >
        <Button type="secondary" iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
      <Popover
        content={content}
        actions={actions}
        onOpen={action("open")}
        onClose={action("close")}
      >
        <Button type="secondary" iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
    </Stack>
  );
};

MultiplePopovers.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const LongContent = () => {
  return (
    <>
      <Popover
        content={longContent}
        actions={
          <Stack direction="row" justify="between">
            <Button type="secondary">Cancel</Button>
            <Button>Done</Button>
          </Stack>
        }
        onOpen={action("open")}
        onClose={action("close")}
      >
        <Button type="secondary" iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
      <Content />
      <Popover content={longContent} onOpen={action("open")} onClose={action("close")}>
        <Button type="secondary" iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
    </>
  );
};

LongContent.story = {
  name: "Long content",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const ScrollingPage = ({ labelClose }) => {
  return (
    <>
      <div className="sticky" style={{ top: "20px" }}>
        <Card>
          <Popover
            fixed
            content={content}
            onOpen={action("open")}
            labelClose={labelClose}
            onClose={action("close")}
          >
            <Button type="secondary" iconRight={<ChevronDown />} fullWidth>
              Open popover
            </Button>
          </Popover>
        </Card>
      </div>

      <Content />
    </>
  );
};

ScrollingPage.story = {
  name: "Scrolling page",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

ScrollingPage.args = {
  labelClose: "Close",
};

export const ScrollingContent = ({ labelClose }) => {
  return (
    <div className="bg-cloud-dark overflow-scroll" style={{ height: "50vh" }}>
      <div style={{ height: "2000px", paddingTop: "800px" }}>
        <Card>
          <Popover
            content={content}
            onOpen={action("open")}
            labelClose={labelClose}
            onClose={action("close")}
          >
            <Button type="secondary" iconRight={<ChevronDown />} fullWidth>
              Open popover
            </Button>
          </Popover>
        </Card>
        <Content />
      </div>
    </div>
  );
};

ScrollingContent.story = {
  name: "Scrolling content",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

ScrollingContent.args = {
  labelClose: "Close",
};

export const Playground = ({
  renderTimeout,
  zIndex,
  dataTest,
  placement,
  width,
  maxHeight,
  footerActions,
  noPadding,
  overlapped,
  opened,
  offset,
  noFlip,
  allowOverflow,
}) => {
  return (
    <Stack justify="center">
      <Popover
        width={width}
        zIndex={zIndex}
        maxHeight={maxHeight}
        renderTimeout={renderTimeout}
        dataTest={dataTest}
        offset={offset}
        content={content}
        placement={placement}
        noPadding={noPadding}
        allowOverflow={allowOverflow}
        opened={opened}
        noFlip={noFlip}
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
        overlapped={overlapped}
        onOpen={action("open")}
        onClose={action("close")}
      >
        <Button type="secondary" ariaExpanded={opened} iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
    </Stack>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  renderTimeout: 0,
  zIndex: 710,
  dataTest: "test",
  placement: PLACEMENTS.BOTTOM_START,
  width: "350px",
  maxHeight: "",
  footerActions: true,
  noPadding: false,
  overlapped: false,
  opened: true,
  offset: { top: 0, left: 0 },
  noFlip: false,
  allowOverflow: false,
};

Playground.argTypes = {
  placement: {
    options: Object.values(PLACEMENTS),
    control: {
      type: "select",
    },
  },
};

export const Rtl = ({ dataTest, labelClose, placement }) => {
  return (
    <RenderInRtl>
      <Stack flex>
        <Popover
          dataTest={dataTest}
          content={content}
          labelClose={labelClose}
          placement={placement}
        >
          <Button type="secondary" iconRight={<ChevronDown />}>
            Open popover
          </Button>
        </Popover>
      </Stack>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Rtl.args = {
  dataTest: "test",
  labelClose: "Close",
  placement: PLACEMENTS.BOTTOM_START,
};

Rtl.argTypes = {
  placement: {
    options: Object.values(PLACEMENTS),
    control: {
      type: "select",
    },
  },
};

export const RtlReverse = ({ placement, labelClose }) => {
  return (
    <RenderInRtl>
      <Stack justify="end">
        <Popover content={content} placement={placement} labelClose={labelClose}>
          <Button type="secondary" iconRight={<ChevronDown />}>
            Open popover
          </Button>
        </Popover>
      </Stack>
    </RenderInRtl>
  );
};

RtlReverse.story = {
  name: "RTL Reverse",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

RtlReverse.args = {
  placement: PLACEMENTS.BOTTOM_START,
  labelClose: "Close",
};

RtlReverse.argTypes = {
  placement: {
    options: Object.values(PLACEMENTS),
    control: {
      type: "select",
    },
  },
};

export const LazyContentSimlulated = args => {
  return <PopoverState {...args} />;
};

LazyContentSimlulated.story = {
  name: "LazyContent - simlulated",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

LazyContentSimlulated.args = {
  placement: PLACEMENTS.BOTTOM_START,
  labelClose: "Close",
};

LazyContentSimlulated.argTypes = {
  placement: {
    options: Object.values(PLACEMENTS),
    control: {
      type: "select",
    },
  },
};

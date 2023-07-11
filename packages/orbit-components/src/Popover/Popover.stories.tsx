import * as React from "react";
import styled, { css } from "styled-components";
import { withKnobs, text, select, boolean, object, number } from "@storybook/addon-knobs";
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
import Card from "../Card";
import Loading from "../Loading";

import Popover from ".";

const Content = styled.div`
  height: 2000px;
`;

const ScrolledPage = styled.div`
  height: 2000px;
  padding-top: 800px;
`;
const ScrollWrapper = styled.div`
  height: 50vh;
  overflow: scroll;
  background: gray;
`;

const selects = (
  <>
    <Stack align="center">
      <Stack spacing="none">
        <Text>Adult</Text>
        <Text type="secondary">11+</Text>
      </Stack>
      <Stepper minValue={0} />
    </Stack>
    <Stack align="center">
      <Stack spacing="none">
        <Text>Child</Text>
        <Text type="secondary">2-11</Text>
      </Stack>
      <Stepper minValue={0} />
    </Stack>
  </>
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

const PopoverState = () => {
  const [render, setRender] = React.useState(false);
  const placement = select("placement", Object.values(PLACEMENTS), PLACEMENTS.BOTTOM_START);
  const labelClose = text("labelClose", "Close");

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

export default {
  title: "Popover",
  decorators: [withKnobs],
};

export const Default = () => {
  const labelClose = text("labelClose", "Close");
  return (
    <Popover content={content} labelClose={labelClose}>
      <Button type="secondary" iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  );
};

export const withTooltip = () => {
  const labelClose = text("labelClose", "Close");
  return (
    <Popover content={<Tooltip content="Content">Tooltip</Tooltip>} labelClose={labelClose}>
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

export const Placement = () => {
  const placement = select("placement", Object.values(PLACEMENTS), PLACEMENTS.TOP_START);
  const labelClose = text("labelClose", "Close");

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

export const WithListChoice = () => {
  const width = text("width", "250px");
  const labelClose = text("labelClose", "Close");
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

export const OpenedByProp = () => {
  const opened = boolean("opened", false);
  const labelClose = text("labelClose", "Close");

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

export const Overlapped = () => {
  const overlapped = boolean("overlapped", true);
  const opened = boolean("opened", false);

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

export const ScrollingPage = () => {
  const labelClose = text("labelClose", "Close");
  return (
    <>
      <div
        css={css`
          position: sticky;
          top: 20px;
        `}
      >
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

export const ScrollingContent = () => {
  const labelClose = text("labelClose", "Close");
  return (
    <ScrollWrapper>
      <ScrolledPage>
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
      </ScrolledPage>
    </ScrollWrapper>
  );
};

ScrollingContent.story = {
  name: "Scrolling content",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Playground = () => {
  const renderTimeout = number("renderTimeout", 0);
  const zIndex = number("zIndex", 710);
  const dataTest = text("dataTest", "test");
  const placement = select("placement", Object.values(PLACEMENTS), PLACEMENTS.BOTTOM_START);
  const width = text("width", "350px");
  const maxHeight = text("maxHeight", "");
  const footerActions = boolean("footerActions", true);
  const noPadding = boolean("noPadding", false);
  const overlapped = boolean("overlapped", false);
  const opened = boolean("opened", true);
  const offset = object("offset", { top: 0, left: 0 });
  const noFlip = boolean("noFlip", false);
  const allowOverflow = boolean("allowOverflow", false);

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

export const Rtl = () => {
  const dataTest = text("dataTest", "test");
  const labelClose = text("labelClose", "Close");
  const placement = select("placement", Object.values(PLACEMENTS), PLACEMENTS.BOTTOM_START);

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

export const RtlReverse = () => {
  const placement = select("placement", Object.values(PLACEMENTS), PLACEMENTS.BOTTOM_START);
  const labelClose = text("labelClose", "Close");

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

export const LazyContentSimlulated = () => {
  return <PopoverState />;
};

LazyContentSimlulated.story = {
  name: "LazyContent - simlulated",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

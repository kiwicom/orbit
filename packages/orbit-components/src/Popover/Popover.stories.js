// @flow
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withKnobs, text, select, boolean, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { POSITIONS, ALIGNS } from "./consts";
import Stack from "../Stack";
import Button from "../Button";
import Stepper from "../Stepper";
import ListChoice from "../ListChoice";
import Text from "../Text";
import * as Icons from "../icons";
import ChevronDown from "../icons/ChevronDown";
import Sticky from "../Sticky";
import Card from "../Card";
import Loading from "../Loading";

import Popover from "./index";

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
  const [render, setRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!render) {
        setRender(true);
      }
    }, 2000);
  }, [render]);

  return (
    <Stack justify="start">
      <Popover
        preferredAlign="start"
        preferredPosition="bottom"
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
  return (
    <Popover content={content}>
      <Button type="secondary" iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  );
};

Default.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const PreferredAlign = () => {
  const preferredAlign = select("preferredAlign", Object.values(ALIGNS), ALIGNS.START);
  return (
    <Stack justify="center">
      <Popover content={content} preferredAlign={preferredAlign}>
        <Button type="secondary" iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
    </Stack>
  );
};

PreferredAlign.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const PreferredPosition = () => {
  const preferredPosition = select("preferredPosition", Object.values(POSITIONS), POSITIONS.TOP);
  return (
    <Popover
      noPadding
      content={
        <div>
          <ListChoice
            title="Choice Title"
            description="Further description"
            selectable
            icon={<Icons.Accommodation />}
            onClick={action("onClick")}
          />
        </div>
      }
      preferredPosition={preferredPosition}
    >
      <Button type="secondary" iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  );
};

PreferredPosition.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const WithListChoice = () => {
  const width = text("width", "250px");
  return (
    <Popover
      noPadding
      width={width}
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
      preferredPosition="top"
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const OpenedByProp = () => {
  const opened = boolean("opened", false);

  return (
    <Popover opened={opened} content={content} onOpen={action("open")} onClose={action("close")}>
      <Button type="secondary" iconRight={<ChevronDown />}>
        Open popover
      </Button>
    </Popover>
  );
};

OpenedByProp.story = {
  name: "Opened by prop",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const MultiplePopovers = () => {
  return (
    <Stack flex>
      <Popover
        content={content}
        actions={actions}
        onOpen={action("open")}
        onClose={action("close")}
        preferredAlign="center"
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const ScrollingPage = () => {
  return (
    <>
      <Sticky>
        <Card>
          <Popover fixed content={content} onOpen={action("open")} onClose={action("close")}>
            <Button type="secondary" iconRight={<ChevronDown />} fullWidth>
              Open popover
            </Button>
          </Popover>
        </Card>
      </Sticky>

      <Content />
    </>
  );
};

ScrollingPage.story = {
  name: "Scrolling page",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const ScrollingContent = () => {
  return (
    <ScrollWrapper>
      <ScrolledPage>
        <Card>
          <Popover content={content} onOpen={action("open")} onClose={action("close")}>
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Playground = () => {
  const dataTest = text("dataTest", "test");
  const preferredPosition = select("preferredPosition", Object.values(POSITIONS), POSITIONS.BOTTOM);
  const preferredAlign = select("preferredAlign", Object.values(ALIGNS), ALIGNS.START);
  const width = text("width", "350px");
  const noPadding = boolean("noPadding", false);
  const overlapped = boolean("overlapped", false);
  const opened = boolean("opened", false);
  const offset = object("offset", { top: 0, left: 0 });

  return (
    <Stack justify="center">
      <Popover
        width={width}
        dataTest={dataTest}
        offset={offset}
        content={content}
        preferredPosition={preferredPosition}
        preferredAlign={preferredAlign}
        noPadding={noPadding}
        opened={opened}
        actions={
          <Stack direction="row" justify="between">
            <Button type="secondary" size="small">
              Cancel
            </Button>
            <Button size="small">Done</Button>
          </Stack>
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = () => {
  const dataTest = text("dataTest", "test");
  const preferredPosition = select("preferredPosition", Object.values(POSITIONS), POSITIONS.BOTTOM);

  return (
    <RenderInRtl>
      <Stack flex>
        <Popover dataTest={dataTest} content={content} preferredPosition={preferredPosition}>
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RtlReverse = () => {
  const preferredPosition = select("preferredPosition", Object.values(POSITIONS), POSITIONS.BOTTOM);
  const preferredAlign = select("preferredAlign", Object.values(ALIGNS), ALIGNS.START);

  return (
    <RenderInRtl>
      <Stack justify="end">
        <Popover
          content={content}
          preferredPosition={preferredPosition}
          preferredAlign={preferredAlign}
        >
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const LazyContentSimlulated = () => {
  return <PopoverState />;
};

LazyContentSimlulated.story = {
  name: "LazyContent - simlulated",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

// @flow
import * as React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
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

storiesOf("Popover", module)
  .addDecorator(withKnobs)

  .add(
    "Default",
    () => {
      return (
        <Popover content={content}>
          <Button type="secondary" iconRight={<ChevronDown />}>
            Open popover
          </Button>
        </Popover>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Prefered Position",
    () => {
      const preferredPosition = select(
        "preferredPosition",
        Object.values(POSITIONS),
        POSITIONS.TOP,
      );
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
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "With ListChoice",
    () => {
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
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Opened by prop",
    () => {
      const opened = boolean("opened", false);

      return (
        <Popover
          opened={opened}
          content={content}
          onOpen={action("open")}
          onClose={action("close")}
        >
          <Button type="secondary" iconRight={<ChevronDown />}>
            Open popover
          </Button>
        </Popover>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Overlapped",
    () => {
      const overlapped = boolean("overlapped", true);

      return (
        <Popover
          overlapped={overlapped}
          content={content}
          actions={actions}
          onOpen={action("open")}
          onClose={action("close")}
        >
          <Button type="secondary" iconRight={<ChevronDown />}>
            Open popover
          </Button>
        </Popover>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Multiple Popovers",
    () => {
      return (
        <Stack flex>
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
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Long content",
    () => {
      return (
        <>
          <Popover content={longContent} onOpen={action("open")} onClose={action("close")}>
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
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Scrolling page",
    () => {
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
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Scrolling content",
    () => {
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
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const dataTest = text("dataTest", "test");
      const preferredPosition = select(
        "preferredPosition",
        Object.values(POSITIONS),
        POSITIONS.BOTTOM,
      );
      const preferredAlign = select("preferredAlign", Object.values(ALIGNS), ALIGNS.START);
      const width = text("width", "350px");
      const noPadding = boolean("noPadding", false);
      const overlapped = boolean("overlapped", false);

      return (
        <Popover
          width={width}
          dataTest={dataTest}
          content={content}
          preferredPosition={preferredPosition}
          preferredAlign={preferredAlign}
          noPadding={noPadding}
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
          <Button type="secondary" iconRight={<ChevronDown />}>
            Open popover
          </Button>
        </Popover>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL",
    () => {
      const dataTest = text("dataTest", "test");
      const preferredPosition = select(
        "preferredPosition",
        Object.values(POSITIONS),
        POSITIONS.BOTTOM,
      );

      return (
        <RenderInRtl>
          <Popover dataTest={dataTest} content={content} preferredPosition={preferredPosition}>
            <Button type="secondary" iconRight={<ChevronDown />}>
              Open popover
            </Button>
          </Popover>
        </RenderInRtl>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  );

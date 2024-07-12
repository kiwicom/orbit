import * as React from "react";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { TYPE_OPTIONS } from "./components/Tab/consts";

import Tabs, { TabList, TabPanel, Tab, TabPanels } from ".";

export const Default = () => {
  return (
    <Tabs onChange={action("onChange")}>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab type="basic">Tab 2</Tab>
        <Tab type="medium">Tab 3</Tab>
        <Tab type="top">Tab 4</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Tab 1 content</TabPanel>
        <TabPanel>Tab 2 content</TabPanel>
        <TabPanel>Tab 3 content</TabPanel>
        <TabPanel>Tab 4 content</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const FullWidth = ({ compact, fullWidth }) => {
  return (
    <Tabs onChange={action("onChange")}>
      <TabList fullWidth={fullWidth} compact={compact}>
        <Tab>Tab 1</Tab>
        <Tab type="basic">Tab 2</Tab>
        <Tab type="medium">Tab 3</Tab>
        <Tab type="top">Tab 4</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Tab 1 content</TabPanel>
        <TabPanel>Tab 2 content</TabPanel>
        <TabPanel>Tab 3 content</TabPanel>
        <TabPanel>Tab 4 content</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

FullWidth.args = {
  compact: false,
  fullWidth: true,
};

export const Compact = () => {
  return (
    <Tabs onChange={action("onChange")}>
      <TabList compact>
        <Tab>Tab 1</Tab>
        <Tab type="basic">Tab 2</Tab>
        <Tab type="medium">Tab 3</Tab>
        <Tab type="top">Tab 4</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Tab 1 content</TabPanel>
        <TabPanel>Tab 2 content</TabPanel>
        <TabPanel>Tab 3 content</TabPanel>
        <TabPanel>Tab 4 content</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const Controlled = () => {
  const [selected, setSelected] = React.useState(2);

  return (
    <Tabs>
      <TabList>
        <Tab onClick={() => setSelected(0)} active={selected === 0}>
          Tab 1
        </Tab>
        <Tab type="basic" onClick={() => setSelected(1)} active={selected === 1}>
          Tab 2
        </Tab>
        <Tab type="medium" onClick={() => setSelected(2)} active={selected === 2}>
          Tab 3
        </Tab>
        <Tab type="top" onClick={() => setSelected(3)} active={selected === 3}>
          Tab 4
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel active={selected === 0}>Tab 1 content</TabPanel>
        <TabPanel active={selected === 1}>Tab 2 content</TabPanel>
        <TabPanel active={selected === 2}>Tab 3 content</TabPanel>
        <TabPanel active={selected === 3}>Tab 4 content</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

Default.story = {
  name: "Default",
};

export default {
  title: "Tabs",
};

export const Playground = ({
  type,
  compact,
  disabled,
  defaultSelected,
  firstTabLabel,
  secondTabLabel,
  firstTabContent,
  secondTabContent,
  fullWidth,
}) => {
  return (
    <Tabs onChange={action("onChange")} defaultSelected={defaultSelected}>
      <TabList compact={compact} fullWidth={fullWidth}>
        <Tab disabled={disabled}>{firstTabLabel}</Tab>
        <Tab type={type}>{secondTabLabel}</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>{firstTabContent}</TabPanel>
        <TabPanel>{secondTabContent}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

Playground.args = {
  type: TYPE_OPTIONS.DEFAULT,
  compact: false,
  disabled: false,
  defaultSelected: 0,
  firstTabLabel: "Tab 1",
  secondTabLabel: "Tab 2",
  firstTabContent: "Tab 1",
  secondTabContent: "Tab 2",
  fullWidth: false,
};

Playground.argTypes = {
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const RTL = () => {
  return (
    <RenderInRtl>
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab type="basic">Tab 2</Tab>
          <Tab type="medium">Tab 3</Tab>
          <Tab type="top">Tab 4</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab 1 content</TabPanel>
          <TabPanel>Tab 2 content</TabPanel>
          <TabPanel>Tab 3 content</TabPanel>
          <TabPanel>Tab 4 content</TabPanel>
        </TabPanels>
      </Tabs>
    </RenderInRtl>
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

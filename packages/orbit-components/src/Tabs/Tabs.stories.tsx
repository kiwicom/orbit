import * as React from "react";
import { select, text, boolean } from "@storybook/addon-knobs";
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

Default.story = {
  name: "Default",
};

export default {
  title: "Tabs",
};

export const Playground = () => {
  const type = select("type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.DEFAULT);
  const compact = boolean("compact", false);
  const firstTabLabel = text("first tab label", "Tab 1");
  const secondTabLabel = text("second tab label", "Tab 2");
  const firstTabContent = text("first tab content", "Tab 1");
  const secondTabContent = text("second tab content", "Tab 2");

  return (
    <Tabs onChange={action("onChange")}>
      <TabList>
        <Tab>{firstTabLabel}</Tab>
        <Tab type={type} compact={compact}>
          {secondTabLabel}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>{firstTabContent}</TabPanel>
        <TabPanel>{secondTabContent}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const RTL = () => {
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
  </RenderInRtl>;
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

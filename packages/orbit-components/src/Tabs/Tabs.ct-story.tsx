import * as React from "react";

import type { Props as TabProps } from "./components/Tab/types";
import type { Props as TabListProps } from "./components/TabList/types";

import Tabs, { TabList, Tab, TabPanels, TabPanel } from ".";

export function TabsComponentStory({ compact, fullWidth }: Partial<TabListProps>) {
  return (
    <Tabs>
      <TabList compact={compact} fullWidth={fullWidth}>
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
}

export function TabStory({ type }: { type: TabProps["type"] }) {
  return <Tab type={type}>{type}</Tab>;
}

export function TabDisabledStory() {
  return <Tab disabled>Disabled</Tab>;
}

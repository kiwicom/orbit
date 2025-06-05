import React from "react";
import { Tabs, Tab, TabPanel, TabPanels, TabList } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
  ),
  exampleKnobs: [
    {
      component: "Tab",
      knobs: [
        {
          name: "type",
          type: "select",
          defaultValue: "default",
          options: ["default", "basic", "medium", "top"],
        },
        {
          name: "disabled",
          type: "boolean",
          defaultValue: false,
        },
      ],
    },
    {
      component: "TabList",
      knobs: [
        {
          name: "compact",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "fullWidth",
          type: "boolean",
          defaultValue: false,
        },
      ],
    },
  ],
};

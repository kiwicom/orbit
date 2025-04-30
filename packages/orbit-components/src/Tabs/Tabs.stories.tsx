import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Box from "../Box";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS } from "../utils/layout/consts";
import { TYPE_OPTIONS } from "./components/Tab/consts";

import Tabs, { TabList, TabPanel, Tab, TabPanels } from ".";

/* In the Playground story, we grouped the args of multiple components.
These components include props with the same name, so we must create custom
props to distinguish them. */
interface CustomProps {
  marginTabList: string;
  paddingTabList: string;
  marginTabPanel: string;
  paddingTabPanel: string;
  tabChildrenFirst: string;
  tabChildrenSecond: string;
  disabledFirstTab: boolean;
  disabledSecondTab: boolean;
  typeFirstTab: TYPE_OPTIONS;
  typeSecondTab: TYPE_OPTIONS;
  tabPanelChildrenFirst: string;
  tabPanelChildrenSecond: string;
  spacingTabList: SPACINGS;
  ariaLabelTabList: string;
}

type TabsPropsAndCustomArgs = React.ComponentProps<typeof Tabs> &
  React.ComponentProps<typeof Tab> &
  React.ComponentProps<typeof TabList> &
  React.ComponentProps<typeof TabPanel> &
  CustomProps;

const meta: Meta<TabsPropsAndCustomArgs> = {
  title: "Tabs",
  component: Tabs,

  args: {
    onChange: action("onChange"),
  },

  parameters: {
    info: "Tabs component stories. Check Orbit.kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onChange"],
    },
  },
};

export default meta;

type Story = StoryObj<TabsPropsAndCustomArgs>;

export const Default: Story = {
  render: () => (
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

  parameters: {
    info: "This is the default setup of Tabs component. Check Orbit.kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = React.useState(2);

    return (
      <Tabs>
        <TabList ariaLabel="Controlled tabs example">
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
  },

  parameters: {
    info: "Example of controlled version of Tabs component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const Playground: Story = {
  render: ({
    spacing,
    defaultSelected,
    disabledFirstTab,
    disabledSecondTab,
    typeFirstTab,
    typeSecondTab,
    marginTabList,
    paddingTabList,
    spacingTabList,
    marginTabPanel,
    paddingTabPanel,
    tabChildrenFirst,
    tabChildrenSecond,
    tabPanelChildrenFirst,
    tabPanelChildrenSecond,
    ariaLabelTabList,
    ...args
  }) => (
    <Box background="cloudLight">
      <Tabs defaultSelected={defaultSelected} spacing={spacing}>
        <TabList
          spacing={spacingTabList}
          margin={marginTabList}
          padding={paddingTabList}
          ariaLabel={ariaLabelTabList}
          {...args}
        >
          <Tab type={typeFirstTab} disabled={disabledFirstTab}>
            {tabChildrenFirst}
          </Tab>
          <Tab type={typeSecondTab} disabled={disabledSecondTab}>
            {tabChildrenSecond}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel margin={marginTabPanel} padding={paddingTabPanel}>
            {tabPanelChildrenFirst}
          </TabPanel>
          <TabPanel margin={marginTabPanel} padding={paddingTabPanel}>
            {tabPanelChildrenSecond}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  ),

  args: {
    spacing: SPACINGS.THREE_HUNDRED,
    defaultSelected: 1,
    tabChildrenFirst: "Tab 1",
    tabChildrenSecond: "Tab 2",
    disabledFirstTab: false,
    disabledSecondTab: false,
    typeFirstTab: TYPE_OPTIONS.DEFAULT,
    typeSecondTab: TYPE_OPTIONS.MEDIUM,
    marginTabList: "10px",
    paddingTabList: "20px",
    spacingTabList: SPACINGS.NONE,
    compact: false,
    fullWidth: false,
    tabPanelChildrenFirst: "Tab content 1",
    tabPanelChildrenSecond: "Tab content 2",
    marginTabPanel: "10px",
    paddingTabPanel: "20px",
    ariaLabelTabList: "Playground tabs example",
  },

  argTypes: {
    // Tabs category
    spacing: {
      options: Object.values(SPACINGS),
      control: { type: "select" },
      table: { category: "Tabs" },
    },
    defaultSelected: { control: { type: "number", min: 0, max: 1 }, table: { category: "Tabs" } },
    // Tab category
    tabChildrenFirst: { name: "children (first Tab)", table: { category: "Tab" } },
    tabChildrenSecond: { name: "children (second Tab)", table: { category: "Tab" } },
    disabledFirstTab: { table: { category: "Tab" } },
    disabledSecondTab: { table: { category: "Tab" } },
    typeFirstTab: {
      options: Object.values(TYPE_OPTIONS),
      control: {
        type: "select",
      },
      table: { category: "Tab" },
    },
    typeSecondTab: {
      options: Object.values(TYPE_OPTIONS),
      control: {
        type: "select",
      },
      table: { category: "Tab" },
    },
    // TabList category
    compact: { table: { category: "TabList" } },
    fullWidth: { table: { category: "TabList" } },
    marginTabList: { name: "margin", table: { category: "TabList" } },
    paddingTabList: { name: "padding", table: { category: "TabList" } },
    ariaLabelTabList: { name: "ariaLabel", table: { category: "TabList" } },
    spacingTabList: {
      name: "spacing",
      options: Object.values(SPACINGS),
      control: { type: "select" },
      table: { category: "TabList" },
    },
    // TabPanel category
    marginTabPanel: { name: "margin", table: { category: "TabPanel" } },
    paddingTabPanel: { name: "padding", table: { category: "TabPanel" } },
    tabPanelChildrenFirst: { name: "children (first TabPanel)", table: { category: "TabPanel" } },
    tabPanelChildrenSecond: { name: "children (second TabPanel)", table: { category: "TabPanel" } },
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RTL: Story = {
  render: () => (
    <RenderInRtl>
      <Tabs>
        <TabList ariaLabel="RTL tabs example">
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
  ),

  parameters: {
    info: "This is a preview of Tabs component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};

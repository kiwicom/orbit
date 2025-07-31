"use client";

import * as React from "react";

import Stack from "../Stack";
import TabProvider from "./TabContext";
import Tab from "./components/Tab";
import TabPanel from "./components/TabPanel";
import TabPanels from "./components/TabPanels";
import TabList from "./components/TabList";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Tabs
 *
 * To use the Tabs component, you will need to import it from the @kiwicom/orbit-components package:
 *
 * ```jsx
 * import Tabs, { Tab, TabList, TabPanels, TabPanel } from "@kiwicom/orbit-components/lib/Tabs";
 * ```
 *
 * Once you have imported the Tabs component, you can use it in your React application:
 *
 * ```jsx
 * <Tabs>
 *   <TabList>
 *     <Tab>Tab 1</Tab>
 *     <Tab type="basic">Tab 2</Tab>
 *     <Tab type="medium">Tab 3</Tab>
 *     <Tab type="top">Tab 4</Tab>
 *   </TabList>
 *   <TabPanels>
 *     <TabPanel>Tab 1 content</TabPanel>
 *     <TabPanel>Tab 2 content</TabPanel>
 *     <TabPanel>Tab 3 content</TabPanel>
 *     <TabPanel>Tab 4 content</TabPanel>
 *   </TabPanels>
 * </Tabs>
 * ```
 *
 * ### Tabs
 *
 * ## Props
 *
 * Table below contains all types of the props available in Tabs component.
 *
 * | Name            | Type                                               | Default | Description                                                                                                   |
 * | :-------------- | :------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------ |
 * | dataTest        | `string`                                           |         | Optional prop for testing purposes.                                                                           |
 * | defaultSelected | `number`                                           | `0`     | Optional prop to set the initial active tab index. Use only if you do not want to control state on your side. |
 * | children        | `React.node`                                       |         | Required prop that should contain the `TabList`, `TabPanels` components.                                      |
 * | onChange        | `(selectedIndex: number) => void \| Promise<void>` |         | Function for handling onChange. Use only if you do not want to control state on your side.                    |
 *
 * ### TabList
 *
 * Table below contains all types of the props available in TabList component.
 *
 * | Name           | Type                         | Default | Description                                                                          |
 * | :------------- | :--------------------------- | :------ | :----------------------------------------------------------------------------------- |
 * | dataTest       | `string`                     |         | Optional prop for testing purposes.                                                  |
 * | children       | `React.node`                 |         | Required prop that should contain the `Tab` components.                              |
 * | compact        | `boolean`                    | `false` | Optional prop that responsible for `Tab`size, if provided, the Tabs will be smaller. |
 * | spacing        | [`enum`](#enum)              | `none`  | Optional prop to set gap between `Tab` elements.                                     |
 * | fullWidth      | `boolean`                    | `false` | Optional prop to set `TabList` to full width.                                        |
 * | margin         | `string \| number \| Object` | `"0"`   | Utility property to set margin.                                                      |
 * | padding        | `string \| number \| Object` | `"0"`   | Utility property to set padding.                                                     |
 * | ariaLabel      | `string`                     |         | Optional prop for `aria-label`.                                                      |
 * | ariaLabelledby | `string`                     |         | Optional prop for `aria-labelledby`.                                                 |
 *
 * ### Tab
 *
 * Table below contains all types of the props available in Tab component.
 *
 * You can choose how you would like to use the component. By default it's using inner state to set active state on `Tab`. If you
 * would like to control that behavior, you will need to provide `active` and `onClick` properties and handle the change on your side.
 *
 * | Name     | Type                             | Default   | Description                                                  |
 * | :------- | :------------------------------- | :-------- | :----------------------------------------------------------- |
 * | dataTest | `string`                         |           | Optional prop for testing purposes.                          |
 * | disabled | `boolean`                        |           | Optional prop to set disabled state.                         |
 * | children | `React.node`                     |           | Required prop that should contain the `Tab` content.         |
 * | type     | [`enum`](#enum)                  | `default` | Optional prop that responsible for Tab style.                |
 * | active   | `boolean`                        | `false`   | Optional prop to have controlled behavior over active state. |
 * | onClick  | `event => void \| Promise<void>` |           | Function for handling onClick event.                         |
 *
 * ### TabPanels
 *
 * Table below contains all types of the props available in TabPanel component.
 *
 * | Name     | Type         | Default | Description                                                  |
 * | :------- | :----------- | :------ | :----------------------------------------------------------- |
 * | dataTest | `string`     |         | Optional prop for testing purposes.                          |
 * | children | `React.node` |         | Required prop that should contain the `TabPanel` components. |
 *
 * ### TabPanel
 *
 * Table below contains all types of the props available in TabPanel component.
 *
 * | Name     | Type                         | Default | Description                                                  |
 * | :------- | :--------------------------- | :------ | :----------------------------------------------------------- |
 * | dataTest | `string`                     |         | Optional prop for testing purposes.                          |
 * | children | `React.node`                 |         | Required prop that should contain the `TabPanel` content.    |
 * | margin   | `string \| number \| Object` | `"0"`   | Utility property to set margin.                              |
 * | padding  | `string \| number \| Object` | `"0"`   | Utility property to set padding.                             |
 * | active   | `boolean`                    | `false` | Optional prop to have controlled behavior over active state. |
 *
 * ### enum
 *
 * #### enum
 *
 * | type      | spacing |
 * | :-------- | ------- |
 * | `default` | `none`  |
 * | `basic`   | `50`    |
 * | `medium`  | `100`   |
 * | `top`     | `150`   |
 * |           | `200`   |
 * |           | `300`   |
 * |           | `400`   |
 * |           | `500`   |
 * |           | `600`   |
 * |           | `800`   |
 * |           | `1000`  |
 * |           | `1200`  |
 * |           | `1600`  |
 *
 *
 * Accessibility
 * -------------
 * # Accessibility
 *
 * ## Tabs
 *
 * The Tabs component has been designed with accessibility in mind.
 *
 * ### Accessibility props
 *
 * The following props are available to improve the accessibility of your Tabs component:
 *
 * #### TabList
 *
 * | Prop           | Type     | Description                                                    |
 * | :------------- | :------- | :------------------------------------------------------------- |
 * | ariaLabel      | `string` | Allows you to provide an accessible label for the set of tabs. |
 * | ariaLabelledby | `string` | References the ID of an element that labels the set of tabs.   |
 *
 * The `ariaLabel` prop should ideally be translated and descriptive of the purpose of the tab set. It should clearly communicate the type of content users will find within the tabs.
 *
 * The `ariaLabelledby` prop is used when you already have a visible heading that describes the tab set, allowing you to reuse that text for screen readers.
 *
 * #### Tab
 *
 * | Prop     | Type      | Description                                                        |
 * | :------- | :-------- | :----------------------------------------------------------------- |
 * | disabled | `boolean` | Indicates that the tab is not interactive and cannot be activated. |
 *
 * ### Accessibility implementation
 *
 * The Tabs component automatically implements proper accessibility features including:
 *
 * - Correct ARIA roles: `tablist` for the TabList, `tab` for individual tabs, and `tabpanel` for tab panels
 * - Appropriate ARIA states and relationships:
 * - `aria-selected`: Indicates which tab is currently active
 * - `aria-disabled`: Applied to tabs that cannot be activated
 * - `aria-controls`: Applied to each tab to reference its associated panel
 * - `aria-labelledby`: Applied to each panel to reference its associated tab (this is different from the `ariaLabelledby` prop on TabList)
 *
 * ### Keyboard navigation
 *
 * The Tabs component supports keyboard navigation for accessibility:
 *
 * - **Tab**: Moves focus to the active tab panel
 * - **Arrow Right**: Moves focus to the next tab in the list. When focus is on the last tab, it wraps to the first tab
 * - **Arrow Left**: Moves focus to the previous tab in the list. When focus is on the first tab, it wraps to the last tab
 * - **Home**: Moves focus to the first tab in the list
 * - **End**: Moves focus to the last tab in the list
 *
 * All keyboard interactions consider the presence of disabled tabs, automatically skipping them when navigating.
 *
 * ### Best practices
 *
 * - Use the `ariaLabel` or `ariaLabelledby` props on the `TabList` component to provide a descriptive label for the set of tabs, especially when there are multiple tab sets on a page.
 * - Ensure that tab labels are clear and descriptive of the content they control.
 * - When a tab is disabled, use the `disabled` prop to properly communicate this state to assistive technologies.
 * - Always translate accessibility-related strings to match the user's language.
 *
 * ### Code examples
 *
 * #### Using ariaLabel
 *
 * ```jsx
 * <Tabs>
 *   <TabList ariaLabel="Content sections">
 *     <Tab>Section 1</Tab>
 *     <Tab>Section 2</Tab>
 *     <Tab disabled>Section 3</Tab>
 *   </TabList>
 *   <TabPanels>
 *     <TabPanel>Content for section 1</TabPanel>
 *     <TabPanel>Content for section 2</TabPanel>
 *     <TabPanel>Content for section 3</TabPanel>
 *   </TabPanels>
 * </Tabs>
 * ```
 *
 * In this example, screen readers would announce "Content sections, tab group" when focusing on the tab list.
 *
 * #### Using ariaLabelledby
 *
 * ```jsx
 * <div>
 *   <h2 id="tabs-title">Flight Options</h2>
 *   <Tabs>
 *     <TabList ariaLabelledby="tabs-title">
 *       <Tab>Economy</Tab>
 *       <Tab>Business</Tab>
 *       <Tab>First Class</Tab>
 *     </TabList>
 *     <TabPanels>
 *       <TabPanel>Economy class options</TabPanel>
 *       <TabPanel>Business class options</TabPanel>
 *       <TabPanel>First class options</TabPanel>
 *     </TabPanels>
 *   </Tabs>
 * </div>
 * ```
 *
 * In this example, screen readers would announce "Flight Options, tab group" when focusing on the tab list.
 *
 *
 * @orbit-doc-end
 */
const Tabs = ({ children, spacing, dataTest, defaultSelected, onChange }: Props) => {
  return (
    <TabProvider defaultSelected={defaultSelected} onChange={onChange}>
      <Stack dataTest={dataTest} direction="column" spacing={spacing}>
        {children}
      </Stack>
    </TabProvider>
  );
};

export default Tabs;
export { Tab, TabPanel, TabPanels, TabList };

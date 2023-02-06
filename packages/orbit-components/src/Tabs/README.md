# Tabs

To use the Tabs component, you will need to import it from the @kiwicom/orbit-components package:

```jsx
import Tabs, { Tab, TabList, TabPanels, TabPanel } from "@kiwicom/orbit-components/lib/Tabs";
```

Once you have imported the Tabs component, you can use it in your React application:

```jsx
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
```

### Tabs

## Props

Table below contains all types of the props available in Tabs component.

| Name            | Type         | Default | Description                                                              |
| :-------------- | :----------- | :------ | :----------------------------------------------------------------------- |
| dataTest        | `string`     |         | Optional prop for testing purposes.                                      |
| defaultSelected | `number`     | `0`     | Optional prop to set the initial active tab index.                       |
| children        | `React.node` |         | Required prop that should contain the `TabList`, `TabPanels` components. |

### TabList

Table below contains all types of the props available in TabList component.

| Name     | Type         | Default | Description                                                                          |
| :------- | :----------- | :------ | :----------------------------------------------------------------------------------- |
| dataTest | `string`     |         | Optional prop for testing purposes.                                                  |
| children | `React.node` |         | Required prop that should contain the `Tab` components.                              |
| compact  | `boolean`    | `false` | Optional prop that responsible for `Tab`size, if provided, the Tabs will be smaller. |

### Tab

Table below contains all types of the props available in Tab component.

| Name     | Type            | Default   | Description                                          |
| :------- | :-------------- | :-------- | :--------------------------------------------------- |
| dataTest | `string`        |           | Optional prop for testing purposes.                  |
| children | `React.node`    |           | Required prop that should contain the `Tab` content. |
| type     | [`enum`](#enum) | `default` | Optional prop that responsible for Tab style.        |

### TabPanels

Table below contains all types of the props available in TabPanel component.

| Name     | Type         | Default | Description                                                  |
| :------- | :----------- | :------ | :----------------------------------------------------------- |
| dataTest | `string`     |         | Optional prop for testing purposes.                          |
| children | `React.node` |         | Required prop that should contain the `TabPanel` components. |

### TabPanel

Table below contains all types of the props available in TabPanel component.

| Name     | Type                         | Default | Description                                               |
| :------- | :--------------------------- | :------ | :-------------------------------------------------------- |
| dataTest | `string`                     |         | Optional prop for testing purposes.                       |
| children | `React.node`                 |         | Required prop that should contain the `TabPanel` content. |
| margin   | `string \| number \| Object` | `"0"`   | Utility property to set margin.                           |
| padding  | `string \| number \| Object` | `"0"`   | Utility property to set padding.                          |

### enum

#### enum

| type      |
| :-------- |
| `default` |
| `basic`   |
| `medium`  |
| `top`     |

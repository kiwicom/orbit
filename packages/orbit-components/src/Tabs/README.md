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

| Name            | Type                             | Default | Description                                                                                                  |
| :-------------- | :------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------- |
| dataTest        | `string`                         |         | Optional prop for testing purposes.                                                                          |
| defaultSelected | `number`                         | `0`     | Optional prop to set the initial active tab index. Use only if you do not want to control state on your side |
| children        | `React.node`                     |         | Required prop that should contain the `TabList`, `TabPanels` components.                                     |
| onChange        | `(selectedIndex: number) => void \| Promise<void>` |         | Function for handling onChange. Use only if you do not want to control state on your side.                   |

### TabList

Table below contains all types of the props available in TabList component.

| Name     | Type            | Default | Description                                                                          |
| :------- | :-------------- | :------ | :----------------------------------------------------------------------------------- |
| dataTest | `string`        |         | Optional prop for testing purposes.                                                  |
| children | `React.node`    |         | Required prop that should contain the `Tab` components.                              |
| compact  | `boolean`       | `false` | Optional prop that responsible for `Tab`size, if provided, the Tabs will be smaller. |
| spacing  | [`enum`](#enum) | `none`  | Optional prop to set gap between `Tab` elements                                      |

### Tab

Table below contains all types of the props available in Tab component.

You can choose how you would like to use the component. By default it's using inner state to set active state on `Tab`. If you
would like to control that behavior, you will need to provide `active` and `onClick` properties and handle the change on your side.

| Name     | Type                             | Default   | Description                                                  |
| :------- | :------------------------------- | :-------- | :----------------------------------------------------------- |
| dataTest | `string`                         |           | Optional prop for testing purposes.                          |
| disabled | `boolean`                        |           | Optional prop to set disabled state.                         |
| children | `React.node`                     |           | Required prop that should contain the `Tab` content.         |
| type     | [`enum`](#enum)                  | `default` | Optional prop that responsible for Tab style.                |
| active   | `boolean`                        | `false`   | Optional prop to have controlled behavior over active state. |
| onClick  | `event => void \| Promise<void>` |           | Function for handling onClick event.                         |

### TabPanels

Table below contains all types of the props available in TabPanel component.

| Name     | Type         | Default | Description                                                  |
| :------- | :----------- | :------ | :----------------------------------------------------------- |
| dataTest | `string`     |         | Optional prop for testing purposes.                          |
| children | `React.node` |         | Required prop that should contain the `TabPanel` components. |

### TabPanel

Table below contains all types of the props available in TabPanel component.

| Name     | Type                         | Default | Description                                                  |
| :------- | :--------------------------- | :------ | :----------------------------------------------------------- |
| dataTest | `string`                     |         | Optional prop for testing purposes.                          |
| children | `React.node`                 |         | Required prop that should contain the `TabPanel` content.    |
| margin   | `string \| number \| Object` | `"0"`   | Utility property to set margin.                              |
| padding  | `string \| number \| Object` | `"0"`   | Utility property to set padding.                             |
| active   | `boolean`                    | `false` | Optional prop to have controlled behavior over active state. |

### enum

#### enum

| type      | spacing    |
| :-------- | ---------- |
| `default` | `none`     |
| `basic`   | `XXXSmall` |
| `medium`  | `XXSmall`  |
| `top`     | `XSmall`   |
|           | `small`    |
|           | `medium`   |
|           | `large`    |
|           | `XLarge`   |
|           | `XXLarge`  |

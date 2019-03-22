# List
To implement List component into your project you'll need to add the import:
```jsx
import List, { ListItem } from "@kiwicom/orbit-components/lib/List";
```
After adding import into your project you can use it simply like:
```jsx
<List>
  <ListItem>Hello world!</ListItem>
</List>
```
## Props
Table below contains all types of the props available in List component.

| Name          | Type               | Default     | Description                      |
| :------------ | :----------------- | :---------- | :------------------------------- |
| **children**  | `React.Node`       |             | The content of the List, normally [`ListItem`](#listitem-props).
| dataTest      | `string`           |             | Optional prop for testing purposes.
| size          | [`enum`](#enum)    | `"normal"`  | The size of the List.
| spaceAfter    | `enum`             |             | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken)
| type          | [`enum`](#enum)    | `"primary"` | The color type of the List.

### ListItem Props
Table below contains all types of the props in ListItem component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| **children**  | `React.Node`          |                 | The content of the ListItem.
| dataTest      | `string`              |                 | Optional prop for testing purposes.
| icon          | `React.Node`          | `"CircleSmall"` | The displayed Icon or CarrierLogo component. [See Functional specs](#functional-specs)

#### Functional specs
* You can color your icon if you pass some value into `color` or `customColor` prop of the [Icon](./Icon). Be aware of using other components, because they are not styled by default.


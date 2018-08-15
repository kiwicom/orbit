# List
To implement List component into your project you'll need to add the import:
```jsx
import List from "@kiwicom/orbit-components/lib/List";
import ListItem from "@kiwicom/orbit-components/lib/List/ListItem";
```
After adding import into your project you can use it simply like:
```jsx
<List>
  <ListItem>Hello world!</ListItem>
</List>
```
## Props
Table below contains all types of the props available in List component.

| Name         | Type               | Default     | Description                      |
| :-------     | :----------------- | :---------- | :------------------------------- |
| children     | `Array<ListItem>`  |             | The content of the List.
| size         | [`enum`](#enum)    | `"normal"`  | The size of the List.
| type         | [`enum`](#enum)    | `"primary"` | The color type of the List.

### ListItem Props
Table below contains all types of the props in ListItem component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| **children**  | `React.Node`          |                 | The content of the ListItem.
| icon          | `React.Node`          | `"CircleSmall"` | The displayed Icon or CarrierLogo component. [See Functional specs](#functional-specs)

#### Functional specs
* You can color your icon if you pass some value into `color` or `customColor` prop of the [Icon](./Icon). Be aware of using other components, because they are not styled by default.


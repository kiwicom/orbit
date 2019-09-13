# Drawer
To implement Drawer component into your project you'll need to add the import:
```jsx
import Drawer from "@kiwicom/orbit-components/lib/Drawer";
```
After adding import into your project you can use it simply like:
```jsx
<Drawer shown>
  Content to show
</NavigationList>
```
## Props
Table below contains all types of the props available in the Drawer component.

| Name          | Type                              | Default         | Description                      |
| :------------ | :-------------------------------- | :-------------- | :------------------------------- |
| **children**  | `React.Node`                      |                 | The content of the Drawer.
| dataTest      | `string`                          |                 | Optional prop for testing purposes.
| type          | [`enum`](#enum)                   | `"navigation"`  | The type of the Drawer.
| onClose       | `() => void \| Promise`           |                 | Function for handling onClose event.
| shown         | `boolean`                         | `"true"`        | If `true` the Drawer will be visible, otherwise visually hidden, but it will stay in the DOM.
| width         | `string`                          | `"320px"`       | The width of the Drawer.
| position      | [`enum`](#enum)                   | `"right"`       | The position on which side the Drawer should appear.

### enum

| type            | size       |
| :-------------- | :--------- |
| `"navigation"`  | `"right"`  |
| `"box"`         | `"left"`   |


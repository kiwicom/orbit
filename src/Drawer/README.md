# Drawer
To implement Drawer component into your project you'll need to add the import:
```jsx
import Drawer from "@kiwicom/orbit-components/lib/Drawer";
```
After adding import into your project you can use it simply like:
```jsx
<Drawer shown>
  Content to show
</Drawer>
```
## Props
Table below contains all types of the props available in the Drawer component.

| Name          | Type                              | Default         | Description                      |
| :------------ | :-------------------------------- | :-------------- | :------------------------------- |
| actions       | `React.Node`                      |                 | Actions - especially Buttons, that will be rendered on in the Drawer's header.
| **children**  | `React.Node`                      |                 | The content of the Drawer.
| dataTest      | `string`                          |                 | Optional prop for testing purposes.
| noPadding     | `boolean`                         | `false`         | If `true` the wrapper won't have any inner padding.
| onClose       | `() => void \| Promise`           |                 | Function for handling onClose event.
| position      | [`enum`](#enum)                   | `"right"`       | The position on which side the Drawer should appear.
| shown         | `boolean`                         | `"true"`        | If `true` the Drawer will be visible, otherwise visually hidden, but it will stay in the DOM.
| suppressed    | `boolean`                         | `false`         | If `true`, the Drawer will have cloudy background.
| title         | `Translation`                     |                 | Title of the Drawer that will be rendered in the Drawer's header.
| width         | `string`                          | `"320px"`       | The width of the Drawer.

### enum

| position   |
| :--------- |
| `"right"`  |
| `"left"`   |


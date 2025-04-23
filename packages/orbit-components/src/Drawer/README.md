# Drawer

To implement Drawer component into your project you'll need to add the import:

```jsx
import Drawer from "@kiwicom/orbit-components/lib/Drawer";
```

After adding import into your project you can use it simply like:

```jsx
<Drawer shown>Content to show</Drawer>
```

## Props

Table below contains all types of the props available in the Drawer component.

| Name          | Type                    | Default   | Description                                                                                                                           |
| :------------ | :---------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| actions       | `React.Node`            |           | Actions, especially Buttons, that will be rendered in the Drawer's header.                                                            |
| **children**  | `React.Node`            |           | The content of the Drawer.                                                                                                            |
| dataTest      | `string`                |           | Optional prop for testing purposes.                                                                                                   |
| id            | `string`                |           | Sets the `id` attribute for the `Drawer`.                                                                                             |
| noPadding     | `boolean`               | `false`   | If `true`, the wrapper won't have any inner padding.                                                                                  |
| onClose       | `() => void \| Promise` |           | Function for handling the onClose event.                                                                                              |
| position      | [`enum`](#enum)         | `"right"` | The side on which the Drawer should appear.                                                                                           |
| shown         | `boolean`               | `"true"`  | If `true`, the Drawer will be visible; otherwise, it will be visually hidden but will stay in the DOM.                                |
| suppressed    | `boolean`               | `false`   | If `true`, the Drawer will have a cloudy background.                                                                                  |
| title         | `string`                |           | Title of the Drawer that will be rendered in the Drawer's header. If `ariaLabel` is undefined, this will be used as `aria-label`.     |
| width         | `string`                | `"320px"` | The width of the Drawer.                                                                                                              |
| lockScrolling | `boolean`               | `true`    | Whether to prevent scrolling of the rest of the page while Drawer is open. This is on by default to provide a better user experience. |
| fixedHeader   | `boolean`               |           | If `true`, the DrawerHeader will be fixed to the top.                                                                                 |
| labelHide     | `string`                | `Hide`    | Label for the close button.                                                                                                           |
| ariaLabel     | `string`                |           | Optional prop for `aria-label`.                                                                                                       |

### enum

| position  |
| :-------- |
| `"right"` |
| `"left"`  |

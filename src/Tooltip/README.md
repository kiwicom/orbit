# Tooltip
To implement Tooltip component into your project you'll need to add the import:
```jsx
import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";
```
After adding import into your project you can use it simply like:
```jsx
<Tooltip content="Your content">
  <Airplane />
</Tooltip>
```

## Props
Table below contains all types of the props available in the Tooltip component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :-------------------- | :-------------- | :------------------------------- |
| block         | `boolean`             |                 | If `true` the children's wrapper will have `display: block` and `width: 100%`.
| dataTest      | `string`              |                 | Optional prop for testing purposes.
| **children**  | `React.Node`          |                 | The reference element where the Tooltip will appear.
| **content**   | `React.Node`          |                 | The content to display in the Tooltip.
| size          | [`enum`](#enum)       |                 | The maximum possible size of the Tooltip.
| closeText     | `string`              |                 | The test of the close button to display on mobile devices.

## Functional specs
* The Tooltip's position and arrow alignment is automatically calculated whenever event `onMouseEnter`, `onFocus` or `onClick` fires.

* For mobile devices, the user needs to click on the children to open the Tooltip.

* For ensuring that Tooltip component will work properly, add `div` with `id` set to `tooltips`. If not, the Tooltip will be rendered into the end of your DOM.


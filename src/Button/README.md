# Button

To implement Button component into your project you'll need to add the import:

```jsx
import Button from "@kiwicom/orbit-components/lib/Button";
```

After adding import into your project you can use it simply like:

```jsx
<Button>Hello World!</Button>
```

## Props

Table below contains all types of the props available in Button component.

| Name         | Type                       | Default     | Description                                                                                                                                     |
| :----------- | :------------------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| ariaControls | `string`                   |             | Id of the element the button controls.                                                                                                          |
| ariaExpanded | `boolean`                  |             | Tells screen reader the controlled element from `ariaControls` is expanded                                                                      |
| asComponent  | `() => React.Element`      | `"button"`  | The component used for the root node.                                                                                                           |
| block        | `boolean`                  | `false`     | If `true`, the Button will grow up to the full width of its container.                                                                          |
| bordered     | `boolean`                  | `false`     | If `true`, the Button will have a lighter version, with border and light background.                                                            |
| circled      | `boolean`                  | `false`     | If `true`, the Button will have circular shape.                                                                                                 |
| children     | `React.Node`               |             | The content of the Button.                                                                                                                      |
| dataTest     | `string`                   |             | Optional prop for testing purposes.                                                                                                             |
| disabled     | `boolean`                  | `false`     | If `true`, the Button will be disabled.                                                                                                         |
| external     | `boolean`                  | `false`     | If `true`, the Button opens link in a new tab.                                                                                                  |
| href         | `string`                   |             | The URL of the link to open when Button is clicked.                                                                                             |
| icon         | `React.Node`               |             | The displayed icon (will be removed in the future, use iconLeft instead).                                                                       |
| iconLeft     | `React.Node`               |             | The displayed icon on the left.                                                                                                                 |
| iconRight    | `React.Node`               |             | The displayed icon on the right.                                                                                                                |
| loading      | `boolean`                  | `false`     | If `true`, the loading glyph will be displayed.                                                                                                 |
| onClick      | `event => void \| Promise` |             | Function for handling onClick event.                                                                                                            |
| ref          | `func`                     |             | Prop for forwarded ref of the Button.                                                                                                           |
| role         | `string`                   |             | Specifies the role of an element.                                                                                                               |
| **size**     | [`enum`](#enum)            | `"normal"`  | The size of the Button.                                                                                                                         |
| spaceAfter   | `enum`                     |             | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken) |
| submit       | `boolean`                  | `false`     | If `true`, the Button will have `type="submit"` attribute, otherwise `type="button"`.                                                           |
| tabIndex     | `string`                   |             | Specifies the tab order of an element.                                                                                                          |
| title        | `string`                   |             | Adds `aria-label`.                                                                                                                              |
| **type**     | [`enum`](#enum)            | `"primary"` | The type of Button.                                                                                                                             |
| width        | `number`                   | `0`         | The width of the Button. Number is defined in `px`.                                                                                             |

### enum

| type          | size       |
| :------------ | :--------- |
| `"primary"`   | `"small"`  |
| `"secondary"` | `"normal"` |
| `"info"`      | `"large"`  |
| `"success"`   |            |
| `"warning"`   |            |
| `"critical"`  |            |
| `"facebook"`  |            |
| `"google"`    |            |
| `"white"`     |            |

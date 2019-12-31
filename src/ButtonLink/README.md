# ButtonLink

To implement ButtonLink component into your project you'll need to add the import:

```jsx
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
```

After adding import into your project you can use it simply like:

```jsx
<ButtonLink>Hello World!</ButtonLink>
```

## Props

Table below contains all types of the props available in ButtonLink component.

| Name         | Type                       | Default     | Description                                                                                                                                     |
| :----------- | :------------------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| ariaControls | `string`                   |             | Id of the element the button controls.                                                                                                          |
| ariaExpanded | `boolean`                  |             | Tells screen reader the controlled element from `ariaControls` is expanded                                                                      |
| asComponent  | `() => React.Element`      | `"button"`  | The component used for the root node.                                                                                                           |
| block        | `boolean`                  | `false`     | If `true`, the ButtonLink will grow up to the full width of its container.                                                                      |
| circled      | `boolean`                  | `false`     | If `true`, the ButtonLink will have circular shape.                                                                                             |
| children     | `React.Node`               |             | The content of the ButtonLink.                                                                                                                  |
| disabled     | `boolean`                  | `false`     | If `true`, the ButtonLink will be disabled.                                                                                                     |
| dataTest     | `string`                   |             | Optional prop for testing purposes.                                                                                                             |
| external     | `boolean`                  | `false`     | If `true`, the ButtonLink opens link in a new tab.                                                                                              |
| href         | `string`                   |             | The URL of link to open when ButtonLink is clicked.                                                                                             |
| icon         | `React.Node`               |             | The displayed icon on the left (will be removed in the future, use iconLeft instead).                                                           |
| iconLeft     | `React.Node`               |             | The displayed icon on the left.                                                                                                                 |
| iconRight    | `React.Node`               |             | The displayed icon on the right.                                                                                                                |
| onClick      | `event => void \| Promise` |             | Function for handling onClick event.                                                                                                            |
| ref          | `func`                     |             | Prop for forwarded ref of the Button.                                                                                                           |
| role         | `string`                   |             | Specifies the role of an element.                                                                                                               |
| **size**     | [`enum`](#enum)            | `"normal"`  | The size of the ButtonLink.                                                                                                                     |
| spaceAfter   | `enum`                     |             | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken) |
| submit       | `boolean`                  | `false`     | If `true`, the Button will have `type="submit"` attribute, otherwise `type="button"`.                                                           |
| tabIndex     | `string`                   |             | Specifies the tab order of an element.                                                                                                          |
| transparent  | `boolean`                  | `false`     | If `true`, the ButtonLink will not have `:hover` and `:active` state.                                                                           |
| title        | `string`                   |             | Adds `aria-label`.                                                                                                                              |
| **type**     | [`enum`](#enum)            | `"primary"` | The type of ButtonLink.                                                                                                                         |
| width        | `number`                   | `0`         | The width of the ButtonLink. Number is defined in `px`.                                                                                         |

### enum

| type          | size       |
| :------------ | :--------- |
| `"primary"`   | `"small"`  |
| `"secondary"` | `"normal"` |
|               | `"large"`  |

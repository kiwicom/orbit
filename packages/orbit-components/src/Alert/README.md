# Alert

To implement Alert component into your project you'll need to add the import:

```jsx
import Alert from "@kiwicom/orbit-components/lib/Alert";
```

After adding import into your project you can use it simply like:

```jsx
<Alert>Hello World!</Alert>
```

## Props

The table below contains all types of the props available in Alert component.

| Name          | Type                            | Default  | Description                                                                                                                                                    |
| :------------ | :------------------------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children      | `React.Node`                    |          | The content of the Alert.                                                                                                                                      |
| closable      | `boolean`                       | `false`  | If `true`, the Close icon will be displayed. [See Functional specs](#functional-specs)                                                                         |
| dataTest      | `string`                        |          | Optional prop for testing purposes.                                                                                                                            |
| icon          | `React.Element<any> \| boolean` |          | The displayed icon. [See Functional specs](#functional-specs)                                                                                                  |
| inlineActions | `React.Node`                    |          | Renders action to a right side of a Alert. [See Functional specs](#functional-specs)                                                                           |
| onClose       | `() => void \| Promise`         |          | Function for handling Alert onClose.                                                                                                                           |
| spaceAfter    | `enum`                          |          | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |
| title         | `Translation`                   |          | The title of the Alert.                                                                                                                                        |
| **type**      | [`enum`](#enum)                 | `"info"` | The type of Alert.                                                                                                                                             |
| suppressed    | `boolean`                       |          | If `suppressed` is on, Alert will not have colored background                                                                                                  |

### enum

| type         |
| :----------- |
| `"info"`     |
| `"success"`  |
| `"warning"`  |
| `"critical"` |

## Functional specs

- By passing the `closable` prop into Alert, you will be able to handle `onClose` function and Close icon will be displayed. Also, if you want to select the Close Button element for testing purposes, use [data-test="AlertCloseButton"] selector.

- When the Alert has a `title` prop, if you pass an `icon` prop as `true`, the Alert will have its own icon based on the selected `type`. If you want to use a different icon, just pass it to the `icon` prop as a `React.Element`. Alerts without a `title` or with a `title` but without an `icon` prop don't have an icon.

- Passing a `inlineActions` will cause `children` to be ignored. `inlineActions` should be used for displaying buttons inside short alerts which only have a `title`.

## Subcomponents

### AlertButton

To implement AlertButton component into your project you'll need to add the import:

```jsx
import AlertButton from "@kiwicom/orbit-components/lib/Alert/AlertButton";
// or
import { AlertButton } from "@kiwicom/orbit-components/lib/Alert";
```

After adding import into your project you can use it simply like:

```jsx
<AlertButton type="info">Hello World!</AlertButton>
```

## Props

Table below contains all types of the props available in AlertButton component.

| Name         | Type                       | Default     | Description                                                                                                                                                    |
| :----------- | :------------------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ariaControls | `string`                   |             | Id of the element the button controls.                                                                                                                         |
| ariaExpanded | `boolean`                  |             | Tells screen reader the controlled element from `ariaControls` is expanded                                                                                     |
| asComponent  | `string \| React.Element`  | `"button"`  | The component used for the root node.                                                                                                                          |
| fullWidth    | `boolean`                  | `false`     | If `true`, the AlertButton grows to the full width of its container.                                                                                           |
| circled      | `boolean`                  | `false`     | If `true`, the AlertButton is circular.                                                                                                                        |
| children     | `React.Node`               |             | The content of the AlertButton.                                                                                                                                |
| dataTest     | `string`                   |             | Optional prop for testing purposes.                                                                                                                            |
| disabled     | `boolean`                  | `false`     | If `true`, the AlertButton is disabled.                                                                                                                        |
| external     | `boolean`                  | `false`     | If `true`, the AlertButton opens link in a new tab.                                                                                                            |
| href         | `string`                   |             | The URL of the link to open when AlertButton is clicked.                                                                                                       |
| iconLeft     | `React.Node`               |             | The displayed icon on the left.                                                                                                                                |
| iconRight    | `React.Node`               |             | The displayed icon on the right.                                                                                                                               |
| loading      | `boolean`                  | `false`     | If `true`, the loading glyph is displayed.                                                                                                                     |
| onClick      | `event => void \| Promise` |             | Function for handling onClick event.                                                                                                                           |
| ref          | `func`                     |             | Prop for forwarded ref of the AlertButton.                                                                                                                     |
| role         | `string`                   |             | Specifies the role of an element.                                                                                                                              |
| spaceAfter   | `enum`                     |             | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |
| submit       | `boolean`                  | `false`     | If `true`, the Button has the `type="submit"` attribute, otherwise `type="button"`.                                                                            |
| tabIndex     | `string \| number`         |             | Specifies the tab order of an element.                                                                                                                         |
| title        | `string`                   |             | Adds `aria-label`.                                                                                                                                             |
| **type**     | [`enum`](#button-enum)     | `"primary"` | The type of AlertButton.                                                                                                                                       |
| width        | `string`                   |             | The width of the AlertButton. Can be any string - `100px`, `20%`.                                                                                              |

### Button enum

| type               |
| :----------------- |
| `"info"`           |
| `"success"`        |
| `"warning"`        |
| `"critical"`       |
| `"infoSubtle"`     |
| `"successSubtle"`  |
| `"warningSubtle"`  |
| `"criticalSubtle"` |

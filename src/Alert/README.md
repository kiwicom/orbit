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

| Name          | Type                            | Default         | Description                      |
| :------------ | :------------------------------ | :-------------- | :------------------------------- |
| children      | `React.Node`                    |                 | The content of the Alert.
| closable      | `boolean`                       | `false`         | If `true`, the Close icon will be displayed. [See Functional specs](#functional-specs)
| dataTest      | `string`                        |                 | Optional prop for testing purposes.
| icon          | `React.Element<any> \| boolean` |                 | The displayed icon. [See Functional specs](#functional-specs)
| inlineActions | `React.Node`                    |                 | Renders action to a right side of a Alert. [See Functional specs](#functional-specs)
| onClose       | `() => void \| Promise`         |                 | Function for handling Alert onClose.
| spaceAfter    | `enum`                          |                 | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken)
| title         | `Translation`                   |                 | The title of the Alert.
| **type**      | [`enum`](#enum)                 | `"info"`        | The type of Alert.

### enum

| type          |
| :------------ |
| `"info"`      |
| `"success"`   |
| `"warning"`   |
| `"critical"`  |

## Functional specs
* By passing the `closable` prop into Alert, you will be able to handle `onClose` function and Close icon will be displayed. Also, if you want to select the Close Button element for testing purposes, use [data-test="AlertCloseButton"] selector.

* If you set up `icon` props as `true`, Alert will have its own icon, based on selected `type`. If you want to use a different icon, just pass it to the `icon` prop as `React.Element`. Alert without `icon` prop doesn't have any icon.

* Passing a `inlineActions` will cause `children` to be ignored. `inlineActions` should be used for displaying buttons inside short alerts which only have a `title`. 

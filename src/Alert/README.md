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
Table below contains all types of the props available in Alert component.

| Name          | Type                            | Default         | Description                      |
| :------------ | :------------------------------ | :-------------- | :------------------------------- |
| children      | `React.Node`                    |                 | The content of the Alert.
| closable      | `boolean`                       | `false`         | If `true`, the Close icon will be displayed. [See Functional specs](#functional-specs)
| icon          | `React.Element<any> \| boolean` |                 | The displayed icon. [See Functional specs](#functional-specs)
| onClose       | `func`                          |                 | Function for handling Alert onClose.
| title         | `string` \| `React.Node`        |                 | The title of the Alert.
| **type**      | [`enum`](#enum)                 | `"info"`        | The type of Alert.

### enum

| type          |
| :------------ |
| `"info"`      |
| `"success"`   |
| `"warning"`   |
| `"critical"`  |

## Functional specs
* By passing the `closable` prop into Alert, you will be able to handle `onClose` function and Close icon will be displayed.

* If you set up `icon` props as `true`, Alert will have it's own icon, based on selected `type`. If you want to use different icon, just pass it to the `icon` prop as `React.Element`. Alert without `icon` prop doesn't have any icon.

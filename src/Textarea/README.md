# Textarea

To implement Textarea component into your project you'll need to add the import:

```jsx
import Textarea from "@kiwicom/orbit-components/lib/Textarea";
```

After adding import into your project you can use it simply like:

```jsx
<Textarea />
```

## Props

Table below contains all types of the props available in Textarea component.

| Name        | Type                       | Default      | Description                                                                                                                                     |
| :---------- | :------------------------- | :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| dataTest    | `string`                   |              | Optional prop for testing purposes.                                                                                                             |
| disabled    | `boolean`                  |              | If `true`, the Textarea will be disabled.                                                                                                       |
| error       | `React.Node`               |              | The error to display beneath the Textarea. [See Functional specs](#functional-specs)                                                            |
| fullHeight  | `boolean`                  | `false`      | If `true`, the Textarea will take 100 % of parent's height.                                                                                     |
| help        | `React.Node`               |              | The help to display beneath the Textarea.                                                                                                       |
| label       | `Translation`              |              | The label for the Textarea. [See Functional specs](#functional-specs)                                                                           |
| maxLength   | `number`                   |              | Specifies the maximum number of characters allowed.                                                                                             |
| name        | `string`                   |              | The name for the Textarea.                                                                                                                      |
| onChange    | `event => void \| Promise` |              | Function for handling onClick event.                                                                                                            |
| onFocus     | `event => void \| Promise` |              | Function for handling onFocus event.                                                                                                            |
| onBlur      | `event => void \| Promise` |              | Function for handling onBlur event.                                                                                                             |
| placeholder | `TranslationString`        |              | The placeholder of the Textarea.                                                                                                                |
| ref         | `func`                     |              | Prop for forwarded ref of the Textarea. [See Functional specs](#functional-specs)                                                               |
| resize      | [`enum`](#enum)            | `"vertical"` | The resize option for Textarea.                                                                                                                 |
| rows        | `number`                   |              | Specifies the height of the text area (in lines).                                                                                               |
| size        | [`enum`](#enum)            | `"normal"`   | The size of the Textarea.                                                                                                                       |
| spaceAfter  | `enum`                     |              | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken) |
| tabIndex    | `string`                   |              | Specifies the tab order of an element                                                                                                           |
| value       | `string`                   |              | Specifies the value of the Textarea.                                                                                                            |

### enum

| size       | resize       |
| :--------- | :----------- |
| `"small"`  | `"vertical"` |
| `"normal"` | `"none"`     |

## Functional specs

- The `error` prop overwrites the `help` prop, due to higher priority.

- The color of the label will turn into cloud shade when the Textarea has some filled value.

- `ref` can be used for example auto-focus the elements immediately after render.

```jsx
class Component extends React.PureComponent<Props> {
  componentDidMount() {
    this.ref.current && this.ref.current.focus();
  }

  ref: { current: React$ElementRef<*> | null } = React.createRef();

  render() {
    return <Textarea ref={this.ref} />;
  }
}
```

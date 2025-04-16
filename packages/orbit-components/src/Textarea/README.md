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

| Name           | Type                       | Default      | Description                                                                          |
| :------------- | :------------------------- | :----------- | :----------------------------------------------------------------------------------- |
| dataAttrs      | `Object`                   |              | Optional prop for passing `data-*` attributes to the `textarea` DOM element.         |
| dataTest       | `string`                   |              | Optional prop for testing purposes.                                                  |
| id             | `string`                   |              | Sets the `id` for the `Textarea`.                                                    |
| defaultValue   | `string`                   |              | Specifies the default value of the Textarea. To be used with uncontrolled usage.     |
| disabled       | `boolean`                  |              | If `true`, the Textarea will be disabled.                                            |
| error          | `React.Node`               |              | The error to display beneath the Textarea. [See Functional specs](#functional-specs) |
| fullHeight     | `boolean`                  | `false`      | If `true`, the Textarea will take 100% of parent's height.                           |
| help           | `React.Node`               |              | The help to display beneath the Textarea.                                            |
| label          | `Translation`              |              | The label for the Textarea.                                                          |
| maxLength      | `number`                   |              | Specifies the maximum number of characters allowed.                                  |
| name           | `string`                   |              | The name for the Textarea.                                                           |
| onChange       | `event => void \| Promise` |              | Function for handling onChange event.                                                |
| onFocus        | `event => void \| Promise` |              | Function for handling onFocus event.                                                 |
| onBlur         | `event => void \| Promise` |              | Function for handling onBlur event.                                                  |
| placeholder    | `TranslationString`        |              | The placeholder text for the Textarea.                                               |
| ref            | `func`                     |              | Prop for forwarded ref of the Textarea. [See Functional specs](#functional-specs)    |
| resize         | [`enum`](#enum)            | `"vertical"` | The resize option for Textarea.                                                      |
| rows           | `number`                   |              | Specifies the height of the text area (in lines).                                    |
| readOnly       | `boolean`                  |              | Adds the readOnly attribute to the HTML textarea element.                            |
| required       | `boolean`                  |              | If `true`, the label is displayed as required.                                       |
| spaceAfter     | [`enum`](#enum)            |              | Additional `margin-bottom` after component.                                          |
| tabIndex       | `string \| number`         |              | Specifies the tab order of an element.                                               |
| value          | `string`                   |              | Specifies the value of the Textarea. To be used with controlled usage.               |
| ariaLabel      | `string`                   |              | Optional prop to set the `aria-label` attribute value.                               |
| ariaLabelledby | `string`                   |              | Optional prop to set the `aria-labelledby` attribute value.                          |

### enum

| resize       | spaceAfter   |
| :----------- | :----------- |
| `"vertical"` | `"none"`     |
| `"none"`     | `"smallest"` |
|              | `"small"`    |
|              | `"normal"`   |
|              | `"medium"`   |
|              | `"large"`    |
|              | `"largest"`  |

## Functional specs

- The `error` prop overwrites the `help` prop, due to higher priority.

- `ref` can be used for example auto-focus the elements immediately after render.

```jsx
class Component extends React.PureComponent<Props> {
  componentDidMount() {
    this.ref.current && this.ref.current.focus();
  }

  ref: { current: React.ElementRef<*> | null } = React.createRef();

  render() {
    return <Textarea ref={this.ref} />;
  }
}
```

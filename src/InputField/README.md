# InputField

To implement InputField component into your project you'll need to add the import:

```jsx
import InputField from "@kiwicom/orbit-components/lib/InputField";
```

After adding import into your project you can use it simply like:

```jsx
<InputField />
```

## Props

Table below contains all types of the props available in InputField component.

| Name         | Type                       | Default    | Description                                                                                                                                         |
| :----------- | :------------------------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoComplete | `string`                   |            | The autocomplete attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).                |
| disabled     | `boolean`                  |            | If `true`, the InputField will be disabled.                                                                                                         |
| dataTest     | `string`                   |            | Optional prop for testing purposes.                                                                                                                 |
| error        | `React.Node`               |            | The error to display beneath the InputField. [See Functional specs](#functional-specs)                                                              |
| tags         | `React.Node`               |            | Here you can pass <Tag /> component for render tags [See Functional specs](#functional-specs)                                                       |
| help         | `React.Node`               |            | The help to display beneath the InputField.                                                                                                         |
| label        | `Translation`              |            | The label for the InputField. [See Functional specs](#functional-specs)                                                                             |
| id           | `string`                   |            | HTML `id` attribute for input.[See Accessibility specs](#accessibility)                                                                             |
| inlineLabel  | `boolean`                  |            | If true the label renders on the left side of input                                                                                                 |
| inputMode    | [`enum`](#enum)            |            | The type of data that might be entered by the user. [See more here](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode). |
| maxLength    | `number`                   |            | Specifies the maximum number of characters allowed.                                                                                                 |
| maxValue     | `number`                   |            | Specifies the maximum value for the InputField.                                                                                                     |
| minLength    | `number`                   |            | Specifies the minimum number of characters allowed.                                                                                                 |
| minValue     | `number`                   |            | Specifies the minimum value for the InputField.                                                                                                     |
| required     | `boolean`                  |            | If true, the label is displayed as required.                                                                                                        |
| name         | `string`                   |            | The name for the InputField.                                                                                                                        |
| onBlur       | `event => void \| Promise` |            | Function for handling onBlur event.                                                                                                                 |
| onChange     | `event => void \| Promise` |            | Function for handling onChange event.                                                                                                               |
| onFocus      | `event => void \| Promise` |            | Function for handling onFocus event.                                                                                                                |
| onKeyDown    | `event => void \| Promise` |            | Function for handling onKeyDown event.                                                                                                              |
| onKeyUp      | `event => void \| Promise` |            | Function for handling onKeyUp event.                                                                                                                |
| placeholder  | `TranslationString`        |            | The placeholder of the InputField.                                                                                                                  |
| **prefix**   | `React.Node`               |            | The prefix component for the InputField.                                                                                                            |
| readOnly     | `boolean`                  | `"false"`  | If `true`, the InputField be readOnly.                                                                                                              |
| ref          | `func`                     |            | Prop for forwarded ref of the InputField. [See Functional specs](#functional-specs)                                                                 |
| spaceAfter   | `enum`                     |            | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken)     |
| **size**     | [`enum`](#enum)            | `"normal"` | The size of the InputField.                                                                                                                         |
| suffix       | `React.Node`               |            | The suffix component for the InputField. [See Functional specs](#functional-specs)                                                                  |
| tabIndex     | `string`                   |            | Specifies the tab order of an element                                                                                                               |
| **type**     | [`enum`](#enum)            | `"text"`   | The type of the InputField.                                                                                                                         |
| value        | `string`                   |            | Specifies the value of the InputField.                                                                                                              |

### enum

| inputMode   | type           | size       |
| :---------- | :------------- | :--------- |
| `"numeric"` | `"text"`       | `"small"`  |
| `"tel"`     | `"number"`     | `"normal"` |
| `"decimal"` | `"email"`      |
| `"email"`   | `"password"`   |
| `"url"`     | `"passportid"` |
| `"search"`  |
| `"text"`    |
| `"none"`    |

## Functional specs

- The `error` prop overwrites the `help` prop, due to higher priority.

- The color of the label will turn into cloud shade when the InputField has some filled value.

- You can use `string` for currency InputField, or `React.Node` for InputField with icon.

- If you want to use `ButtonLink` as suffix for the `InputField`, use `transparent` prop for the `ButtonLink`, e.g.:

```jsx
<InputField
  placeholder="My placeholder"
  suffix={<ButtonLink transparent icon={<Visibility />} />}
/>
```

- Usage of `Tag` in `InputField`

```jsx
import Tag from "@kiwicom/orbit-components/lib/Tag";

<InputField
  placeholder="My placeholder"
  tags={
    <div>
      <Tag>Brno</Tag>
      <Tag>Praha</Tag>
    </div>
  }
/>;
```

- `ref` can be used for example auto-focus the elements immediately after render.

```jsx
class Component extends React.PureComponent<Props> {
  componentDidMount() {
    this.ref.current && this.ref.current.focus();
  }

  ref: { current: React$ElementRef<*> | null } = React.createRef();

  render() {
    return <InputField ref={this.ref} />;
  }
}
```

## Accessibility

- For special cases you can use your own, detached `label`. Simply like this:

```jsx
<label for="NICEID">Content</label>
<InputField
  id="NICEID"
/>
```

# InputField

To implement the InputField component into your project you'll need to add the import:

```jsx
import InputField from "@kiwicom/orbit-components/lib/InputField";
```

After adding import to your project you can use it simply like:

```jsx
<InputField />
```

## Props

The table below contains all types of props available in the InputField component.

| Name                 | Type                               | Default   | Description                                                                                                                                                                      |
| :------------------- | :--------------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoComplete         | `string`                           |           | The autocomplete attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).                                             |
| autoFocus            | `boolean`                          |           | The autofocus attribute of the input, see [this docs](https://www.w3schools.com/tags/att_autofocus.asp). Keep in mind that autofocus works only when Input is initially rendered |
| defaultValue         | `string \| number`                 |           | Specifies the default value of the InputField. To be used with uncontrolled usage.                                                                                               |
| disabled             | `boolean`                          |           | If `true`, the InputField will be disabled.                                                                                                                                      |
| dataAttrs            | `Object`                           |           | Optional prop for passing `data-*` attributes to the `input` DOM element.                                                                                                        |
| dataTest             | `string`                           |           | Optional prop for testing purposes.                                                                                                                                              |
| error                | `React.Node`                       |           | The error to display beneath the InputField. [See Functional specs](#functional-specs)                                                                                           |
| tags                 | `React.Node`                       |           | Here you can pass <Tag /> component for render tags [See Functional specs](#functional-specs)                                                                                    |
| help                 | `React.Node`                       |           | The help to display beneath the InputField.                                                                                                                                      |
| label                | `Translation`                      |           | The label for the InputField. [See Functional specs](#functional-specs)                                                                                                          |
| id                   | `string`                           |           | HTML `id` attribute for input.[See Accessibility specs](#accessibility)                                                                                                          |
| inlineLabel          | `boolean`                          |           | If true the label renders on the left side of input                                                                                                                              |
| inputMode            | [`enum`](#enum)                    |           | The type of data that might be entered by the user. [See more here](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).                              |
| maxLength            | `number`                           |           | Specifies the maximum number of characters allowed.                                                                                                                              |
| maxValue             | `number`                           |           | Specifies the maximum value for the InputField.                                                                                                                                  |
| minLength            | `number`                           |           | Specifies the minimum number of characters allowed.                                                                                                                              |
| width                | `string`                           | `100%`    | Specifies the width of InputField.                                                                                                                                               |
| minValue             | `number`                           |           | Specifies the minimum value for the InputField.                                                                                                                                  |
| required             | `boolean`                          |           | If true, the label is displayed as required.                                                                                                                                     |
| name                 | `string`                           |           | The name for the InputField.                                                                                                                                                     |
| onBlur               | `event => void \| Promise`         |           | Function for handling onBlur event.                                                                                                                                              |
| onChange             | `event => void \| Promise`         |           | Function for handling onChange event.                                                                                                                                            |
| onFocus              | `event => void \| Promise`         |           | Function for handling onFocus event.                                                                                                                                             |
| onKeyDown            | `event => void \| Promise`         |           | Function for handling onKeyDown event.                                                                                                                                           |
| onKeyUp              | `event => void \| Promise`         |           | Function for handling onKeyUp event.                                                                                                                                             |
| onMouseDown          | `event => void \| Promise`         |           | Function for handling onMouseDown event.                                                                                                                                         |
| onMouseUp            | `event => void \| Promise`         |           | Function for handling onMouseUp event.                                                                                                                                           |
| onSelect             | `event => void \| Promise`         |           | Function for handling onSelect event.                                                                                                                                            |
| placeholder          | `string \| (() => string))`        |           | The placeholder of the InputField.                                                                                                                                               |
| **prefix**           | `React.Node`                       |           | The prefix component for the InputField.                                                                                                                                         |
| readOnly             | `boolean`                          | `"false"` | If `true`, the InputField be readOnly.                                                                                                                                           |
| ref                  | `func`                             |           | Prop for forwarded ref of the InputField. [See Functional specs](#functional-specs)                                                                                              |
| spaceAfter           | `enum`                             |           | Additional `margin-bottom` after component.                                                                                                                                      |
| suffix               | `React.Node`                       |           | The suffix component for the InputField. [See Functional specs](#functional-specs)                                                                                               |
| tabIndex             | `string \| number`                 |           | Specifies the tab order of an element                                                                                                                                            |
| **type**             | [`enum`](#enum)                    | `"text"`  | The type of the InputField.                                                                                                                                                      |
| value                | `string \| number`                 |           | Specifies the value of the InputField. To be used with controlled usage.                                                                                                         |
| helpClosable         | `boolean`                          | `true`    | Whether to display help as a closable tooltip, or have it open only while the field is focused, same as error.                                                                   |
| list                 | `string`                           |           | The id of the datalist element.                                                                                                                                                  |
| ariaAutocomplete     | `inline \| list \| both`           |           | The aria-autocomplete attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete).                     |
| role                 | `textbox \| combobox \| searchbox` | `textbox` | The role attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role).                                            |
| ariaActiveDescendant | `string`                           |           | The aria-activedescendant attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant).             |
| ariaHasPopup         | `boolean`                          |           | The aria-haspopup attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup).                             |
| ariaExpanded         | `boolean`                          |           | The aria-expanded attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded).                             |
| ariaControls         | `string`                           |           | The aria-controls attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls).                             |
| ariaLabel            | `string`                           |           | Optional prop for `aria-label` value. [See Accessibility](#accessibility).                                                                                                       |

### enum

| inputMode   | type           | spaceAfter   |
| :---------- | :------------- | :----------- |
| `"numeric"` | `"text"`       | `"none"`     |
| `"tel"`     | `"number"`     | `"smallest"` |
| `"decimal"` | `"email"`      | `"small"`    |
| `"email"`   | `"password"`   | `"normal"`   |
| `"url"`     | `"passportid"` | `"medium"`   |
| `"search"`  |                | `"large"`    |
| `"text"`    |                | `"largest"`  |
| `"none"`    |

## Functional specs

- The `error` prop overwrites the `help` prop, due to higher priority.

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

  ref: { current: React.ElementRef<*> | null } = React.createRef();

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

- The `ariaLabel` prop allows you to specify an `aria-label` attribute for the InputField component. This attribute provides additional information to screen readers, enhancing the accessibility of the component. By using `ariaLabel`, you can ensure that users who rely on assistive technologies receive the necessary context and information about the component's purpose and functionality.
- If the `label` prop is not provided, the `ariaLabel` prop must be specified to ensure component accessibility.

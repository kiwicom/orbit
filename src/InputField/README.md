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

| Name          | Type              | Default      | Description                      |
| :------------ | :---------------- | :----------- | :------------------------------- |
| disabled      | `boolean`         |              | If `true`, the InputField will be disabled.
| dataTest      | `string`          |              | Optional prop for testing purposes.
| error         | `React.Node`      |              | The error to display beneath the InputField. [See Functional specs](#functional-specs)
| help          | `React.Node`      |              | The help to display beneath the InputField.
| label         | `Translation`     |              | The label for the InputField. [See Functional specs](#functional-specs)
| inlineLabel   | `boolean`         |              | If true the label renders on the left side of input
| maxLength     | `number`          |              | Specifies the maximum number of characters allowed.
| maxValue      | `number`          |              | Specifies the maximum value for the InputField.
| minLength     | `number`          |              | Specifies the minimum number of characters allowed.
| minValue      | `number`          |              | Specifies the minimum value for the InputField.
| required      | `boolean`         |              | If true, the label is displayed as required.
| name          | `string`          |              | The name for the InputField.
| onBlur        | `func`            |              | Function for handling onBlur event.
| onChange      | `func`            |              | Function for handling onChange event.
| onFocus       | `func`            |              | Function for handling onFocus event.
| onKeyDown     | `func`            |              | Function for handling onKeyDown event.
| onKeyUp       | `func`            |              | Function for handling onKeyUp event.
| placeholder   | `Translation`     |              | The placeholder of the InputField.
| **prefix**    | `React.Node`      |              | The prefix component for the InputField. 
| ref           | `func`            |              | Prop for forwarded ref of the InputField. [See Functional specs](#functional-specs)
| **size**      | [`enum`](#enum)   | `"normal"`   | The size of the InputField.
| suffix        | `React.Node`      |              | The suffix component for the InputField. [See Functional specs](#functional-specs)
| **type**      | [`enum`](#enum)   | `"text"`     | The type of the InputField.
| value         | `string`          |              | Specifies the value of the InputField.

### enum

| type            | size        |
| :-------------- | :---------- |
| `"text"`        | `"small"`   |
| `"number"`      | `"normal"`  |
| `"email"`       |
| `"password"`    |
| `"passportid"`  |


## Functional specs
* The `error` prop overwrites the `help` prop, due to higher priority.

* The color of the label will turn into cloud shade when the InputField has some filled value.

* You can use `string` for currency InputField, or `React.Node` for InputField with icon.

* If you want to use `ButtonLink` as suffix for the `InputField`, use `transparent` prop for the `ButtonLink`, e.g.:
```jsx
<InputField
  placeholder="My placeholder"
  suffix={
    <ButtonLink transparent icon={<Visibility />} />
  }
/>
```

* `ref` can be used for example auto-focus the elements immediately after render.
```jsx
class Component extends React.PureComponent<Props> {

  constructor() {
    super()
    this.ref = React.createRef();
  }
  
  componentDidMount() {
    this.ref.current && this.ref.current.focus();
  }

  ref: { current: React$ElementRef<*> | null };

  render() {
    return (
      <InputField ref={this.ref} />
    )
  }
}
```

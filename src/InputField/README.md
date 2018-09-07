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
| error         | `React.Node`      |              | The error to display beneath the InputField. [See Functional specs](#functional-specs)
| help          | `React.Node`      |              | The help to display beneath the InputField.
| label         | `string`          |              | The label for the InputField. [See Functional specs](#functional-specs)
| maxLength     | `number`          |              | Specifies the maximum number of characters allowed.
| maxValue      | `number`          |              | Specifies the maximum value for the InputField.
| minLength     | `number`          |              | Specifies the minimum number of characters allowed.
| minValue      | `number`          |              | Specifies the minimum value for the InputField.
| required      | `boolean`         |              | If true, the label is displayed as required.
| name          | `string`          |              | The name for the InputField.
| onChange      | `func`            |              | Function for handling onClick event.
| onFocus       | `func`            |              | Function for handling onFocus event.
| onBlur        | `func`            |              | Function for handling onBlur event.
| placeholder   | `string`          |              | The placeholder of the InputField.
| **prefix**    | [`enum`](#enum)   |              | The prefix component for the InputField. [See Functional specs](#functional-specs)
| **size**      | [`enum`](#enum)   | `"normal"`   | The size of the InputField.
| suffix        | `React.Node`      |              | The suffix component for the InputField.
| **type**      | [`enum`](#enum)   | `"text"`     | The type of the InputField.
| value         | `string`          |              | Specifies the value of the InputField.

### enum

| type         | size        | prefix       |
| :----------- | :---------- | :----------  |
| `"text"`     | `"small"`   | `React.Node` |
| `"number"`   | `"normal"`  | `func`       |
| `"email"`    |
| `"password"` |


## Functional specs
* The `error` prop overwrites the `help` prop, due to higher priority.

* The color of the label will turn into cloud shade when the InputField has some filled value.

* You can use `string` for currency InputField, or `React.Node` for InputField with icon.

* if you want render label as prefix pass function with arg `filled` that returns `<FormLabel filled={filled} />` component, example:
```
prefix={filled => (
  <FormLabel filled={filled} required>
    Label
  </FormLabel>
)}
``` 

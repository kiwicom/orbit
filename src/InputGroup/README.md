# InputGroup
To implement InputGroup component into your project you'll need to add the import:
```jsx
import InputGroup from "@kiwicom/orbit-components/lib/InputGroup";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Select from "@kiwicom/orbit-components/lib/Select";
```
After adding import into your project you can use it simply like:
```jsx
<InputGroup>
  <InputField />
  <Select />
</InputGroup>
```
## Props
Table below contains all types of the props available in InputGroup component.

| Name          | Type                          | Default      | Description                      |
| :------------ | :---------------------------- | :----------- | :------------------------------- |
| **children**  | `Array<InputField or Select>` |              | The children of the InputGroup.
| dataTest      | `string`                      |              | Optional prop for testing purposes.
| error         | `React.Node`                  |              | The error to display beneath the InputGroup. [See Functional specs](#functional-specs)
| flex          | `string` or `Array<string>`   | `"0 1 auto"` | The flex attribute(s) for children of the InputGroup. [See Functional specs](#functional-specs)
| help          | `React.Node`                  |              | The help to display beneath the InputGroup.
| label         | `Translation`                 |              | The label for the InputGroup. [See Functional specs](#functional-specs)
| onChange      | `func`                        |              | Function for handling onClick event. [See Functional specs](#functional-specs)
| onFocus       | `func`                        |              | Function for handling onFocus event. [See Functional specs](#functional-specs)
| onBlur        | `func`                        |              | Function for handling onBlur event. [See Functional specs](#functional-specs)
| size          | [`enum`](#enum)               | `"normal"`   | The size of the InputField. [See Functional specs](#functional-specs)

### enum

| size         |
| :----------- |
| `"small"`    |
| `"normal"`   |


## Functional specs
* The `error` prop overwrites the `help` prop, due to higher priority.

* Define `error` or `help` only for the **InputGroup**. Any `error` or `help` in InputField or Select won't be displayed.

* You can set up different `flex` attribute for every children, or use one for all. See [flex property docs](https://www.w3schools.com/cssref/css3_pr_flex.asp) for more information.

* The color of the label will turn into cloud shade when all children have some filled value.

* Define `onChange`, `onFocus` and `onBlur` only for the **InputGroup**, everything will be passed to children automatically.

* Define `size` only for the **InputGroup**, it will set up the proper styling for everything automatically.

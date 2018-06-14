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

| Name          | Type              | Default      | Description                      |
| :------------ | :---------------- | :----------- | :------------------------------- |
| children      | `React.Node`      |              | Specifies the value of the Textarea.
| disabled      | `boolean`         |              | If `true`, the Textarea will be disabled.
| error         | `React.Node`      |              | The error to display beneath the Textarea. [See Functional specs](#functional-specs)
| help          | `React.Node`      |              | The help to display beneath the Textarea.
| label         | `string`          |              | The label for the Textarea. [See Functional specs](#functional-specs)
| maxLength     | `number`          |              | Specifies the maximum number of characters allowed.
| name          | `string`          |              | The name for the Textarea.
| onChange      | `func`            |              | Function for handling onClick event.
| onFocus       | `func`            |              | Function for handling onFocus event.
| onBlur        | `func`            |              | Function for handling onBlur event.
| placeholder   | `string`          |              | The placeholder of the Textarea.
| size          | [`enum`](#enum)   | `"normal"`   | The size of the Textarea.

### enum

| size         |
| :----------- |
| `"small"`    |
| `"normal"`   |


## Functional specs
* The `error` prop overwrites the `help` prop, due to higher priority.

* The color of the label will turn into cloud shade when the Textarea has some filled value.

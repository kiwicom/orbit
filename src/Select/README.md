# Select
To implement Select component into your project you'll need to add the import:
```jsx
import Select from "@kiwicom/orbit-components/lib/Select";
```
After adding import into your project you can use it simply like:
```jsx
<Select options={Option} />
```
## Props
Table below contains all types of the props available in the Select component.

| Name        | Type                              | Default    | Description                      |
| :---------- | :-------------------------------- | :--------- | :------------------------------- |
| dataTest    | `string`                          |            | Optional prop for testing purposes.
| disabled    | `boolean`                         | `false`    | If `true`, the Select will be disabled.
| error       | `React.Node`                      |            | The error message for the Select. [See Functional specs](#functional-specs)
| help        | `React.Node`                      |            | The help message for the Select.
| label       | `string`                          |            | The label for the Select.
| onBlur      | `func`                            |            | Function for handling onBlur event.
| onChange    | `func`                            |            | Function for handling onChange event.
| onFocus     | `func`                            |            | Function for handling onFocus event.
| **options** | [`Option[]`](#option)             |            | The content of the Select, passed as array of objects.
| placeholder | `string`                          |            | The placeholder for the Select. 
| prefix      | `React.Node`                      |            | The prefix component for the Select. [See Functional specs](#functional-specs)
| size        | [`enum`](#enum)                   | `"normal"` | The size of the Select.
| value       | `string`                          | `""`       | The value of the Select.

## Option
Table below contains all types of the props available for object in Option array.

| Name         | Type               | Description                      |
| :----------- | :----------------- | :------------------------------- |
| **value**    | `string \| number` | The value of the Option.
| label        | `string`           | The label for the Option.
| disabled     | `boolean`          | If `true`, the Option will be disabled.
  
### enum

| size       |
| :--------- |
| `"small"`  |
| `"normal"` |

## Functional specs
* The `error` prop overwrites the `help` prop, due to higher priority.


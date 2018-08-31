# Checkbox
To implement Checkbox component into your project you'll need to add the import:
```jsx
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox";
```
After adding import into your project you can use it simply like:
```jsx
<Checkbox label="Checkbox"/>
```
## Props
Table below contains all types of the props available in Checkbox component.

| Name         | Type         | Default | Description                      |
| :-------     | :----------- | :------ | :------------------------------- |
| checked      | `boolean`    | `false` | If `true`, the Checkbox will be checked.
| disabled     | `boolean`    | `false` | If `true`, the Checkbox will be set up as disabled.
| hasError     | `boolean`    | `false` | If `true`, the border of the Checkbox will turn red. [See Functional specs](#functional-specs)
| info         | `React.Node` |         | The additional info about the Checkbox.
| **label**    | `React.Node` |         | The label of the Checkbox.
| onChange     | `func`       |         | Function for handling onChange event.
| value        | `string`     |         | The value of the Checkbox.

## Functional specs
* The `hasError` prop will be visible only when the Checkbox has `checked` or `disabled` prop set on **false**.

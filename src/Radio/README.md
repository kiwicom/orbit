# Radio
To implement Radio component into your project you'll need to add the import:
```jsx
import Radio from "@kiwicom/orbit-components/lib/Radio";
```
After adding import into your project you can use it simply like:
```jsx
<Radio label="Radio" />
```
## Props
Table below contains all types of the props available in Radio component.

| Name         | Type         | Default | Description                      |
| :-------     | :----------- | :------ | :------------------------------- |
| checked      | `boolean`    | `false` | If `true`, the Radio will be checked.
| disabled     | `boolean`    | `false` | If `true`, the Radio will be set up as disabled.
| hasError     | `boolean`    | `false` | If `true`, the border of the Radio will turn red. [See Functional specs](#functional-specs)
| info         | `React.Node` |         | The additional info about the Radio.
| **label**    | `string`     |         | The label of the Radio.
| onChange     | `func`       |         | Function for handling onChange event.
| value        | `string`     |         | The value of the Radio.

## Functional specs
* The`hasError` prop will be visible only when the Radio has `checked` or `disabled` prop set on false.

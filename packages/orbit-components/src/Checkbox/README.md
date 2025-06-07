# Checkbox

To implement Checkbox component into your project you'll need to add the import:

```jsx
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox";
```

After adding import into your project you can use it simply like:

```jsx
<Checkbox label="Checkbox" />
```

## Props

Table below contains all types of the props available in Checkbox component.

| Name            | Type                       | Default | Description                                                                                    |
| :-------------- | :------------------------- | :------ | :--------------------------------------------------------------------------------------------- |
| ariaControls    | `string`                   |         | Identifies the element whose contents or presence are controlled by the Checkbox.              |
| ariaDescribedby | `string`                   |         | Identifies the element that describes the Checkbox, providing additional information.          |
| checked         | `boolean`                  |         | If `true`, the Checkbox will be checked.                                                       |
| defaultChecked  | `boolean`                  |         | If `true`, the Checkbox will be checked by default. Only to be used in uncontrolled.           |
| disabled        | `boolean`                  | `false` | If `true`, the Checkbox will be set up as disabled.                                            |
| dataTest        | `string`                   |         | Optional prop for testing purposes.                                                            |
| id              | `string`                   |         | Set `id` for `Checkbox`                                                                        |
| hasError        | `boolean`                  | `false` | If `true`, the border of the Checkbox will turn red. [See Functional specs](#functional-specs) |
| info            | `React.Node`               |         | The additional info about the Checkbox.                                                        |
| label           | `string`                   |         | The label of the Checkbox.                                                                     |
| name            | `string`                   |         | The name for the Checkbox.                                                                     |
| onChange        | `event => void \| Promise` |         | Function for handling onChange event.                                                          |
| ref             | `func`                     |         | Prop for forwarded ref of the Checkbox. [See Functional specs](#functional-specs)              |
| tabIndex        | `string \| number`         |         | Specifies the tab order of an element                                                          |
| value           | `string`                   |         | The value of the Checkbox.                                                                     |

## Functional specs

- The `hasError` prop will be visible only when the Checkbox is not checked nor disabled.

- `ref` can be used, for example, to control focus or to get the status (checked) of the element.

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

| Name           | Type                       | Default | Description                                                                                 |
| :------------- | :------------------------- | :------ | :------------------------------------------------------------------------------------------ |
| checked        | `boolean`                  | `false` | If `true`, the Radio will be checked.                                                       |
| defaultChecked | `boolean`                  |         | If `true`, the Radio will be checked by default. Only to be used in uncontrolled.           |
| dataTest       | `string`                   |         | Optional prop for testing purposes.                                                         |
| id             | `string`                   |         | Set `id` for `Radio` input                                                                  |
| disabled       | `boolean`                  | `false` | If `true`, the Radio will be set up as disabled.                                            |
| hasError       | `boolean`                  | `false` | If `true`, the border of the Radio will turn red. [See Functional specs](#functional-specs) |
| info           | `React.Node`               |         | The additional info about the Radio.                                                        |
| label          | `string`                   |         | The label of the Radio.                                                                     |
| name           | `string`                   |         | The name for the Radio.                                                                     |
| onChange       | `event => void \| Promise` |         | Function for handling onChange event.                                                       |
| ref            | `func`                     |         | Prop for forwarded ref of the Radio. [See Functional specs](#functional-specs)              |
| tabIndex       | `string \| number`         |         | Specifies the tab order of an element                                                       |
| value          | `string`                   |         | The value of the Radio.                                                                     |
| ariaLabelledby | `string`                   |         | Id of the element that labels the Radio button.                                             |

## Functional specs

- The`hasError` prop will be visible only when the Radio is not checked nor disabled.

- `ref` can be used, for example, to control focus or to get the status (checked) of the element.

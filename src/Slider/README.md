**Props**
| Name | Type | Default | Description |
| ----------- | --------- | ------- | ----------- |
| value | `Value` | | |
| handleIndex | `?number` | | |
| focused | `boolean` | | |

| **Value**         |
| ----------------- |
| number , number[] |

**Bar**

| Name         | Type                                                    | Default | Description |
| ------------ | ------------------------------------------------------- | ------- | ----------- |
| value        | `number \| number[]`                                    |         |             |
| max          | `number`                                                |         |             |
| min          | `number`                                                |         |             |
| onMouseDown  | `(event: SyntheticMouseEvent<HTMLDivElement>) => void;` |         |             |
| hasHistogram | `boolean`                                               |         |             |

**Handle**

| Name          | Type                                               | Default | Description |
| ------------- | -------------------------------------------------- | ------- | ----------- |
| tabIndex      | `string \| number`                                 |         |             |
| onMouseDown   | `Callback<SyntheticMouseEvent<HTMLDivElement>>`    |         |             |
| onFocus       | `Callback<SyntheticKeyboardEvent<HTMLDivElement>>` |         |             |
| onTouchStart  | `Callback<SyntheticTouchEvent<HTMLDivElement>>`    |         |             |
| valueMax      | `number`                                           |         |             |
| valueMin      | `number`                                           |         |             |
| onTop         | `boolean`                                          |         |             |
| index         | `number`                                           |         |             |
| hasHistogram  | `boolean`                                          |         |             |
| value         | `number \| number[]`                               |         |             |
| ariaLabel     | `?AriaLabel`                                       |         |             |
| ariaValueText | `?string`                                          |         |             |
| dataTest      | `?string`                                          |         |             |

**Histogram**

| Name        | Type                                                | Default | Description |
| ----------- | --------------------------------------------------- | ------- | ----------- |
| data        | `?Data`                                             |         |             |
| value       | `number \| number[]`                                |         |             |
| min         | `number`                                            |         |             |
| step        | `number`                                            |         |             |
| loading     | `boolean`                                           |         |             |
| loadingText | `React$Element<React$ComponentType<any>> \| string` |         |             |

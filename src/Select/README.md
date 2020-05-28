**Props**
| Name | Type | Default | Description |
| --------------- | ------------------------------------------------------------------------ | ------- | ----------- |
| dataTest | `string` | | |
| RefType | `{ current: null \| HTMLElement } \| ((null \| HTMLElement) => mixed)` | | |
| spaceAfter | `[`enum`](#enum)` | | |
| dataAttrs | `` | | |
| id | `string` | | |
| required | `boolean` | | |
| size | `Size` | | |
| label | `React$Element<React$ComponentType<any>> \| string` | | |
| placeholder | `string` | | |
| value | `string \| number` | | |
| disabled | `boolean` | | |
| name | `string` | | |
| error | `React$Node` | | |
| help | `React$Node` | | |
| tabIndex | `string` | | |
| onChange | `(ev: SyntheticInputEvent<HTMLSelectElement>) => void \| Promise<any>;` | | |
| onFocus | `(ev: SyntheticInputEvent<HTMLSelectElement>) => void \| Promise<any>;` | | |
| onBlur | `(ev: SyntheticInputEvent<HTMLSelectElement>) => void \| Promise<any>;` | | |
| options | `Option[]` | | |
| prefix | `React$Node` | | |
| customValueText | `React$Element<React$ComponentType<any>> \| string` | | |

| **spaceAfter**                                                            |
| ------------------------------------------------------------------------- |
| "none" , "smallest" , "small" , "normal" , "medium" , "large" , "largest" |

| **Size**           |
| ------------------ |
| "small" , "normal" |

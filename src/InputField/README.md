**Props**
| Name | Type | Default | Description |
| ------------ | ------------------------------------------------------------------------- | ------- | ----------- |
| dataTest | `string` | | |
| RefType | `{ current: null \| HTMLElement } \| ((null \| HTMLElement) => mixed)` | | |
| spaceAfter | `[`enum`](#enum)` | | |
| dataAttrs | `` | | |
| size | `Size` | | |
| type | `[`enum`](#enum)` | | |
| inputMode | `InputMode` | | |
| name | `string` | | |
| label | `React$Element<React$ComponentType<any>> \| string` | | |
| inlineLabel | `boolean` | | |
| value | `[`enum`](#enum)` | | |
| placeholder | `string` | | |
| prefix | `React$Node` | | |
| suffix | `React$Node` | | |
| help | `React$Node` | | |
| error | `React$Node` | | |
| tags | `React$Node` | | |
| disabled | `boolean` | | |
| maxValue | `number` | | |
| minValue | `number` | | |
| maxLength | `number` | | |
| minLength | `number` | | |
| required | `boolean` | | |
| tabIndex | `string` | | |
| readOnly | `boolean` | | |
| autoComplete | `string` | | |
| id | `string` | | |
| onChange | `(ev: SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;` | | |
| onFocus | `(ev: SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;` | | |
| onBlur | `(ev: SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;` | | |
| onSelect | `(ev: SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;` | | |
| onMouseUp | `(ev: SyntheticEvent<HTMLInputElement>) => void \| Promise<any>;` | | |
| onMouseDown | `(ev: SyntheticEvent<HTMLInputElement>) => void \| Promise<any>;` | | |
| onKeyDown | `(ev: SyntheticKeyboardEvent<HTMLInputElement>) => void \| Promise<any>;` | | |
| onKeyUp | `(ev: SyntheticKeyboardEvent<HTMLInputElement>) => void \| Promise<any>;` | | |

| **spaceAfter**                                                            |
| ------------------------------------------------------------------------- |
| "none" , "smallest" , "small" , "normal" , "medium" , "large" , "largest" |

| **Size**           |
| ------------------ |
| "small" , "normal" |

| **type**                                                |
| ------------------------------------------------------- |
| "text" , "number" , "email" , "password" , "passportid" |

| **InputMode**                                                                |
| ---------------------------------------------------------------------------- |
| "numeric" , "tel" , "decimal" , "email" , "url" , "search" , "text" , "none" |

**InputTags**

| Name     | Type         | Default | Description |
| -------- | ------------ | ------- | ----------- |
| children | `React$Node` |         |             |

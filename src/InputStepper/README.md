**Props**
| Name | Type | Default | Description |
| -------------- | ------------------------------------------------------------------------ | ------- | ----------- |
| dataTest | `string` | | |
| RefType | `{ current: null \| HTMLElement } \| ((null \| HTMLElement) => mixed)` | | |
| spaceAfter | `[`enum`](#enum)` | | |
| size | `"small" \| "normal"` | | |
| label | `React$Element<React$ComponentType<any>> \| string` | | |
| step | `number` | | |
| help | `React$Node` | | |
| error | `React$Node` | | |
| name | `string` | | |
| disabled | `boolean` | | |
| maxValue | `number` | | |
| minValue | `number` | | |
| required | `boolean` | | |
| tabIndex | `string` | | |
| titleIncrement | `string \| ((any) => string)` | | |
| titleDecrement | `string \| ((any) => string)` | | |
| onFocus | `(ev: SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;` | | |
| onBlur | `(ev: SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;` | | |
| defaultValue | `number` | | |
| onChange | `(number) => void \| Promise<any>;` | | |

| **spaceAfter**                                                            |
| ------------------------------------------------------------------------- |
| "none" , "smallest" , "small" , "normal" , "medium" , "large" , "largest" |

**InputStepperStateless**

| Name                                   | Type                                                                                                            | Default | Description |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------- | ----------- |
| dataTest                               | `string`                                                                                                        |         |             |
| RefType                                | `{                                                                                                              |
| current: null \| HTMLElement           |
| } \| ((null \| HTMLElement) => mixed)` |
| spaceAfter                             | `[`enum`](#enum)`                                                                                               |         |             |
| step                                   | `number`                                                                                                        |         |             |
| help                                   | `React$Node`                                                                                                    |         |             |
| error                                  | `React$Node`                                                                                                    |         |             |
| name                                   | `string`                                                                                                        |         |             |
| disabled                               | `boolean`                                                                                                       |         |             |
| maxValue                               | `number`                                                                                                        |         |             |
| minValue                               | `number`                                                                                                        |         |             |
| required                               | `boolean`                                                                                                       |         |             |
| tabIndex                               | `string`                                                                                                        |         |             |
| titleIncrement                         | `string \| ((any) => string)`                                                                                   |         |             |
| titleDecrement                         | `string \| ((any) => string)`                                                                                   |         |             |
| onFocus                                | `(ev: SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;`                                          |         |             |
| onBlur                                 | `(ev: SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;`                                          |         |             |
| value                                  | `[`enum`](#enum)`                                                                                               |         |             |
| forwardedRef                           | `{                                                                                                              |
| current: null \| HTMLElement           |
| } \| ((null \| HTMLElement) => mixed)` |
| disabledIncrement                      | `boolean`                                                                                                       |         |             |
| disabledDecrement                      | `boolean`                                                                                                       |         |             |
| onKeyDown                              | `(ev: SyntheticKeyboardEvent<HTMLInputElement>) => void \| Promise<any>;`                                       |         |             |
| onDecrement                            | `(ev: SyntheticEvent<HTMLButtonElement> \| SyntheticKeyboardEvent<HTMLButtonElement>) => void \| Promise<any>;` |         |             |
| onIncrement                            | `(ev: SyntheticEvent<HTMLButtonElement> \| SyntheticKeyboardEvent<HTMLButtonElement>) => void \| Promise<any>;` |         |             |
| onChange                               | `(SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;`                                              |         |             |

| **spaceAfter**                                                            |
| ------------------------------------------------------------------------- |
| "none" , "smallest" , "small" , "normal" , "medium" , "large" , "largest" |

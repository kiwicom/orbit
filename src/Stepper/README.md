**Props**
| Name | Type | Default | Description |
| -------------- | ---------------------------------------------------------------------- | ------- | ----------- |
| dataTest | `string` | | |
| name | `string` | | |
| disabled | `boolean` | | |
| maxValue | `number` | | |
| minValue | `number` | | |
| titleIncrement | `string \| ((any) => string)` | | |
| titleDecrement | `string \| ((any) => string)` | | |
| onChange | `(value: number) => void \| Promise<any>;` | | |
| onFocus | `(ev: SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;` | | |
| onBlur | `(ev: SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;` | | |
| defaultValue | `number` | | |
| step | `number` | | |

**StepperStateless**

| Name              | Type                                                                                                            | Default | Description |
| ----------------- | --------------------------------------------------------------------------------------------------------------- | ------- | ----------- |
| dataTest          | `string`                                                                                                        |         |             |
| name              | `string`                                                                                                        |         |             |
| disabled          | `boolean`                                                                                                       |         |             |
| maxValue          | `number`                                                                                                        |         |             |
| minValue          | `number`                                                                                                        |         |             |
| titleIncrement    | `string \| ((any) => string)`                                                                                   |         |             |
| titleDecrement    | `string \| ((any) => string)`                                                                                   |         |             |
| onChange          | `(value: number) => void \| Promise<any>;`                                                                      |         |             |
| onFocus           | `(ev: SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;`                                          |         |             |
| onBlur            | `(ev: SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;`                                          |         |             |
| value             | `[`enum`](#enum)`                                                                                               |         |             |
| disabledIncrement | `boolean`                                                                                                       |         |             |
| disabledDecrement | `boolean`                                                                                                       |         |             |
| onKeyDown         | `(ev: SyntheticKeyboardEvent<HTMLInputElement>) => void \| Promise<any>;`                                       |         |             |
| onDecrement       | `(ev: SyntheticEvent<HTMLButtonElement> \| SyntheticKeyboardEvent<HTMLButtonElement>) => void \| Promise<any>;` |         |             |
| onIncrement       | `(ev: SyntheticEvent<HTMLButtonElement> \| SyntheticKeyboardEvent<HTMLButtonElement>) => void \| Promise<any>;` |         |             |
| onChange          | `(SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;`                                              |         |             |

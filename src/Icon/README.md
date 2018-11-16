# Icon
To implement Icon component into your project you need to know its name. You can find it in [the list of all icons](https://kiwicom.github.io/orbit-components/?selectedKind=Icon&selectedStory=List%20of%20all%20icons). Then just add an import of the icon:
```jsx
import Airplane from "@kiwicom/orbit-components/lib/icons/Airplane";
```
After adding import into your project you can use it simply like:
```jsx
<Airplane />
```
## Props
Table below contains all types of the props available for icons in general.

| Name          | Type            | Default         | Description                      |
| :------------ | :-------------- | :-------------- | :------------------------------- |
| className     | `string`        |                 | The optional className of Icon.
| color         | [`enum`](#enum) | `currentColor`  | The color of the Icon.
| customColor   | `string`        |                 | The customColor of the Icon. [See Functional specs](#functional-specs)
| dataTest      | `string`        |                 | Optional prop for testing purposes.
| **size**      | [`enum`](#enum) | `"medium"`      | The size of the Icon.
| reverseOnRtl  | `boolean`       | `false`         | If `true`, the icon will be reversed if `theme.rtl` is set to `true`.

### enum

| color         | size       |
| :------------ | :--------- |
| `"attention"` | `"small"`  |
| `"primary"`   | `"medium"` |
| `"secondary"` | `"large"`  |
| `"tertiary"`  |            |
| `"info"`      |            |
| `"success"`   |            |
| `"warning"`   |            |
| `"critical"`  |            |

## Functional specs
* If you don't pass `customColor` or `color` prop to Icon, it will inherit color from parent container with `currentColor` by default.

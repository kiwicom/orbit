# Separator

To implement the Separator component into your project you'll need to add the import:

```jsx
import Separator from "@kiwicom/orbit-components/lib/Separator";
```

After adding import to your project you can use it simply like:

```jsx
<Separator />
```

## Props

The table below contains all types of props available in the Separator component.

| Name       | Type              | Default   | Description                                                                                                                                      |
| :--------- | :---------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| sideOffset | [`enum`](#enum)   | `"none"`  | Amount of padding expressed as [spacing tokens](https://orbit.kiwi/foundation/spacing/) in the opposite direction depending on the `align` prop. |
| align      | [`enum`](#enum)   | `"left"`  | The direction of indentation. If `"center"` then it's indented from both sides.                                                                  |
| spaceAfter | [`enum`](#enum)   |           | Additional `margin-bottom` after component.                                                                                                      |
| type       | [`enum`](#enum)   | `"solid"` | The type of the separator.                                                                                                                       |
| color      | [`enum`](#enum)   |           | The color of the separator. The value should be a string with the value of a Tailwind border color class valid in Orbit.                         |
| label      | `React.ReactNode` |           | Optional text or content displayed within the separator line                                                                                     |
| ariaHidden | `boolean`         |           | If `true`, hides the separator from screen readers. Use when the separator is purely decorative.                                                 |

### enum

| sideOffset | align      | type       | spaceAfter   | color (examples)          |
| :--------- | :--------- | :--------- | :----------- | :------------------------ |
| `"none"`   | `"left"`   | `"solid"`  | `"none"`     | `"border-blue-normal"`    |
| `"300"`    | `"right"`  | `"dashed"` | `"smallest"` | `"border-green-normal"`   |
| `"400"`    | `"center"` | `"dotted"` | `"small"`    | `"border-red-normal"`     |
| `"600"`    |            | `"double"` | `"normal"`   | `"border-ink-normal"`     |
| `"800"`    |            | `"none"`   | `"medium"`   | `"border-product-normal"` |
| `"1000"`   |            |            | `"large"`    | ... and many more         |
|            |            |            | `"largest"`  |                           |

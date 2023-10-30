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

| Name       | Type            | Default   | Description                                                                                                                                                                            |
| :--------- | :-------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sideOffset | [`enum`](#enum) | `"none"`  | Amount of padding expressed as [spacing tokens](https://orbit.kiwi/foundation/spacing/) in the opposite direction depending on the `align` prop.                                       |
| align      | [`enum`](#enum) | `"left"`  | The direction of indentation. If `"center"` then it's indented from both sides.                                                                                                        |
| spaceAfter | `enum`          |           | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken)                         |
| dataTest   | `string`        |           | Optional prop for testing purposes.                                                                                                                                                    |
| type       | [`enum`](#enum) | `"solid"` | The type of the separator.                                                                                                                                                             |
| color      | `string`        |           | The color of the separator. The value should be a string with the value of a Tailwind border color class valid in Orbit. For instance: "border-blue-normal" or "border-product-normal" |

### enum

| indent      | align      | type       |
| :---------- | :--------- | :--------- |
| `"none"`    | `"left"`   | `"solid"`  |
| `"small"`   | `"right"`  | `"dashed"` |
| `"medium"`  | `"center"` | `"dotted"` |
| `"large"`   |            | `"double"` |
| `"XLarge"`  |            | `"none"`   |
| `"XXLarge"` |            |

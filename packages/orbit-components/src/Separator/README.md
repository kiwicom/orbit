# Separator

To implement Separator component into your project you'll need to add the import:

```jsx
import Separator from "@kiwicom/orbit-components/lib/Separator";
```

After adding import into your project you can use it simply like:

```jsx
<Separator />
```

## Props

Table below contains all types of the props available in the Separator component.

| Name       | Type            | Default  | Description                                                                                                                                                    |
| :--------- | :-------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| indent     | [`enum`](#enum) | `"none"` | Amount of padding expressed as [spacing tokens](https://orbit.kiwi/foundation/spacing/) in the direction depending on the `align` prop.                        |
| align      | [`enum`](#enum) | `"left"` | The direction of indentation. If `"center"` then it's indented from both sides.                                                                                |
| spaceAfter | `enum`          |          | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |

### enum

| indent      | align      |
| :---------- | :--------- |
| `"none"`    | `"left"`   |
| `"small"`   | `"right"`  |
| `"medium"`  | `"center"` |
| `"large"`   |            |
| `"XLarge"`  |            |
| `"XXLarge"` |            |

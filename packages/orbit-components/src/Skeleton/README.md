# Skeleton

Skeleton component display a placeholder preview before the data gets loaded.

To implement Separator component into your project you'll need to add the import:

```jsx
import Skeleton from "@kiwicom/orbit-components/lib/Skeleton";
```

After adding import into your project you can use it simply like:

```jsx
<Skeleton>
  <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
  <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
  <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
</Skeleton>
```

or if you need to render only rect, you can use the `row` property like:

```jsx
<Skeleton rows={3} rowOffset={15} rowHeight={10} />
```

or you can pick one from our predefined presets:

```jsx
<Skeleton preset="Button" />
```

## Props

| Name            | Type                                                                              | Required | Default | Description                                                                                                                                                    |
| --------------- | --------------------------------------------------------------------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animate         | `boolean`                                                                         |          | `true`  | Turn off/on animation                                                                                                                                          |
| ariaLabelledby  | `string`                                                                          |          |         | Optional prop for a11y element                                                                                                                                 |
| children        | `React.ReactNode`                                                                 |          |         |                                                                                                                                                                |
| height          | `number`                                                                          |          |         | Set height for Svg element                                                                                                                                     |
| rowBorderRadius | `number`                                                                          |          | `3`     | Border-radius for row rect elements                                                                                                                            |
| rowHeight       | `number`                                                                          |          | `21px`  | Set height for rect elements                                                                                                                                   |
| rowOffset       | `number`                                                                          |          | `20px`  | Set offset between rect elements                                                                                                                               |
| rows            | `number`                                                                          |          | `1`     | Number of rect elements                                                                                                                                        |
| title           | `string`                                                                          |          |         | Add text for svg accessible name element                                                                                                                       |
| preset          | [`Preset`](###Preset)                                                             |          |         | You can pick one of predefined presets                                                                                                                         |
| viewBox         | `string`                                                                          |          |         | Set viewBox for Svg element                                                                                                                                    |
| width           | `number`                                                                          |          |         | Width of Svg element                                                                                                                                           |
| spaceAfter      | `"none" \| "smallest" \| "small" \| "normal" \| "medium" \| "large" \| "largest"` |          |         | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |
| dataTest        | `string`                                                                          |          |         | Optional prop for testing purposes                                                                                                                             |

### Preset

| Preset     |
| ---------- |
| `"List"`   |
| `"Image"`  |
| `"Card"`   |
| `"Button"` |
| `"Text"`   |

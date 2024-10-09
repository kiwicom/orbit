# Stack

To implement the Stack component into your project you'll need to add the import:

```jsx
import Stack from "@kiwicom/orbit-components/lib/Stack";
```

After adding import to your project you can use it simply like:

```jsx
<Stack>
  <Button>My button</Button>
  <Button iconRight={<ChevronDown />} />
</Stack>
```

## Props

The table below contains all types of props available in the Stack component.

| Name         | Type                       | Default    | Description                                                                                         |
| :----------- | :------------------------- | :--------- | :-------------------------------------------------------------------------------------------------- |
| as           | `string`                   | `"div"`    | The string used for the root node.                                                                  |
| align        | [`enum`](#enum)            | `"start"`  | The `align-items` and `align-content` of the Stack.                                                 |
| basis        | `string`                   | `auto`     | Specifies the basis value of `flex-basis`.                                                          |
| **children** | `React.Node`               |            | Content of the Stack.                                                                               |
| dataTest     | `string`                   |            | Optional prop for testing purposes.                                                                 |
| desktop      | [`Object`](#media-queries) |            | Object for setting up properties for the desktop viewport. [See Media queries](#media-queries)      |
| direction    | [`enum`](#enum)            |            | The `flex-direction` of the Stack. [See Functional specs](#functional-specs)                        |
| flex         | `boolean`                  | `false`    | If `true` or you specify some flex attribute, the Stack will use flex attributes.                   |
| grow         | `boolean`                  | `true`     | If `true`, the Stack will have `flex-grow` set to `1`, otherwise it will be `0`.                    |
| inline       | `boolean`                  | `false`    | If `true`, the Stack will have `display` set to `inline-flex`.                                      |
| justify      | [`enum`](#enum)            | `"start"`  | The `justify-content` of the Stack.                                                                 |
| largeDesktop | [`Object`](#media-queries) |            | Object for setting up properties for the largeDesktop viewport. [See Media queries](#media-queries) |
| largeMobile  | [`Object`](#media-queries) |            | Object for setting up properties for the largeMobile viewport. [See Media queries](#media-queries)  |
| mediumMobile | [`Object`](#media-queries) |            | Object for setting up properties for the mediumMobile viewport. [See Media queries](#media-queries) |
| shrink       | `boolean`                  | `false`    | If `true`, the Stack will have `flex-shrink` set to `1`.                                            |
| spacing      | [`spacing`](#spacing)      | `"medium"` | The spacing between its children.                                                                   |
| spaceAfter   | `enum`                     |            | Additional `padding` to bottom of the Stack.                                                        |
| tablet       | [`Object`](#media-queries) |            | Object for setting up properties for the tablet viewport. [See Media queries](#media-queries)       |
| wrap         | `boolean`                  | `false`    | If `true`, the Stack will have `flex-wrap` set to `wrap`, otherwise it will be `nowrap`.            |
| useMargin    | `boolean`                  | `false`    | If `true`, the Stack will be using margins instead of gap                                           |

### Media Queries

When you need to specify some different behavior of the Stack component on different viewports, you can use properties for it.
There are `mediumMobile`, `largeMobile`, `tablet`, `desktop` and `largeDesktop` available and it behaves the same as [mediaQueries](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/utils/mediaQuery) functions.
All these properties - objects have the same own properties and none is required.

| Name       | Type                  | Default   | Description                                                                                 |
| :--------- | :-------------------- | :-------- | :------------------------------------------------------------------------------------------ |
| align      | [`enum`](#enum)       | `"start"` | The `align-items` and `align-content` of the Stack.                                         |
| basis      | `string`              | `auto`    | Specifies the basis value of `flex-basis`.                                                  |
| direction  | [`enum`](#enum)       | `"row"`   | The `flex-direction` of the Stack.                                                          |
| grow       | `boolean`             | `true`    | If `true`, the Stack will have `flex-grow` set to `1`, otherwise it will be `0`.            |
| inline     | `boolean`             | `false`   | If `true`, the Stack will have `display` set to `inline-flex`, otherwise it will be `flex`. |
| justify    | [`enum`](#enum)       | `"start"` | The `justify-content` of the Stack.                                                         |
| shrink     | `boolean`             | `true`    | If `false`, the Stack will have `flex-shrink` set to `0`.                                   |
| spacing    | [`spacing`](#spacing) |           | The spacing between its children.                                                           |
| spaceAfter | `enum`                |           | Additional `padding` to bottom of the Stack.                                                |
| wrap       | `boolean`             | `false`   | If `true`, the Stack will have `flex-wrap` set to `wrap`, otherwise it will be `nowrap`.    |

## Functional specs

- The default behavior for the `Stack` component is to not be a `flexbox` container. It means that by default it's nesting children natively (below each other) and it won't use any `flex` CSS properties.

- If you specify some property (except children, spaceAfter, dataTest and spacing) it will become a `flexbox` container and the `flex-direction: row` will be used.

### enum

| justify     | direction          | align       | spaceAfter   |
| :---------- | :----------------- | :---------- | :----------- |
| `"start"`   | `"row"`            | `"start"`   | `"none"`     |
| `"end"`     | `"column"`         | `"end"`     | `"smallest"` |
| `"center"`  | `"row-reverse"`    | `"center"`  | `"small"`    |
| `"between"` | `"column-reverse"` | `"stretch"` | `"normal"`   |
| `"around"`  |                    |             | `"medium"`   |
|             |                    |             | `"large"`    |
|             |                    |             | `"largest"`  |

### spacing

| name                                        | size on `992px - ∞` |
| :------------------------------------------ | :------------------ |
| `"none"`                                    | `null`              |
| `"XXXSmall"` - **deprecated (use `"50"`)**  | `2px`               |
| `"XXSmall"` - **deprecated (use `"100"`)**  | `4px`               |
| `"XSmall"` - **deprecated (use `"200"`)**   | `8px`               |
| `"small"` - **deprecated (use `"300"`)**    | `12px`              |
| `"medium"` - **deprecated (use `"400"`)**   | `16px`              |
| `"large"` - **deprecated (use `"600"`)**    | `24px`              |
| `"XLarge"` - **deprecated (use `"800"`)**   | `32px`              |
| `"XXLarge"` - **deprecated (use `"1000"`)** | `40px`              |
| `"50"`                                      | `2px`               |
| `"100"`                                     | `4px`               |
| `"150"`                                     | `6px`               |
| `"200"`                                     | `8px`               |
| `"300"`                                     | `12px`              |
| `"400"`                                     | `16px`              |
| `"500"`                                     | `20px`              |
| `"600"`                                     | `24px`              |
| `"800"`                                     | `32px`              |
| `"1000"`                                    | `40px`              |
| `"1200"`                                    | `48px`              |
| `"1600"`                                    | `64px`              |

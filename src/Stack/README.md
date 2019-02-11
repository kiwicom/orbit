# Stack
To implement Stack component into your project you'll need to add the import:
```jsx
import Stack from "@kiwicom/orbit-components/lib/Stack";
```
After adding import into your project you can use it simply like:
```jsx
<Stack>
  <Button>My button</Button>
  <Button iconRight={<ChevronDown />} />
</Stack>
```
## Props
Table below contains all types of the props available in Stack component.

| Name          | Type                        | Default      | Description                      |
| :------------ | :-------------------------- | :----------- | :------------------------------- |
| align         | [`enum`](#enum)             | `"start"`    | The `align-items` and `align-content` of the Stack.
| basis         | `string`                    | `auto`       | Specifies the basis value of `flex-basis`.
| **children**  | `React.Node`                |              | Content of the Stack.
| dataTest      | `string`                    |              | Optional prop for testing purposes.
| desktop       | [`Object`](#desktop)        |              | Object for setting up properties for desktop view.
| direction     | [`enum`](#enum)             | `"row"`      | The `flex-direction` of the Stack. [See Functional specs](#functional-specs)
| flex          | `boolean`                   | `false`      | If `true` or you specify some flex attribute, the Stack will use flex attributes.
| grow          | `boolean`                   | `false`      | If `true`, the Stack will have `flex-grow` set to `1`, otherwise it will be `0`.
| inline        | `boolean`                   | `false`      | If `true`, the Stack will have `display` set to `inline-flex`, otherwise it will be `flex`.
| justify       | [`enum`](#enum)             | `"start"`    | The `justify-content` of the Stack.
| shrink        | `boolean`                   | `true`       | If `false`, the Stack will have `flex-shrink` set to `0`.
| spacing       | [`spacing`](#spacing)       | `"natural"`  | The spacing between its children.
| spaceAfter    | `enum`                      |              | Additional `padding` to bottom of the Stack. [See this doc](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken)
| wrap          | `boolean`                   | `false`      | If `true`, the Stack will have `flex-wrap` set to `wrap`, otherwise it will be `nowrap`.

### Desktop
Table below contains all types of the props available in the desktop prop.
This props have the same usage, but applies only when viewport is bigger than `420px` and are not same as the base ones.

| Name          | Type                        | Default      | Description                      |
| :------------ | :-------------------------- | :----------- | :------------------------------- |
| align         | [`enum`](#enum)             | `"start"`    | The `align-items` and `align-content` of the Stack.
| basis         | `string`                    | `auto`       | Specifies the basis value of `flex-basis`.
| direction     | [`enum`](#enum)             | `"row"`      | The `flex-direction` of the Stack. [See Functional specs](#functional-specs)
| grow          | `boolean`                   | `false`      | If `true`, the Stack will have `flex-grow` set to `1`, otherwise it will be `0`.
| inline        | `boolean`                   | `false`      | If `true`, the Stack will have `display` set to `inline-flex`, otherwise it will be `flex`.
| justify       | [`enum`](#enum)             | `"start"`    | The `justify-content` of the Stack.
| shrink        | `boolean`                   | `true`       | If `false`, the Stack will have `flex-shrink` set to `0`.
| spacing       | [`spacing`](#spacing)       | `"natural"`  | The spacing between its children.
| spaceAfter    | `enum`                      |              | Additional `padding` to bottom of the Stack. [See this doc](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken)
| wrap          | `boolean`                   | `false`      | If `true`, the Stack will have `flex-wrap` set to `wrap`, otherwise it will be `nowrap`.

## Functional specs
* The default behaviour for the `Stack` component is to not be a `flexbox` container. It means that by default it's nesting children natively (below each other) and it won't use any `flex` CSS properties.

* If you specify some property (except children, spaceAfter, dataTest and spacing) it will become a `flexbox` container and the `flex-direction: row` will be used.

### enum

| justify     | align       | direction   |
| :---------- | :---------- | :---------- |
| `"start"`   | `"start"`   | `"row"`     |
| `"end"`     | `"end"`     | `"column"`  |
| `"center"`  | `"center"`  |
| `"between"` |
| `"around"`  |

### spacing

| name              | mobile          | desktop     |
| :---------------- | :-------------- | :---------- |
| `"extraTight"`    | `2px`           | `2px`       |
| `"tight"`         | `4px`           | `4px`       |
| `"condensed"`     | `8px`           | `8px`       |
| `"compact"`       | `12px`          | `12px`      |
| `"natural"`       | `16px`          | `16px`      |
| `"comfy"`         | `20px`          | `24px`      |
| `"loose"`         | `28px`          | `32px`      |
| `"extraLoose"`    | `36px`          | `40px`      |

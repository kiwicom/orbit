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
| desktop       | [`Desktop[]`](#desktop)     |              | Object for setting up properties for desktop view.
| direction     | [`enum`](#enum)             | `"row"`      | The `flex-direction` of the Stack.
| grow          | `boolean`                   | `false`      | If `true`, the Stack will have `flex-grow` set to `1`, otherwise it will be `0`.
| inline        | `boolean`                   | `false`      | If `true`, the Stack will have `display` set to `inline-flex`, otherwise it will be `flex`.
| shrink        | `boolean`                   | `true`       | If `false`, the Stack will have `flex-shrink` set to `0`.
| spacing       | [`enum`](#enum)             | `"natural"`  | The spacing between its children.
| spaceAfter    | `enum`                      |              | Additional `padding` to bottom of the Stack. [See this doc](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken)
| wrap          | `boolean`                   | `false`      | If `true`, the Stack will have `flex-wrap` set to `wrap`, otherwise it will be `nowrap`.

### Desktop
Table below contains all types of the props available in the desktop prop.
This props have the same usage, but applies only when viewport is bigger than `420px` and are not same as the base ones.

| Name          | Type                        | Default      | Description                      |
| :------------ | :-------------------------- | :----------- | :------------------------------- |
| align         | [`enum`](#enum)             | `"start"`    | The `align-items` and `align-content` of the Stack.
| basis         | `string`                    | `auto`       | Specifies the basis value of `flex-basis`.
| direction     | [`enum`](#enum)             | `"row"`      | The `flex-direction` of the Stack.
| grow          | `boolean`                   | `false`      | If `true`, the Stack will have `flex-grow` set to `1`, otherwise it will be `0`.
| inline        | `boolean`                   | `false`      | If `true`, the Stack will have `display` set to `inline-flex`, otherwise it will be `flex`.
| shrink        | `boolean`                   | `true`       | If `false`, the Stack will have `flex-shrink` set to `0`.
| spacing       | [`enum`](#enum)             | `"natural"`  | The spacing between its children.
| spaceAfter    | `enum`                      |              | Additional `padding` to bottom of the Stack. [See this doc](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken)
| wrap          | `boolean`                   | `false`      | If `true`, the Stack will have `flex-wrap` set to `wrap`, otherwise it will be `nowrap`.

### enum

| spacing         | align       | direction   |
| :-------------- | :---------- | :---------- |
| `"extraTight"`  | `"start"`   | `"row"`     |
| `"tight"`       | `"end"`     | `"column"`  |
| `"condensed"`   | `"center"`  |
| `"compact"`     | `"even"`
| `"natural"`     |
| `"comfy"`       |
| `"loose"`       |
| `"extraLoose"`  |

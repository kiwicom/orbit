# Heading
To implement Heading component into your project you'll need to add the import:
```jsx
import Heading from "@kiwicom/orbit-components/lib/Heading";
```
After adding import into your project you can use it simply like:
```jsx
<Heading>Hello World!</Heading>
```
## Props
Table below contains all types of the props available in Heading component.

| Name          | Type                  | Default    | Description                      |
| :------------ | :---------------------| :--------- | :------------------------------- |
| children      | `React.Node`          |            | The content of the Heading.
| dataTest      | `string`              |            | Optional prop for testing purposes.
| **element**   | [`enum`](#enum)       | `"h1"`     | The element used for the root node.
| inverted      | `boolean`             |            | The `true`, the Heading color will be white.
| spaceAfter    | `enum`                |            | Additional `margin-bottom` after component. [See this docs](../common/getSpacingToken)
| **type**      | [`enum`](#enum)       | `"title1"` | The size type of Heading.

### enum

| element | type        |
| :------ | :---------- |
| `"h1"`  | `"display"` |
| `"h2"`  | `"title1"`  |
| `"h3"`  | `"title2"`  |
| `"h4"`  | `"title3"`  |
| `"h5"`  |             |
| `"h6"`  |             |

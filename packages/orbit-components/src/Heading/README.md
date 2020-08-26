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

| Name            | Type            | Default    | Description                                                                                                                                                    |
| :-------------- | :-------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| as              | [`enum`](#enum) | `"div"`    | The element used for the root node.                                                                                                                            |
| children        | `React.Node`    |            | The content of the Heading.                                                                                                                                    |
| dataTest        | `string`        |            | Optional prop for testing purposes.                                                                                                                            |
| dataA11ySection | `string`        |            | ID for a `<SkipNavigation>` component.                                                                                                                         |
| id              | `string`        |            | Adds `id` HTML attribute to an element. Expects a unique ID.                                                                                                   |
| inverted        | `boolean`       |            | The `true`, the Heading color will be white.                                                                                                                   |
| spaceAfter      | `enum`          |            | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |
| **type**        | [`enum`](#enum) | `"title1"` | The size type of Heading.                                                                                                                                      |

### enum

| as      | type                |
| :------ | :------------------ |
| `"h1"`  | `"display"`         |
| `"h2"`  | `"displaySubtitle"` |
| `"h3"`  | `"title1"`          |
| `"h4"`  | `"title2"`          |
| `"h5"`  | `"title3"`          |
| `"h6"`  | `"title4"`          |
| `"div"` | `"title5"`          |

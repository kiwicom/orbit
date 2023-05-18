# Text

To implement Text component into your project you'll need to add the import:

```jsx
import Text from "@kiwicom/orbit-components/lib/Text";
```

After adding import into your project you can use it simply like:

```jsx
<Text>Hello World!</Text>
```

## Props

Table below contains all types of the props available in the Text component.

| Name           | Type                         | Default     | Description                                                   |
| :------------- | :--------------------------- | :---------- | :------------------------------------------------------------ |
| as             | [`enum`](#enum)              | `"p"`       | The element used for the root node.                           |
| align          | [`enum`](#enum)              | `"left"`    | The align of the Text.                                        |
| children       | `React.Node`                 |             | The content of the Text.                                      |
| dataTest       | `string`                     |             | Optional prop for testing purposes.                           |
| id             | `string`                     |             | The `id` HTML attribute.                                      |
| italic         | `boolean`                    | `false`     | If `true`, the Text will be in italic style.                  |
| **size**       | [`enum`](#enum)              | `"normal"`  | The size of the Text.                                         |
| **type**       | [`enum`](#enum)              | `"primary"` | The color type of the Text.                                   |
| uppercase      | `boolean`                    | `false`     | If `true`, the Text will be in uppercase style.               |
| strikeThrough  | `boolean`                    | `false`     | If `true`, the Text will have `text-transform: line-through`. |
| **weight**     | [`enum`](#enum)              | `"regular"` | The weight of the Text.                                       |
| withBackground | `boolean`                    |             | If specified, Text will have background                       |
| margin         | `string \| number \| Object` | `"0"`       | Utility property to set margin.                               |

### enum

| type          | align       | as       | size       | weight     |
| :------------ | :---------- | :------- | :--------- | :--------- |
| `"primary"`   | `"start"`   | `"p"`    | `"small"`  | `"normal"` |
| `"secondary"` | `"end"`     | `"span"` | `"normal"` | `"medium"` |
| `"info"`      | `"left"`    | `"div"`  | `"large"`  | `"bold"`   |
| `"success"`   | `"center"`  |          |            |            |
| `"warning"`   | `"right"`   |          |            |            |
| `"critical"`  | `"justify"` |          |            |            |
| `"white"`     |             |          |            |            |

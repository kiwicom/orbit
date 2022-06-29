# KeyValue

To implement KeyValue component into your project you'll need to add the import:

```jsx
import KeyValue from "@kiwicom/orbit-components/lib/KeyValue";
```

After adding import into your project you can use it simply like:

```jsx
<KeyValue label="Key" value="Value" />
```

## Props

Table below contains all types of the props available in `KeyValue` component.

| Name     | Type            | Default    | Description                         |
| :------- | :-------------- | :--------- | :---------------------------------- |
| dataTest | `string`        |            | Optional prop for testing purposes. |
| label    | `string`        |            | Set the first text                  |
| value    | `string`        |            | Set the second text                 |
| size     | [`enum`](#enum) | `"normal"` | The size of the `KeyValue`          |

### size

| size       |
| :--------- |
| `"normal"` |
| `"large"`  |

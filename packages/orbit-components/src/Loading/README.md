# Loading

To implement Loading component into your project you'll need to add the import:

```jsx
import Loading from "@kiwicom/orbit-components/lib/Loading";
```

After adding import into your project you can use it simply like:

```jsx
<Loading />
```

## Props

Table below contains all types of the props available for icons in general.

| Name        | Type                      | Default | Description                                                                                                                                |
| :---------- | :------------------------ | :------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
| children    | `React.Node`              |         | The content that is shown when `loading` is **not** `true`.                                                                                |
| dataTest    | `string`                  |         | Optional prop for testing purposes.                                                                                                        |
| id          | `string`                  |         | Set `id` for `Loading`.                                                                                                                    |
| loading     | `boolean`                 | `false` | If `true`, the Loading will be displayed. Loading which doesn't have a children is always shown, even if `loading` prop is set to `false`. |
| **type**    | [`enum`](#enum)           |         | The type of the Loading.                                                                                                                   |
| text        | `Translation`             |         | Text to be displayed below the loader image.                                                                                               |
| customSize  | `number`                  |         | Allows you to define custom size for circle loader.                                                                                        |
| asComponent | `string \| React.Element` | `div`   | The component used for the root node.                                                                                                      |
| title       | `string`                  |         | Optional prop for loader image title. This title is not visible, but announced by a screen reader. See Accessibility tab.                  |

### enum

| type             |
| :--------------- |
| `"buttonLoader"` |
| `"searchLoader"` |
| `"boxLoader"`    |
| `"pageLoader"`   |
| `"inlineLoader"` |

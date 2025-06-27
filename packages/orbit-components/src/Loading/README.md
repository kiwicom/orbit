# Loading

To implement Loading component into your project you'll need to add the import:

```jsx
import Loading from "@kiwicom/orbit-components/lib/Loading";
```

After adding import into your project you can use it simply like:

```jsx
<Loading title="Loading" />
```

## Props

Table below contains all types of the props available in the Loading component.

| Name        | Type                      | Default        | Description                                                                                                                                                   |
| :---------- | :------------------------ | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| children    | `React.Node`              |                | The content that is shown when `loading` is **not** `true`.                                                                                                   |
| dataTest    | `string`                  |                | Optional prop for testing purposes.                                                                                                                           |
| id          | `string`                  |                | Set `id` for `Loading`.                                                                                                                                       |
| loading     | `boolean`                 | `false`        | If `true`, the Loading will be displayed. Loading which doesn't have children is always shown, even if `loading` prop is set to `false`.                      |
| type        | [`enum`](#enum)           | `"pageLoader"` | The type of the Loading.                                                                                                                                      |
| customSize  | `number`                  |                | Allows you to define custom size for circle loader.                                                                                                           |
| asComponent | `string \| React.Element` | `"div"`        | The component used for the root node.                                                                                                                         |
| text        | `Translation`             |                | Text to be displayed below the loader image. Cannot be used with `title` or `ariaHidden`. See Accessibility tab.                                              |
| title       | `string`                  |                | Provides an accessible name for the loading indicator that is announced by screen readers. Cannot be used with `text` or `ariaHidden`. See Accessibility tab. |
| ariaHidden  | `boolean`                 |                | If `true`, hides the loading indicator from screen readers. Cannot be used with `text` or `title`. See Accessibility tab.                                     |

### enum

| type             |
| :--------------- |
| `"buttonLoader"` |
| `"searchLoader"` |
| `"boxLoader"`    |
| `"pageLoader"`   |
| `"inlineLoader"` |

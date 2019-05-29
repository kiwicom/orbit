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

| Name          | Type            | Default         | Description                      |
| :------------ | :-------------- | :-------------- | :------------------------------- |
| children      | `React.Node`    |                 | The content of the Loading. [See Functional specs](#functional-specs)
| dataTest      | `string`        |                 | Optional prop for testing purposes.
| loading       | `boolean`       | `false`         | If `true`, the Loading will be displayed. Loading which doesn't have a children is always shown, even if `loading` prop is set to `false`.
| **type**      | [`enum`](#enum) |                 | The type of the Loading.
| text          | `Translation`   |                 | The text of the Loading.

### enum

| type             |
| :--------------- |
| `"buttonLoader"` |
| `"searchLoader"` |
| `"boxLoader"`    |
| `"pageLoader"`   |
| `"inlineLoader"` |




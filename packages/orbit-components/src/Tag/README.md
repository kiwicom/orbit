# Tag

To implement Tag component into your project you'll need to add the import:

```jsx
import Tag from "@kiwicom/orbit-components/lib/Tag";
```

After adding import into your project you can use it simply like:

```jsx
<Tag>Hello!</Tag>
```

## Props

Table below contains all types of the props available in the Tag component.

| Name         | Type                    | Default   | Description                                                                                          |
| :----------- | :---------------------- | :-------- | :--------------------------------------------------------------------------------------------------- |
| **children** | `React.Node`            |           | The content of the Tag.                                                                              |
| dataTest     | `string`                |           | Optional prop for testing purposes.                                                                  |
| iconLeft     | `React.Node`            |           | The displayed icon on the left.                                                                      |
| id           | `string`                |           | Set `id` for `Tag`.                                                                                  |
| dateTag      | `boolean`               |           | Optional prop, if it's true, selected color has a different background.                              |
| type         | [`enum`](#enum)         | `neutral` | The color type of the Tag.                                                                           |
| onClick      | `() => void \| Promise` |           | Function for handling the onClick event.                                                             |
| onRemove     | `() => void \| Promise` |           | Function for handling the onClick event of the close icon. [See Functional specs](#functional-specs) |
| selected     | `boolean`               | `false`   | If `true`, the Tag will have selected styles.                                                        |
| size         | [`enum`](#enum)         | `normal`  | Size of the Tag.                                                                                     |
| ref          | `func`                  |           | Prop for forwarded ref of the Tag.                                                                   |
| labelDismiss | `string`                |           | Optional prop for `aria-label` attribute of dismiss button (available when `onRemove` is not null).  |

### enum

| size       | type        |
| :--------- | :---------- |
| `"small"`  | `"neutral"` |
| `"normal"` | `"colored"` |

## Functional specs

- By passing the `onRemove` the close icon will appear on the right side of the Tag.

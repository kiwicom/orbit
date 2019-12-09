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

| Name         | Type                    | Default | Description                                                                                          |
| :----------- | :---------------------- | :------ | :--------------------------------------------------------------------------------------------------- |
| **children** | `React.Node`            |         | The content of the Tag.                                                                              |
| dataTest     | `string`                |         | Optional prop for testing purposes.                                                                  |
| onClick      | `() => void \| Promise` |         | Function for handling the onClick event.                                                             |
| onRemove     | `() => void \| Promise` |         | Function for handling the onClick event of the close icon. [See Functional specs](#functional-specs) |
| selected     | `boolean`               | `false` | If `true`, the Tag will have selected styles. [See Functional specs](#functional-specs)              |
| size         | [`enum`](#enum)         | `small` | Size of the Tag.                                                                                     |
| icon         | `React.Node`            |         | The displayed icon on the left.                                                                      |

### enum

| size       |
| :--------- |
| `"small"`  |
| `"normal"` |

## Functional specs

- By passing either the `onRemove` or `selected` the close icon will appear on the right side of the Tag.

- If the Tag has `selected` prop, you need to pass `onRemove` function to able to handle the click on the close icon.

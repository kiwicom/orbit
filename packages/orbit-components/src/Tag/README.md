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
| dateTag      | `string`                |           | Optional prop, if it's true, selected color has ink background                                       |
| type         | [`enum`](#enum)         | `neutral` | The color type of the Tag.                                                                           |
| onClick      | `() => void \| Promise` |           | Function for handling the onClick event.                                                             |
| onRemove     | `() => void \| Promise` |           | Function for handling the onClick event of the close icon. [See Functional specs](#functional-specs) |
| selected     | `boolean`               | `false`   | If `true`, the Tag will have selected styles. [See Functional specs](#functional-specs)              |
| size         | [`enum`](#enum)         | `small`   | Size of the Tag.                                                                                     |
| ref          | `func`                  |           | Prop for forwarded ref of the Tag                                                                    |

### enum

| size       | type        |
| :--------- | :---------- |
| `"small"`  | `"neutral"` |
| `"normal"` | `"colored"` |

## Functional specs

- By passing the `onRemove` the close icon will appear on the left side of the Tag.

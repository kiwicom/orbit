# List

To implement List component into your project you'll need to add the import:

```jsx
import List, { ListItem } from "@kiwicom/orbit-components/lib/List";
```

After adding import into your project you can use it simply like:

```jsx
<List>
  <ListItem>Hello world!</ListItem>
</List>
```

## Props

Table below contains all types of the props available in List component.

| Name         | Type                  | Default     | Description                                                      |
| :----------- | :-------------------- | :---------- | :--------------------------------------------------------------- |
| **children** | `React.Node`          |             | The content of the List, normally [`ListItem`](#listitem-props). |
| dataTest     | `string`              |             | Optional prop for testing purposes.                              |
| id           | `string`              |             | Set `id` for `List`.                                             |
| size         | [`enum`](#enum)       | `"normal"`  | The size of the List.                                            |
| spaceAfter   | `enum`                |             | Additional `margin-bottom` after component.                      |
| type         | [`enum`](#enum)       | `"primary"` | The color type of the List.                                      |
| spacing      | [`spacing`](#spacing) | `"100"`     | The spacing between List children.                               |

### enum

| spaceAfter   |
| :----------- |
| `"none"`     |
| `"smallest"` |
| `"small"`    |
| `"normal"`   |
| `"medium"`   |
| `"large"`    |
| `"largest"`  |

### spacing

| name     |        |
| :------- | :----- |
| `"none"` | `null` |
| `"50"`   | `2px`  |
| `"100"`  | `4px`  |
| `"150"`  | `6px`  |
| `"200"`  | `8px`  |
| `"300"`  | `12px` |
| `"400"`  | `16px` |
| `"500"`  | `20px` |
| `"600"`  | `24px` |
| `"800"`  | `32px` |
| `"1000"` | `40px` |
| `"1200"` | `48px` |
| `"1600"` | `64px` |

### ListItem Props

Table below contains all types of the props in ListItem component.

| Name         | Type          | Default         | Description                                                                            |
| :----------- | :------------ | :-------------- | :------------------------------------------------------------------------------------- |
| **children** | `React.Node`  |                 | The content of the ListItem.                                                           |
| dataTest     | `string`      |                 | Optional prop for testing purposes.                                                    |
| icon         | `React.Node`  | `"CircleSmall"` | The displayed Icon or CarrierLogo component. [See Functional specs](#functional-specs) |
| label        | `Translation` |                 | Adds a label to ListItem                                                               |

### enum

| size       | type          |
| :--------- | :------------ |
| `"small"`  | `"primary"`   |
| `"normal"` | `"secondary"` |
| `"large"`  |

#### Functional specs

- You can color your icon if you pass some value into `color` or `customColor` prop of the **Icon**. Be aware of using other components, because they are not styled by default.

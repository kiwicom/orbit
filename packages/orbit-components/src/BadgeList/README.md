# BadgeList

To implement BadgeList component into your project you'll need to add the import:

```jsx
import BadgeList, { BadgeListItem } from "@kiwicom/orbit-components/lib/BadgeList";
```

After adding import into your project you can use it simply like:

```jsx
<BadgeList>
  <BadgeListItem icon={<Airplane />}>Lorem ipsum dolor sit amet</BadgeListItem>
</BadgeList>
```

## Props

Table below contains all types of the props available in BadgeList component.

| Name     | Type         | Default | Description                         |
| :------- | :----------- | :------ | :---------------------------------- |
| children | `React.Node` |         | The content of the BadgeList.       |
| dataTest | `string`     |         | Optional prop for testing purposes. |
| id       | `string`     |         | Set `id` for `BadgeList`            |

### BadgeListItem

| Name | Type | Default | Description |
| children | `React.Node` | | The content of the BadgeListItem. |
| icon | `React.Node` | | The displayed icon on the left. |
| type | [`enum`](#enum) | `"neutral"` | The color type of the BadgeListItem. |

### enum

| type         |
| :----------- |
| `"neutral"`  |
| `"info"`     |
| `"success"`  |
| `"warning"`  |
| `"critical"` |

# LinkList

To implement LinkList component into your project you'll need to add the import:

```jsx
import LinkList from "@kiwicom/orbit-components/lib/LinkList";
```

After adding import into your project you can use it simply like:

```jsx
<LinkList direction="row">
  <TextLink type="secondary">Flights</TextLink>
  <TextLink type="secondary">Flights</TextLink>
  <TextLink type="secondary">Flights</TextLink>
  <TextLink type="secondary">Flights</TextLink>
</LinkList>
```

## Props

Table below contains all types of the props available in LinkList component.

| Name         | Type                  | Default    | Description                            |
| :----------- | :-------------------- | :--------- | :------------------------------------- |
| **children** | `React.Node`          |            | The content of the LinkList            |
| dataTest     | `string`              |            | Optional prop for testing purposes.    |
| id           | `string`              |            | Set `id` for `LinkList`                |
| direction    | [`enum`](#enum)       | `"column"` | The size of the LinkList.              |
| indent       | `boolean`             |            | Indenting LinkList item                |
| spacing      | [`spacing`](#spacing) | `"medium"` | The spacing between LinkList children. |

### enum

| direction  |
| :--------- |
| `"row"`    |
| `"column"` |

### spacing

| name         | size on `992px - ∞` |
| :----------- | :------------------ |
| `"none"`     | `null`              |
| `"XXXSmall"` | `2px`               |
| `"XXSmall"`  | `4px`               |
| `"XSmall"`   | `8px`               |
| `"small"`    | `12px`              |
| `"medium"`   | `16px`              |
| `"large"`    | `24px`              |
| `"XLarge"`   | `32px`              |
| `"XXLarge"`  | `40px`              |

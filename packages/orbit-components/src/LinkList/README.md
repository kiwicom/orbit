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

| Name         | Type                  | Default    | Description                                                        |
| :----------- | :-------------------- | :--------- | :----------------------------------------------------------------- |
| **children** | `React.Node`          |            | The content of the LinkList                                        |
| dataTest     | `string`              |            | Optional prop for testing purposes.                                |
| id           | `string`              |            | Set `id` for `LinkList`                                            |
| direction    | [`enum`](#enum)       | `"column"` | The size of the LinkList.                                          |
| indent       | `boolean`             |            | Indenting LinkList item                                            |
| spacing      | [`spacing`](#spacing) | `"400"`    | The spacing between LinkList children.                             |
| useMargin    | `boolean`             | `false`    | If `true` will use `margin` for spacing, if `false` will use `gap` |

### enum

| direction  |
| :--------- |
| `"row"`    |
| `"column"` |

### spacing

| name     | size on `992px - ∞` |
| :------- | :------------------ |
| `"none"` | `null`              |
| `"50"`   | `2px`               |
| `"100"`  | `4px`               |
| `"150"`  | `6px`               |
| `"200"`  | `8px`               |
| `"300"`  | `12px`              |
| `"400"`  | `16px`              |
| `"500"`  | `20px`              |
| `"600"`  | `24px`              |
| `"800"`  | `32px`              |
| `"1000"` | `40px`              |
| `"1200"` | `48px`              |
| `"1600"` | `64px`              |

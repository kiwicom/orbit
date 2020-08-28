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

| Name         | Type                  | Default     | Description                            |
| :----------- | :-------------------- | :---------- | :------------------------------------- |
| **children** | `React.Node`          |             | The content of the LinkList            |
| dataTest     | `string`              |             | Optional prop for testing purposes.    |
| direction    | [`enum`](#enum)       | `"column"`  | The size of the LinkList.              |
| indent       | `boolean`             |             | Indenting LinkList item                |
| spacing      | [`spacing`](#spacing) | `"natural"` | The spacing between LinkList children. |

### enum

| direction  |
| :--------- |
| `"row"`    |
| `"column"` |

### spacing

| name           | size on `0 - 991px` | size on `992px - ∞` |
| :------------- | :------------------ | :------------------ |
| `"none"`       | `null`              | `null`              |
| `"extraTight"` | `2px`               | `2px`               |
| `"tight"`      | `4px`               | `4px`               |
| `"condensed"`  | `8px`               | `8px`               |
| `"compact"`    | `12px`              | `12px`              |
| `"natural"`    | `16px`              | `16px`              |
| `"comfy"`      | `20px`              | `24px`              |
| `"loose"`      | `28px`              | `32px`              |
| `"extraLoose"` | `36px`              | `40px`              |

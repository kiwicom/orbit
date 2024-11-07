# Seat

To implement Seat component into your project you'll need to add the import:

```jsx
import Seat, { SeatLegend } from "@kiwicom/orbit-components/lib/Seat";
```

After adding import into your project you can use it simply like:

```jsx
<Seat />
```

## Props

Table below contains all types of the props available in Seat component.

| title | `string` | | Adds title title to svg element. Announced by screen readers. |
| description | `string` | | Adds description to svg element. Announced by screen readers. |

## SeatLegend

Table below contains all types of the props available in Seat/SeatLegend component.

| Name     | Type                  | Default   | Description                         |
| :------- | :-------------------- | :-------- | :---------------------------------- |
| dataTest | `string`              |           | Optional prop for testing purposes. |
| type     | [`enum`](#modal-enum) | `default` | Visual type of SeatLegend           |
| label    | `string`              |           | Label text inside of a SeatLegend   |

### enum

| size       | type            |
| :--------- | :-------------- |
| `"small"`  | `"default"`     |
| `"medium"` | `"legroom"`     |
|            | `"unavailable"` |

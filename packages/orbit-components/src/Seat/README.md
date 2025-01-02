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

| Name            | Type                    | Default   | Description                                                          |
| :-------------- | :---------------------- | :-------- | :------------------------------------------------------------------- |
| dataTest        | `string`                |           | Optional prop for testing purposes.                                  |
| id              | `string`                |           | `id` of the element.                                                 |
| size            | [`enum`](#modal-enum)   | `medium`  | Size of Seat component.                                              |
| type            | [`enum`](#modal-enum)   | `default` | Visual type of Seat. If `unavailable`, the element becomes disabled. |
| price           | `string`                |           | Price of Seat. Displayed as text underneath the svg.                 |
| label           | `string`                |           | Label text inside of a Seat. Not announced by screen readers.        |
| selected        | `boolean`               |           | **Deprecated.** Use `status="selected"` instead.                     |
| status          | [`enum`](#status-enum)  | `default` | Visual status of the seat (default, selected, processing, done).     |
| onClick         | `() => void \| Promise` |           | Function for handling onClick event.                                 |
| aria-labelledby | `string`                |           | Id(s) of elements that announce the component to screen readers.     |
| title           | `string`                |           | Adds title title to svg element. Announced by screen readers.        |
| description     | `string`                |           | Adds description to svg element. Announced by screen readers.        |

## SeatLegend

Table below contains all types of the props available in Seat/SeatLegend component.

| Name       | Type                  | Default   | Description                                                                           |
| :--------- | :-------------------- | :-------- | :------------------------------------------------------------------------------------ |
| dataTest   | `string`              |           | Optional prop for testing purposes.                                                   |
| id         | `string`              |           | `id` of the element.                                                                  |
| type       | [`enum`](#modal-enum) | `default` | Visual type of the rendered seat icon.                                                |
| label      | `string`              |           | Label text to be displayed next to the seat icon.                                     |
| aria-label | `string`              |           | Adds `aria-label` attribute to the rendered SVG element. Announced by screen readers. |

### enum

| size       | type            | status         |
| :--------- | :-------------- | :------------- |
| `"small"`  | `"default"`     | `"default"`    |
| `"medium"` | `"legroom"`     | `"selected"`   |
|            | `"unavailable"` | `"processing"` |
|            |                 | `"done"`       |

### Status States

The `status` prop determines the visual appearance of the seat:

- `default`: Default state of the seat
- `selected`: Shows the seat as selected (replaces the deprecated `selected` prop)
- `processing`: Shows a processing state with:
  - Background color: product light active
  - Label: bold text in product darker color
  - Icon: Reload icon in the top-right corner
- `done`: Shows a completed state with:
  - Background color: product light active
  - Label: bold text in product darker color
  - Icon: Check icon in the top-right corner

Example usage:

```jsx
// Processing state
<Seat status="processing" label="12A" />

// Done state
<Seat status="done" label="12A" />

// Selected state (new way)
<Seat status="selected" label="12A" />

// Selected state (deprecated way)
<Seat selected label="12A" />
```

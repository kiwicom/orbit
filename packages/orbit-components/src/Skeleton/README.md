# Skeleton

Skeleton component displays a placeholder preview while data is loading.

To implement the Skeleton component into your project, you'll need to add the import:

```jsx
import Skeleton from "@kiwicom/orbit-components/lib/Skeleton";
```

After adding the import into your project, you can use it simply like:

```jsx
<Skeleton height={100} width={300} />
```

or

```jsx
<Skeleton>
  <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
  <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
  <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
</Skeleton>
```

or if you need to render only rect elements, you can use the `rows` property like:

```jsx
<Skeleton rows={3} rowOffset={15} rowHeight={10} />
```

or you can pick one from our predefined presets:

```jsx
<Skeleton preset="Button" />
```

## Props

| Name            | Type                | Default            | Description                                        |
| :-------------- | :------------------ | :----------------- | :------------------------------------------------- |
| animate         | `boolean`           | `true`             | Turns animation on/off                             |
| children        | `React.ReactNode`   |                    | Custom skeleton shapes                             |
| color           | `string`            | `paletteCloudDark` | Sets color for SVG rect elements from Orbit tokens |
| dataTest        | `string`            |                    | Optional prop for testing purposes                 |
| height          | `number \| string`  | `100%`             | Sets height for SVG element                        |
| id              | `string`            |                    | Sets `id` attribute for the Skeleton component     |
| maxHeight       | `number \| string`  |                    | Sets maximum height for SVG element                |
| preset          | [`Preset`](#preset) |                    | Predefined skeleton layouts                        |
| rowBorderRadius | `number`            | `3`                | Sets border-radius for row rect elements           |
| rowHeight       | `number`            | `21px`             | Sets height for rect elements                      |
| rowOffset       | `number`            | `20px`             | Sets offset between rect elements                  |
| rows            | `number`            |                    | Number of rect elements to display                 |
| spaceAfter      | `enum`              |                    | Additional `margin-bottom` after component         |
| title           | `string`            |                    | Provides text for screen readers                   |
| viewBox         | `string`            |                    | Sets viewBox attribute for SVG element             |
| width           | `number \| string`  | `100%`             | Width of SVG element                               |

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

### Preset

| Preset     |
| ---------- |
| `"List"`   |
| `"Image"`  |
| `"Card"`   |
| `"Button"` |
| `"Text"`   |

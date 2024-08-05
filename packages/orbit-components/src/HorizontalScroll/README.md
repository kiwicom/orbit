# HorizontalScroll

To implement HorizontalScroll component into your project you'll need to add the import:

```jsx
import HorizontalScroll from "@kiwicom/orbit-components/lib/HorizontalScroll";
```

After adding import into your project you can use it simply like:

```jsx
<HorizontalScroll>
  <FirstComponent />
  <SecondComponent />
  <ThirdComponent />
  ...etc
</HorizontalScroll>
```

## Props

| Name              | Type                        | Required | Default              | Description                                                                   |
| ----------------- | --------------------------- | -------- | -------------------- | ----------------------------------------------------------------------------- |
| minHeight         | `number`                    |          |                      | set minimal height                                                            |
| dataTest          | `string`                    |          |                      | prop for testing purposes                                                     |
| id                | `string`                    |          |                      | Set `id` for `HorizontalScroll`                                               |
| spacing           | [`Spacing`](#Spacing)       |          | "small"              | the spacing between children elements                                         |
| children          | `React.ReactNode`           | ✔️       |                      | content of HorizontalScroll                                                   |
| scrollSnap        | [`ScrollSnap`](#ScrollSnap) |          | "none"               | set value for `scroll-snap-type` property                                     |
| scrollPadding     | `number`                    |          |                      | set value for `scroll-padding` property                                       |
| overflowElevation | `boolean`                   |          |                      | set box-shadow on sides during scroll                                         |
| elevationColor    | `string`                    |          | `paletteCloudDarker` | set box-shadow color. Value must be the name of a color token from the theme. |
| onOverflow        | `() => void`                |          |                      | callback function, fires, if content is overflowed                            |
| arrows            | `boolean`                   |          |                      | show arrows                                                                   |
| arrowColor        | `string`                    |          |                      | set arrows color                                                              |

# ScrollSnap

| ScrollSnap    |
| ------------- |
| `"mandatory"` |
| `"proximity"` |
| `"inline"`    |
| `"none"`      |

# Spacing

| Spacing                                     |
| ------------------------------------------- |
| `"none"`                                    |
| `"XXXSmall"` - **deprecated (use `"50"`)**  |
| `"XXSmall"` - **deprecated (use `"100"`)**  |
| `"XSmall"` - **deprecated (use `"200"`)**   |
| `"small"` - **deprecated (use `"300"`)**    |
| `"medium"` - **deprecated (use `"400"`)**   |
| `"large"` - **deprecated (use `"600"`)**    |
| `"XLarge"` - **deprecated (use `"800"`)**   |
| `"XXLarge"` - **deprecated (use `"1000"`)** |
| `"50"`                                      |
| `"100"`                                     |
| `"150"`                                     |
| `"200"`                                     |
| `"300"`                                     |
| `"400"`                                     |
| `"500"`                                     |
| `"600"`                                     |
| `"800"`                                     |
| `"1000"`                                    |
| `"1200"`                                    |
| `"1600"`                                    |

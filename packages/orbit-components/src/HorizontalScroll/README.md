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

| Name                | Type                        | Required | Default            | Description                                                                   |
| ------------------- | --------------------------- | -------- | ------------------ | ----------------------------------------------------------------------------- |
| minHeight           | `number`                    |          |                    | set minimal height                                                            |
| dataTest            | `string`                    |          |                    | prop for testing purposes                                                     |
| id                  | `string`                    |          |                    | Set `id` for `HorizontalScroll`                                               |
| spacing             | [`Spacing`](#spacing)       |          | "300"              | the spacing between children elements                                         |
| children            | `React.ReactNode`           | ✔️       |                    | content of HorizontalScroll                                                   |
| scrollSnap          | [`ScrollSnap`](#scrollsnap) |          | "none"             | set value for `scroll-snap-type` property                                     |
| scrollPadding       | `number`                    |          |                    | set value for `scroll-padding` property                                       |
| overflowElevation   | `boolean`                   |          |                    | set box-shadow on sides during scroll                                         |
| elevationColor      | `string`                    |          | `paletteCloudDark` | set box-shadow color. Value must be the name of a color token from the theme. |
| onOverflow          | `() => void`                |          |                    | callback function, fires, if content is overflowed                            |
| arrows              | `boolean`                   |          |                    | show arrows                                                                   |
| arrowColor          | `string`                    |          |                    | set arrows color                                                              |
| arrowLeftAriaLabel  | `string`                    |          |                    | set aria-label for left arrow                                                 |
| arrowRightAriaLabel | `string`                    |          |                    | set aria-label for right arrow                                                |

## ScrollSnap

| ScrollSnap    |
| ------------- |
| `"mandatory"` |
| `"proximity"` |
| `"inline"`    |
| `"none"`      |

## Spacing

| Spacing  |
| -------- |
| `"none"` |
| `"50"`   |
| `"100"`  |
| `"150"`  |
| `"200"`  |
| `"300"`  |
| `"400"`  |
| `"500"`  |
| `"600"`  |
| `"800"`  |
| `"1000"` |
| `"1200"` |
| `"1600"` |

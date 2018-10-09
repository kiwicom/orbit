# RatingStars
To implement RatingStars component into your project you'll need to add the import:
```jsx
import RatingStars from "@kiwicom/orbit-components/lib/RatingStars";
```
After adding import into your project you can use it simply like:
```jsx
<RatingStars rating={3} size="medium" />
```
## Props
Table below contains all types of the props available in RatingStars component.

| Name         | Type                | Default    | Description                      |
| :-------     | :------------------ | :------    | :------------------------------- |
| dataTest     | `string`            |            | Optional prop for testing purposes.
| size         | [`enum`](#enum)     | `"small"` | Sizes of stars.
| **rating**   | `number`            |            | The rating number to display.


### enum

| size       |
| :--------- |
| `"small"`  |
| `"medium"` |
| `"large"`  |

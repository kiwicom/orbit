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

| Name      | Type                  | Required           | Default | Description                           |
| --------- | --------------------- | ------------------ | ------- | ------------------------------------- |
| minHeight | `number`              |                    |         | set minimal height                    |
| dataTest  | `string`              |                    |         | prop for testing purposes             |
| spacing   | [`Spacing`](#Spacing) |                    | "small" | the spacing between children elements |
| children  | `React.ReactNode`     | :heavy_check_mark: |         | content of HorizontalScroll           |

# Spacing

| Spacing      |
| ------------ |
| `"none"`     |
| `"XXXSmall"` |
| `"XXSmall"`  |
| `"XSmall"`   |
| `"small"`    |
| `"medium"`   |
| `"large"`    |
| `"XLarge"`   |
| `"XXLarge"`  |

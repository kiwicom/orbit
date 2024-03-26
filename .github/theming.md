# Theming

Our entire CSS styling for our components is based on [orbit-design-tokens](https://github.com/kiwicom/orbit-design-tokens), which contains variables with colors, sizings, spacings, etc. It also contains the functionality to create custom themes that can be used inside `orbit-components`.

## With Tailwind

**Note: This approach is recommended only if you are not using OrbitProvider.**.

Our Tailwind CSS preset package utilizes CSS variables for the theme,
making it easy for you to customize the default palette with your own colors.
To simplify this process, our tokens package includes a utility function that converts a theme object into a CSS variables string,
allowing you to seamlessly integrate custom colors into your project.

```jsx
import { tokensToCssVars } from "@kiwicom/orbit-design-tokens";

const tokens = getTokens({
  palette:
    product: {
      light: "#9ae5da",
      lightHover: "#7fded0",
      lightActive: "#64d7c6",
      normal: "#00a991",
      normalHover: "#009882",
      normalActive: "#008f7b",
      dark: "#005448",
    },
  },
);

const cssVariablesTheme = tokensToCssVars({ tokens });

<Head>
  <style>{cssVariablesTheme}</style>
</Head>
```

## Theme

Table below contains all types of the props available in the OrbitProvider component.

| Name                | Type      | Default | Description                                                                                            |
| :------------------ | :-------- | :------ | :----------------------------------------------------------------------------------------------------- |
| **orbit**           | `Object`  |         | Return of the `getTokens` function`.                                                                   |
| rtl                 | `boolean` | `false` | If `true` functions inside `orbit-components` will return RTL compliant values.                        |
| transitions         | `boolean` | `true`  | If `false` most of the components won't perform any transitions. Useful for low-end devices.           |
| lockScrolling       | `boolean` | `true`  | If `false` components with overlays like Modal won't lock scrolling when open.                         |
| lockScrollingBarGap | `boolean` | `false` | If the `lockScrollingBarGap` option is set, this gap is filled by a padding-right on the body element. |

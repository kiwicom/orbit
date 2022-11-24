# Theming

Our entire CSS styling for our components is based on [orbit-design-tokens](https://github.com/kiwicom/orbit-design-tokens), which contains variables with colors, sizings, spacings, etc. It also contains the functionality to create custom themes that can be used inside `orbit-components`.

All you need to do is pass colors into the `getTokens` function and then pass this object into `<OrbitProvider />`. The component re-exports `OrbitProvider` from `styled-components` and will do all the magic for you thanks to React's context API.

**Example:**

```jsx
import getTokens from "@kiwicom/orbit-components/lib/getTokens";
import OrbitProvider from "@kiwicom/orbit-components/lib/OrbitProvider";

const customTokens = getTokens({
  palette: {
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
});

const App = () => (
  <OrbitProvider
    theme={{
      yourCustomTheme: { black: "#000" },
      orbit: customTokens,
      rtl: false,
      transitions: false,
      lockScrolling: false,
    }}
  >
    <Button type="secondary" size="large" />
  </OrbitProvider>
);
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

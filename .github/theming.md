# Theming
Our entire CSS styling for our components is based on [orbit-design-tokens](https://github.com/kiwicom/orbit-design-tokens), which contains variables with colors, sizings, spacings, etc. It also contains the functionality to create custom themes that can be used inside `orbit-components`.

All you need to do is pass colors into the `getTokens` function and then pass this object into `<ThemeProvider />`. The component re-exports `ThemeProvider` from `styled-components` and will do all the magic for you thanks to React's context API.

**Example:**
```jsx
import getTokens from "@kiwicom/orbit-components/lib/getTokens"; 
import ThemeProvider from "@kiwicom/orbit-components/lib/ThemeProvider";

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

const App = () => 
  <ThemeProvider theme={{ yourCustomTheme: { black: "#000" }, orbit: customTokens }}>
    <Button type="secondary" size="large" />
  </ThemeProvider>;
```

## Converting colors to RGBA format
If you need to convert any palette color from `@kiwicom/orbit-design-tokens` you can use the `convertHexToRgba` function. For instance, like this:
```jsx
import styled from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-components/lib/convertHexToRgba";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

const Paper = styled.div`
  display: block;
  width: 100%;
  box-shadow: 0 2px 4px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 15)};
  // result is box-shadow: 0 2px 4px 0 rgba(37, 42, 49, 0.15);
`

Paper.defaultProps = {
  theme: defaultTheme,
}

const Example = ({ children }) => <Paper>{children}</Paper>;
// ...
```

### convertHexToRgba props
This function needs two arguments: first is `color: string`, second is `opacity: number`.

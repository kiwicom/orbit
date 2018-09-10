# Theming
Our entire CSS styling for our components is based on `orbit-design-tokens`, which contains variables with colors, sizings, spacings, etc. It also contains the functionality to create custom themes that can be used inside `orbit-components`.

All you need to do is pass colors into the `getTokens` function and then pass this object into `<ThemeProvider />`. The component from `styled-components` will do all the magic for you thanks to React's context API.

**Example:**
```jsx
import { getTokens } from "@kiwicom/orbit-design-tokens"; 
import { ThemeProvider } from "styled-components";

const customTokens = getTokens({
    product: {
      light: "#9ae5da",
      lightHover: "#7fded0",
      lightActive: "#64d7c6",
      normal: "#00a991",
      normalHover: "#009882",
      normalActive: "#008f7b",
      dark: "#005448"
    },
});

const MyComponent = () => 
  <ThemeProvider theme={{ yourCustomTheme: { black: "#000" }, orbit: customTokens }}>
    <Button type="secondary" size="large" />
  </ThemeProvider>;
```

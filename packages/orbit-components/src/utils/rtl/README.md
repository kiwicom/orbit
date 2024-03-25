# Right to left languages

The `orbit-components` package supports right to left languages.

If you need to enable `rtl` inside `orbit-components`, it can be done with `OrbitProvider`:

```jsx
import { OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

<OrbitProvider useId={React.useId} theme={{ ...defaultTheme, rtl: true }}>
  <App />
</OrbitProvider>;
```

In addition, you also need to set the `dir` property on the `html` element to have value `rtl`.

```html
<html dir="rtl">
  ...
</html>
```

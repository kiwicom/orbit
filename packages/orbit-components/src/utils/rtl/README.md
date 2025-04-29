# Right to left languages

The `orbit-components` package supports right to left languages.

If you need to enable `rtl` inside `orbit-components`, it can be done with `OrbitProvider`:

```jsx
import { OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

<OrbitProvider theme={{ ...defaultTheme, rtl: true }}>
  <App />
</OrbitProvider>;
```

In addition, you also need to set the `dir` property on the `html` element to have value `rtl`.

```html
<html dir="rtl">
  ...
</html>
```

## Rendering Bidirectional Text in RTL Mode

When rendering bidirectional text (mixing both LTR and RTL characters) in RTL mode, it's important to understand how the browser handles the rendering.

### Fully RTL Text

If the text is fully RTL, such as numbers and Hebrew characters, it will be rendered properly.

### Bidirectional Text

However, when using bidirectional text, such as "2 of 6", the rendering may not be as expected. The browser considers it as RTL due to the `dir="rtl"` attribute and starts rendering from right to left.

The browser begins with "2", which can be both LTR and RTL. When it encounters the "of 6" part, which is considered LTR, it results in the rendering of "of 6 2".

### Handling Bidirectional Text

To handle bidirectional text correctly:

1. Use fully RTL text to ensure proper rendering.
2. If using bidirectional text is necessary, wrap the LTR part with an element that has `dir="ltr"` to enforce the correct rendering order.

```html
<div dir="rtl">שלום <span dir="ltr">world</span></div>
```

3. Alternatively, if you don't know the direction of the text, use the [`bdi`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi) element to wrap the unknown part.

```html
<div dir="rtl">שלום <bdi>world</bdi></div>
```

For more information, see the official [W3 article](https://www.w3.org/International/articles/inline-bidi-markup/).

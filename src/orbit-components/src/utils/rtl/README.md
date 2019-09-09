# Right to left languages

Package `orbit-components` supports right to left languages. It's done with `theme` context from `styled-components`.

If you need to enable `rtl` inside `orbit-components`, set it inside `ThemeProvider`:

```jsx
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@kiwicom/orbit-components";

<ThemeProvider theme={{ orbit: defaultTheme, rtl: true }}>
  <App />
</ThemeProvider>;
```

It's also important to pass some `orbit` object, in our case `defaultTheme`.
With this approach, all `orbit-components` will be ready to use with some right to left language.

> In addition, you need to set up `direction` on `html` to have value `rtl`.

## Utilities

`styled-components` doesn't know automatically how to switch `margin`, `padding` and i.e. `left` properties to the other direction. So it's necessary to use some `utilities` inside your styles.

### rtlSpacing

Function `rtlSpacing` switches the values for properties `margin` and `padding`.

#### Usage

```jsx
import { rtlSpacing } from "@kiwicom/orbit-components/lib/utils/rtl";

const Component = styled.div`
  margin: ${rtlSpacing("10px 20px 30px 40px")};
`;
```

If the `rtl` inside theme context will be `true`, the margin for our component will be `10px 40px 30px 20px`. Otherwise the default passed value.

This function accepts only one parameter - `string`.

---

### left

The `left` utility returns `right`, if the `rtl` is set to `true`. Otherwise, it returns `left`.

#### Usage

```jsx
import { left } from "@kiwicom/orbit-components/lib/utils/rtl";

const Component = styled.div`
  ${left}: 0;
`;
```

This utility doesn't accept any parameter.

---

### right

The `right` utility returns `left`, if the `rtl` is set to `true`. Otherwise, it returns `right`.

#### Usage

```jsx
import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

const Component = styled.div`
  ${right}: 0;
`;
```

This utility doesn't accept any parameter.

---

### borderRadius

Function `borderRadius` switches the values for `border-radius` property.

#### Usage

```jsx
import { borderRadius } from "@kiwicom/orbit-components/lib/utils/rtl";

const Component = styled.div`
  border-radius: ${borderRadius("0 3px 3px 0")};
`;
```

If the `rtl` inside theme context will be `true`, the `border-radius` for our component will be `3px 0 0 3px`. Otherwise the default passed value.

This function accepts only one parameter - `string`.

---

### textAlign

Function `textAlign` switches the values for `text-align` property.

#### Usage with left

```jsx
import { textAlign } from "@kiwicom/orbit-components/lib/utils/rtl";

const Component = styled.div`
  text-align: ${textAlign("left")};
`;
```

If the `rtl` inside theme context will be `true`, the `text-align` for our component will be `right`. Otherwise the default passed value.

#### Usage with right

```jsx
import { textAlign } from "@kiwicom/orbit-components/lib/utils/rtl";

const Component = styled.div`
  text-align: ${textAlign("right")};
`;
```

If the `rtl` inside theme context will be `true`, the `text-align` for our component will be `left`. Otherwise the default passed value.

This function accepts only one parameter - `string` which needs to be either `left` or `right`.

### translate3d

Function `translate3d` switches the values for `transform` property.

```jsx
import { translate3d } from "@kiwicom/orbit-components/lib/utils/rtl";

const Compomnent = styled.div`
  transform: ${translate3d("400px, 0, 0")};
`;
```

If the `rtl` inside theme context will be `true`, the `translate3d` first value for our component will be `-400px`. Otherwise the default passed value.

This function accepts only one parameter - `string`.

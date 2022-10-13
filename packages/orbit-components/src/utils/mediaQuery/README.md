# Media queries

The `orbit-components` package contains several media queries that are based on a mobile-first approach.

## Media query functions

By default, you should first define styles for mobile and then use queries for bigger devices.

The example below is a good start to implementing media query functions in a project using `styled-components`:

```jsx
import media from "@kiwicom/orbit-components/lib/utils/mediaQuery";
import styled, { css } from "styled-components";

const StyledComponent = styled.div`
  width: 100%;

  ${media.desktop(css`
    width: 50%;
  `)};
`;
```

To use the component, combine it with your theme:

```jsx
import media from "@kiwicom/orbit-components/lib/utils/mediaQuery";
import styled, { css } from "styled-components";
import OrbitProvider from "@kiwicom/orbit-components/lib/OrbitProvider";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

const StyledComponent = styled.div`
  width: 100%;

  ${media.desktop(css`
    width: 50%;
  `)};
`;
function App() {
  return (
    <OrbitProvider theme={defaultTheme}>
      <StyledComponent>This div will be styled.</StyledComponent>
    </OrbitProvider>
  );
}
```

You can use the following media queries in your project:

| Name         | Applies from width |
| :----------- | :----------------- |
| mediumMobile | `414px`            |
| largeMobile  | `576px`            |
| tablet       | `768px`            |
| desktop      | `992px`            |
| largeDesktop | `1200px`           |

## Breakpoints for testing purposes

To test your components with Enzyme, especially styles, you can also use the `getBreakpointWidth` function.

Imagine that you have a component and want to test if it contains specific styles:

```jsx
const StyledComponent = styled.div`
  width: 100%;

  ${media.desktop(css`
    width: 50%;
  `)};
```

In this case, you would need to `mount` this component and than check if it has specific styles with the `toHaveStyleRule` function from the [`jest-styled-components`](https://www.npmjs.com/package/jest-styled-components) package.

The `getBreakpointWidth` function accepts the viewport name and a theme object. You can use it like this:

```jsx
import * as React from "react";
import { render } from "@testing-library/react";
import theme from "@kiwicom/orbit-components/lib/defaultTheme";
import { getBreakpointWidth } from "@kiwicom/orbit-components/lib/utils/mediaQuery";

import StyledComponent from "./";

describe("StyledComponent", () => {
  it("should have 100% width by default", () => {
    render(<StyledComponent data-test="test" />);
    expect(screen.getByTestId("test")).toHaveStyleRule("width", "100%");
  });

  it("should have a width of 50% on a desktop viewport", () => {
    render(<StyledComponent data-test="test" />);
    expect(screen.getByTestId("test")).toHaveStyleRule("width", "50%", {
      media: getBreakpointWidth("desktop", theme),
    });
  });
});
```

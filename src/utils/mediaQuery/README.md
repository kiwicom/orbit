# Media queries

In the `orbit-components` package you can find several media queries that are based on the mobile first approach.

## Media query functions

By default you should define styles firstly for mobile and then use queries for bigger devices.

Example below is a good start to implement media query functions into your project that uses `styled-components`:
```jsx
import media from "@kiwicom/orbit-components/lib/utils/mediaQuery";
import styled, { css } from "styled-components";

const StyledComponent = styled.div`
  width: 100%;
  
  ${media.desktop(css`
    width: 50%;
  `)};
`
```

You can use these media queries in your project:

| Name          | Applies from width    |
| :------------ | :-------------------- |
| mediumMobile  | `414px`               |
| largeMobile   | `576px`               |
| tablet        | `768px`               |
| desktop       | `992px`               |
| largeDesktop  | `1200px`              |

## Breakpoints for testing purposes

For testing your components with Enzyme, especially styles, you can also use getBreakpointWidth function.

Imagine that we have component and we want to test if it's contain specific styles:
```jsx
const StyledComponent = styled.div`
  width: 100%;
  
  ${media.desktop(css`
    width: 50%;
  `)};
```

In this case, our test would require to `mount` this component and than check if it's have specific styles with `toHaveStyleRule` function from package [`jest-styled-components`](https://www.npmjs.com/package/jest-styled-components):

The `getBreakpointWidth` function accepts name of the viewport and theme object. You can use it like:
```jsx
import * as React from "react";
import { mount } from "enzyme";
import theme from "@kiwicom/orbit-components/lib/defaultTheme
import { getBreakpointWidth } from "@kiwicom/orbit-components/lib/utils/mediaQuery"

import StyledComponent from "./"

describe("StyledComponent", () => {
  const component = mount(<StyledComponent />);
  
  it("should have width 100 % by default", () => {
    expect(component).toHaveStyleRule("width", "100%");
  });
  
  it("should have width 50 % on desktop viewport", () => {
    expect(component).toHaveStyleRule("width", "50%", {
      media: getBreakpointWidth("desktop", theme),
    });
  });
});
```

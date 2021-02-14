# prefer-single-destructure

Using too many arrow functions in interpolations can have a negative impact on performance, because they have to be evaluated with execution context. This is done internally by wrapping all functions into css helper from styled-components . In most cases it's far more better to use one single arrow function and then use nested conditions that returns css if necessary.

## Rule Details

The following patterns are considered errors:

```jsx
import styled from "styled-components";

const StyledWrapper = styled.div`
  color: ${({ theme, isActive }) =>
    isActive ? theme.orbit.paletteWhite : theme.orbit.paletteBlueDark};
  background: ${({ theme }) => theme.orbit.paletteBlueNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  display: ${({ isHidden }) => (isHidden ? "block" : "none")};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
`;
```

The following patterns are **not** considered errors:

```jsx
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  ${({ theme, isActive, isHidden }) => css`
    color: ${isActive ? theme.orbit.paletteWhite : theme.orbit.paletteBlueDark};
    background: ${theme.orbit.paletteBlueNormal};
    line-height: ${theme.orbit.lineHeightText};
    display: ${isHidden ? "block" : "none"};
    font-family: ${theme.orbit.fontFamily};
  `}
`;
```

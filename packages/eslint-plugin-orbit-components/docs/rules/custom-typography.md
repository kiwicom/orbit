# custom-typography

Prevents inconsistencies between Orbit and custom typography styles

## Rule details

The following patterns are considered warnings:

```jsx
const StyledWrapper = styled.div`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
`;
```

The following patterns are **not** considered warnings:

```jsx
const StyledWrapper = styled.div`
  font-size: ${({theme}) => theme.orbit.fontSizeTextNormal};
  font-family: ${({theme}) => theme.orbit.fontFamily};
  line-height: ${({theme}) => theme.orbit.lineHeightHeading};
`,
```

```jsx
const StyledWrapper = styled.div`
  font-size: inherit;
  font-family: unset;
  line-height: initial;
`,
```

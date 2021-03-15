# no-custom-typography

The aim of this rule is to prevent usage of custom values for font-size, font-family and line-height CSS properties. Only some of design tokens from @kiwicom/orbit-design-tokens should be used as value.

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

## Rule options

```
"orbit-components/no-custom-typography": <enabled>
```

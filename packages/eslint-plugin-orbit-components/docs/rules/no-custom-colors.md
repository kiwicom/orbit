# no-custom-colors

Prevents inconsistencies between Orbit and custom colors

## Rule details

The following patterns are considered warnings:

```jsx
const StyledWrapper = styled.div`
  color: #252a31;
  background: #fff;
`;
```

The following patterns are **not** considered warnings:

```jsx
const StyledWrapper = styled.div`
  color: ${({theme}) => theme.orbit.colorTextPrimary};
  background: ${({theme}) => theme.orbit.paletteWhite};
`,
```

## Rule options

```
"orbit-components/no-custom-colors": <enabled>
```

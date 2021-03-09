# no-deprecated-token

The aim of this rule is to prevent usage of deprecated design tokens defined inside `@kiwicom/orbit-design-tokens`.
Since `@kiwicom/orbit-design-tokens` are exposed for usage from `@kiwicom/orbit-components` the rule prevents usage of them inside `styled-components` or in Javascript code when it's a part of member expression.

For the full list of design tokens provided by `@kiwicom/orbit-design-tokens` check the main documentation site [orbit.kiwi](https://orbit.kiwi).

The `--fix` option on the command line automatically fixes problems reported by this rule.

## Rule details

As an error is considered every usage of **some deprecated token** in every member expression:

```jsx
const StyledDiv = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.orbit.someDeprecatedToken};
`
```

```jsx
const mixin = css`
  color: ${({ theme: { orbit }, active }) => active ? orbit.someDeprecatedToken : orbit.anotherDeprecatedToken};
`
```

As an error is **not** considered usage of a design token that is not marked as deprecated. 

## Rule options

```
"orbit-components/no-deprecated-token": <enabled>
```

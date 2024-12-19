# Media queries

The `orbit-components` package contains several media queries that are based on a mobile-first approach.

The breakpoints are part of the theme and have the following values:

| Name         | Applies from width |
| :----------- | :----------------- |
| mediumMobile | `414px`            |
| largeMobile  | `576px`            |
| tablet       | `768px`            |
| desktop      | `992px`            |
| largeDesktop | `1200px`           |

## Constants

We export an enum `QUERIES` and an object `TOKEN` that can help with the usage of our tokens.

The `QUERIES` enum contains all the breakpoints.

```ts
export enum QUERIES {
  MEDIUMMOBILE = "mediumMobile",
  LARGEMOBILE = "largeMobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
  LARGEDESKTOP = "largeDesktop",
}
```

The `TOKEN` object contains the breakpoints as keys, associated with the corresponding name of the token as value.

```ts
export const TOKEN = {
  mediumMobile: "breakpointMediumMobile",
  largeMobile: "breakpointLargeMobile",
  tablet: "breakpointTablet",
  desktop: "breakpointDesktop",
  largeDesktop: "breakpointLargeDesktop",
} as const;
```

## getBreakpointWidth function

In case you need to access the value of the breakpoint (for testing purposes, for instance) you can use the `getBreakpointWidth` function.

This function can also be used to return formatted strings useful for event listeners, for example.

```ts
getBreakpointWidth(breakpoint: keyof typeof TOKEN, theme: Theme, pure?: boolean) => string | number
```

### Arguments

| Name       | Type                 | Description                                                                                                                                                                       |
| :--------- | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| breakpoint | `keyof typeof TOKEN` | The name of the breakpoint.                                                                                                                                                       |
| theme      | `Theme`              | The theme object.                                                                                                                                                                 |
| pure       | `boolean`            | Optional. If `true`, the function will return the value as number. If false, it will return a string `"(min-width: ${VAL}px)"`, where `VAL` is the value of the breakpoint width. |

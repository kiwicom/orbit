# Theming
Every component from our repo needs to be wrapped inside ThemeProvider. It's HOC component which gives other components context of `theme` prop.

**It's required to wrap all components into ThemeProvider, otherwise there will not be any context of a theme.**

To implement ThemeProvider component into your project you'll need to add the import:
```jsx
import ThemeProvider from "@kiwicom/orbit-components/lib/Theming/ThemeProvider";
```
After adding import into your project you can use it simply like:
```jsx
<ThemeProvider>
  <App>
    ...
  </App>
</ThemeProvider>
```

## Props
Table below contains all types of the props available in ThemeProvider component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| theme         | object                | `defaultTokens` | Object of all design tokens based on [orbit-design-tokens](https://github.com/kiwicom/orbit-design-tokens/).

## Defining your own colors
Firstly, you need to import functional `getTokens` from our repo.
```jsx
import { getTokens } from "@kiwicom/orbit-components/";
```
You can know use it to create alternative theme, e.g. for whitelabels.
```jsx
// define your colors palette
const myPalette = {
  product: {
    light: "#9ae5da",
    lightHover: "#7fded0",
    lightActive: "#64d7c6",
    normal: "#00a991",
    normalHover: "#009882",
    normalActive: "#008f7b",
    dark: "#005448",
  },
}

// returns object with full theme
const altColors = getTokens(myPalette);

// overwrite what you need to
const altTheme = Object.assign({}, tokens, {
	fontSizeTextNormal: "14px",
	fontSizeTextLarge: "16px",
	fontSizeTextSmall: "12px",
});

// use altTheme
<ThemeProvider theme={altTheme}>
  <App>
    ...
  </App>
</ThemeProvider>
```

**You need to merge colors and then merge tokens you wish to change.**

The `myColors` object needs to be in the same shape as original one - check [orbit-design-tokens](https://github.com/kiwicom/orbit-design-tokens/).

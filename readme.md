# Orbit Components

Usage examples in storybook: [https://kiwicom.github.io/orbit-components/](https://kiwicom.github.io/orbit-components/)


## Table of Contents

* [Motivation](#motivation)
* [Installation](#installation)
* [Contributing](#contributing)
* [Icons](#icons)
* [Theming](#theming)

## Motivation

The purpose of this repository is to open-source general UI components in use across Kiwi.com.

It also serves as a testing ground for the best approach when it comes to CSS-in-JS.

## Installation

Orbit Components are served as a [npm package](https://www.npmjs.com/package/@kiwicom/orbit-components).

Add to your project by running:

`npm install @kiwicom/orbit-components`

Or if you are using [Yarn](https://yarnpkg.com/):

`yarn add @kiwicom/orbit-components`

---

## Contributing

Please checkout our [Contribution Guide](./.github/contributing.md). It includes contribution guidelines and information about how to run and develop the project.

## Icons

Orbit Components provides a set of icons easily used following these [instructions](https://github.com/kiwicom/orbit-components/tree/master/src/Icon).

A list of all supported icons is [here](https://kiwicom.github.io/orbit-components/?selectedKind=Icon&selectedStory=List%20of%20all%20icons)


## Theming

Orbit uses `styled-components` Theme provider

```javascript
  import { ThemeProvider } from "styled-components";
  import { defaultTokens } from "@kiwicom/orbit-design-tokens";
  
  ...
  
  return (
    <ThemeProvider theme={{ yourCustomTheme: { black: "#000" }, orbit: defaultTokens }}>
      <Button type="secondary" size="large" />
    </ThemeProvider>
  )
```

### Using custom colors with orbit-components

```javascript
  import { getTokens } from "@kiwicom/orbit-design-tokens"; 
  import { ThemeProvider } from "styled-components";

  const customTokens = getTokens({
    product: {
      light: "#9ae5da",
      lightHover: "#7fded0",
      lightActive: "#64d7c6",
      normal: "#00a991",
      normalHover: "#009882",
      normalActive: "#008f7b",
      dark: "#005448"
    },
  })
  
  <ThemeProvider theme={{ yourCustomTheme: { black: "#000" }, orbit: customTokens }}>
    <Button type="secondary" size="large" />
  </ThemeProvider>
```
  

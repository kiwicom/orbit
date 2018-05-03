# Theming

Theming is based on [cssinjs/theming](https://github.com/cssinjs/theming) and [orbit-design-tokens](https://github.com/kiwicom/orbit-design-tokens) packages.

## Main benefits of cssinjs/theming
- Allow simple merging of themes
- Can be used with multiple css in js solutions (styled-jsx, styled-components)

## Theming sample

### Sample Themed Component
- contains simple [ComponentWithTheme](/src/Theming/ThemedSample.js), which uses 3 design tokens: colorTextPrimary, fontFamily and lineHeightText.
- ComponentWithTheme use provided tokens to style itself and also display token values.
- ComponentWithTheme is exported in two versions
  - as RawComponent which only uses tokens provided by theme prop
  - ThemedComponent which expect usage inside ThemeProvider which provide theme prop

### Theme Provider
- is basically [cssinjs/theming ThemeProvider](https://github.com/cssinjs/theming#themeprovider), except it uses orbit-design-tokens as default theme

### Sample usage
- [Theming.stories.js](src/Theming/Theming.stories.js)
- please look at storybook for details

## Alternative theming solutions
 - https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076
 - https://github.com/ReactTraining/react-broadcast


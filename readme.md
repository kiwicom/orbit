<div align="center">
  <a href="https://orbit.kiwi" target="_blank">
    <img alt="orbit-components" src="https://images.kiwi.com/common/orbit-logo-full.png" srcset="https://images.kiwi.com/common/orbit-logo-full@2x.png 2x" />
  </a>
</div>

<br />

<div align="center">

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

[![minified and gzipped size](https://img.shields.io/bundlephobia/minzip/@kiwicom/orbit-components@latest)](https://bundlephobia.com/package/@kiwicom/orbit-components)

<strong>Orbit-components is a React component library which provides developers with the easiest possible way of building Kiwi.com’s products.</strong>

</div>

---

## Orbit Mission

Orbit aims to bring order and consistency to all of our products and processes. We elevate user experience and increase the speed and efficiency of how we design and build products.

## Installation

`orbit-components` are served as an [npm package](https://www.npmjs.com/package/@kiwicom/orbit-components).

Add them to your project by running:

```bash
// with npm
npm install @kiwicom/orbit-components

// with yarn
yarn add @kiwicom/orbit-components
```

Don't forget to install the [styled-components](https://github.com/styled-components/styled-components/) `^4.0.0` also.

## Usage

1. Import fonts that are used in orbit-components:

```html
<link
  href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
  rel="stylesheet"
/>
```

Or via CSS:

```css
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700");
```

2. Include any of our components in your project and use it:

```jsx
import Alert from "@kiwicom/orbit-components/lib/Alert";

<Alert>Hello World!</Alert>;
```

If you want to use custom theme or dictionary inside your project, it's necessary to wrap your app into `<ThemeProvider>`. See [this document](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/ThemeProvider/README.md) for more information.

For live preview check out [Storybook](https://kiwicom.github.io/orbit/) or [orbit.kiwi](https://orbit.kiwi).

You can also try `orbit-components` live on [CodeSandbox](https://codesandbox.io/s/github/designkiwicom/orbit-sandbox).

## Types

Orbit comes with both Flow and Typescript definitions files, so you can choose what fits your project. However, if you work with Typescript, you need to add type for `styled-components`.

```
// with npm
npm install @types/styled-components --save-dev

// with yarn
yarn add @types/styled-components -D
```

## Main Sections:

- [Components](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/)
- [Icons](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/Icon/README.md)
- [Right to left languages](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/utils/rtl/README.md)
- [Theming](https://github.com/kiwicom/orbit/blob/master/.github/theming.md)
- [Dictionary](https://github.com/kiwicom/orbit/blob/master/docs/src/documentation/05-development/01-guides/02-dictionary.mdx)

## Contributing

We are working on making this project a fully open source. We appreciate any contributions you might make.

[Bug reports](https://github.com/kiwicom/orbit/issues/new?template=bug_report.md) and [feature request](https://github.com/kiwicom/orbit/issues/new?template=feature_request.md) are welcome but, please use the correct template.

Please check out our [Contribution Guide](https://github.com/kiwicom/orbit/tree/master/.github/contribution/README.md). It includes contribution guidelines and information on how to run and develop the project.

## Feedback

We want to provide only components of the highest quality. We can’t do that without your feedback. If you have any suggestions about what we can do to improve components, please report it directly as an [issue](https://github.com/kiwicom/orbit/issues/new/choose) or write to us at **#orbit-components** on Slack.

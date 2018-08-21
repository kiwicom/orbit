<div align="center">
  <a href="https://orbit.kiwi" target="_blank">
    <img alt="orbit-components" src="https://github.com/kiwicom/orbit-components/blob/master/.github/orbit-components.png" srcSet="https://github.com/kiwicom/orbit-components/blob/master/.github/orbit-components@2x.png 2x" height="150px" />
  </a>
</div>

<br />

<div align="center">
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

## Usage
1. Import fonts that are used in orbit-components:
```html
<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700" rel="stylesheet">
```

Or via CSS:
```css
@import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700');
```

2. Include any of our components in your project and use it:
```jsx
import Button from "@kiwicom/orbit-components/lib/Button"
    
<Button>Hello World!</Button>
```

If you want to use a custom theme inside your project, it’s necessary to generate a theme object from `orbit-design-tokens` and use it in `<ThemeProvider />` component. See [this document](https://github.com/kiwicom/orbit-components/tree/master/.github/contribution/theming.md) for more information.

For live preview check out [Storybook](https://kiwicom.github.io/orbit-components/) or [orbit.kiwi](https://orbit.kiwi).
## Main Sections:
* [Components](https://github.com/kiwicom/orbit-components/tree/master/src/)
* [Icons](https://github.com/kiwicom/orbit-components/tree/master/src/Icon/README.md)
* [Theming](https://github.com/kiwicom/orbit-components/tree/master/.github/contribution/theming.md)

## Contributing
We are working on making this project fully open source. We appreciate any contributions you might make.

[Bug reports](https://github.com/kiwicom/orbit-components/issues/new?template=bug_report.md) and [feature request](https://github.com/kiwicom/orbit-components/issues/new?template=feature_request.md) are welcome but, please use the correct template.

Please check out our [Contribution Guide](https://github.com/kiwicom/orbit-components/tree/master/.github/contribution/README.md). It includes contribution guidelines and information on how to run and develop the project.

## Feedback
We want to provide only components of the highest quality. We can’t do that without your feedback. If you have any suggestions about what we can do to improve components, please report it directly as an [issue](https://github.com/kiwicom/orbit-components/issues/new/choose) or write to us at **#orbit-components** on Slack.

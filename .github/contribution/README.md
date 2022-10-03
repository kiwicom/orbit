# Contribution guide

## Table of Contents

- [Contribution guide](#contribution-guide)
  - [Table of Contents](#table-of-contents)
  - [Development Information](#development-information)
    - [Requirements](#requirements)
    - [Technologies we use](#technologies-we-use)
    - [Starting with development](#starting-with-development)
    - [Testing](#testing)
    - [Unit tests](#unit-tests)
    - [Visual regression test](#visual-regression-test)
  - [Contributing to the docs](#contributing-to-the-docs)
  - [Adding a new icon](#adding-a-new-icon)
  - [Props naming convention](#props-naming-convention)
  - [Component design](#component-design)
  - [Commits](#commits)
  - [Versioning](#versioning)

## Development Information

### Requirements

- [Node 14.13+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

### Technologies we use

- [React](https://reactjs.org/docs/getting-started.html) for development
- [Styled-components](https://www.styled-components.com/docs) for styling
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) for testing
- [Cypress](https://www.cypress.io/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction) for development
- [Typescript](https://www.typescriptlang.org/docs) for types
- [Gatsby](https://www.gatsbyjs.com/docs/) for docs

### Starting with development

First, you need to build tokens:

```
yarn tokens build
```

You only need to do this once if you don't plan on changing tokens. Next, run Storybook:

```sh
yarn dev
```

If you want to test `@kiwicom/orbit-components` in your own project:

```sh
yarn global add yalc
cd packages/orbit-components
yalc publish
cd /path/to/your/project
yalc add @kiwicom/orbit-components
```

This should get you started. If want to see new changes in `@kiwicom/orbit-components` reflected in your project, read [yalc documentation](https://github.com/wclr/yalc) to find a workflow that works for you.

### Testing

We encourage adding tests to all components in Orbit. Jest is the testing framework across all types of tests in Orbit.

> Before writing the test for a new component, first check [component testing conventions](./testing-conventions.md).

Types of tests required to pass on every component:

- **Unit tests**
- **Visual regression test**

### Unit tests

For checking the correctness of the component run `yarn test-ci` to perform the same automatic checks as the CI server. You can also run these checks separately by typing:

- `yarn flow` for the static type check
- `yarn eslint` for ESLint check
  - some warnings can be fixed automatically by running `yarn eslint --fix`
- `yarn test` to run all Jest tests

If you need to update tests because of some changes in the code, you can do it by running `yarn test -u`. We strongly recommend testing your component in different types of browsers across different platforms.

### Visual regression test

See our testing conventions for more information about [visual regression tests](./testing-conventions.md).

## Contributing to the docs

See our full guide to [contributing to our docs](./docs.md)

## Adding a new icon

It's easy to update or add a new icon because SVGs are automatically converted to React components. See [this documentation](./icons.md) for more information.

## Props naming convention

We want to ensure that all props are consistent across all components. [This convention](./props-convention.md) can help choose the right prop names in for your new components.

## Component design

Check [this section](./component-design.md) for a complete description of the structure of the files which are necessary for a Component check.

## Commits

We are using [this commits convention](./commits.md) to ensure that all commits are pushed in some logic from all devs.

## Versioning

We release orbit-components under Semantic Versioning 2.0. [See here](https://semver.org/).

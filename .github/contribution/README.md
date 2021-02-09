# Contribution guide

## Table of Contents

- [Development Information](#development-information)
  - [Requirements](#requirements)
  - [Technologies we use](#technologies-we-use)
  - [Starting with development](#starting-with-development)
  - [Testing](#testing)
- [Contributing to the docs](./docs.md)
- [Adding a new icon](#adding-a-new-icon)
- [Props naming convention](#props-naming-convention)
- [Component design](#component-design)
- [Commits](#commits)
- [Versioning](#versioning)

## Development Information

### Requirements

- [Node 8.9+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

### Technologies we use

- [React](https://reactjs.org/docs/getting-started.html) for development
- [styled-components](https://www.styled-components.com/docs) for styling
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) for testing

### Starting with development

For local development you can use:

- `yarn workspace @kiwicom/orbit-components storybook`

In case you want to develop in your current project:

- `yarn add @kiwicom/orbit-components`
- in current folder `yarn watch`
- in current folder `yarn link`
- in the project where you want to use this project `yarn link @kiwicom/orbit-components`

See [Yarn Link](https://yarnpkg.com/lang/en/docs/cli/link/) documentation for more information.

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

We are still working on this, we will add documentation as soon as possible.

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

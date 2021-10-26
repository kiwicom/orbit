# Contribution guide

## Table of Contents

- [Commit message & history](#commit-message-history)
- [Repository structure](#repository-structure)
- [Environment requirements](#environment-requirements)
- [Testing](#testing)

---

# Commit message & history

Please read our [guidelines for authoring commits](commits.md).

# Repository Structure

This is a monorepo containing a few Orbit packages:

## `@kiwicom/orbit-components`

- `/packages/orbit-components/src` – All Source files
- `/packages/orbit-components/es` – **GENERATED** ES compliant modules
- `/packages/orbit-components/lib` – **GENERATED** CJS compatible modules
- `/packages/orbit-components/config` – Build and validation scripts, test configuration
- `/packages/orbit-components/.storybook` – Storybook configuration

## `@kiwicom/babel-plugin-orbit-components`

- `/packages/babel-plugin-orbit-components/index.js` – Source file
- `/packages/babel-plugin-orbit-components/scripts` – Test scripts

## Root

- `/config` – Common stuff like ESLint configuration
- `/flow-typed` – Flow library definitions

# Environment Requirements

- [Node 8.9+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

# How to develop

Install dependencies:

```sh
yarn install
```

For developing Orbit components run:

```sh
yarn dev
```

If you would like to try out the development version of one of our packages, we recommend using [yalc](https://github.com/whitecolor/yalc):

```sh
yarn global add yalc
```

This is how you would link `@kiwicom/orbit-components`:

```sh
cd packages/orbit-components
yalc publish
cd path/to/your/project
yalc add @kiwicom/orbit-components
```

Then run the following every time you make new changes in `packages/orbit-components` that you want to try out:

```sh
yalc push
```

This is a shortcut for `yalc publish --push`, which "publishes" the package again and updates it in every project that installed it.

# Testing

Run `yarn test-ci` to perform the same automatic checks as the CI server. You can also run some of these checks separately:

- `yarn flow` - Flow check
- `yarn tsc` - TypeScript check
- `yarn eslint .` - ESLint check
- `yarn test` - run all Jest tests

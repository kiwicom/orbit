# Contribution guide

## Table of Contents

- [Contribution guide](#contribution-guide)
  - [Table of Contents](#table-of-contents)
  - [Development Information](#development-information)
    - [Requirements](#requirements)
    - [Technologies we use](#technologies-we-use)
    - [Repository Structure](#repository-structure)
      - [`@kiwicom/orbit-components`](#kiwicomorbit-components)
      - [`@kiwicom/babel-plugin-orbit-components`](#kiwicombabel-plugin-orbit-components)
      - [`@kiwicom/orbit-design-tokens`](#kiwicomorbit-design-tokens)
      - [`@kiwicom/orbit-tailwind-preset`](#kiwicomorbit-tailwind-preset)
      - [Root](#root)
    - [How to develop](#how-to-develop)
    - [How to add new tokens](#how-to-add-new-tokens)
    - [Testing](#testing)
    - [Unit tests](#unit-tests)
    - [Visual regression test](#visual-regression-test)
  - [Contributing to the docs](#contributing-to-the-docs)
  - [Adding a new icon](#adding-a-new-icon)
  - [Props naming convention](#props-naming-convention)
  - [Component design](#component-design)
  - [Commits](#commits)
  - [Publish releases](#publish-releases)
  - [Versioning](#versioning)

---

## Development Information

### Requirements

- [Node 14.13+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

### Technologies we use

- [React](https://react.dev/learn) for development
- [Styled-components](https://www.styled-components.com/docs) for styling
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) for testing
- [Cypress](https://www.cypress.io/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction) for development
- [Typescript](https://www.typescriptlang.org/docs) for types
- [Gatsby](https://www.gatsbyjs.com/docs/) for docs

### Repository Structure

This is a monorepo containing a few Orbit packages:

#### `@kiwicom/orbit-components`

- `/packages/orbit-components/src` – All Source files
- `/packages/orbit-components/es` – **GENERATED** ES compliant modules
- `/packages/orbit-components/lib` – **GENERATED** CJS compatible modules
- `/packages/orbit-components/config` – Build and validation scripts, test configuration
- `/packages/orbit-components/.storybook` – Storybook configuration

#### `@kiwicom/babel-plugin-orbit-components`

- `/packages/babel-plugin-orbit-components/index.js` – Source file
- `/packages/babel-plugin-orbit-components/scripts` – Test scripts

#### `@kiwicom/orbit-design-tokens`

- `/packages/orbit-design-tokens/src` – Source files
- `/packages/orbit-design-tokens/dist` – **GENERATED** Design tokens

#### `@kiwicom/orbit-tailwind-preset`

- `/packages/orbit-tailwind-preset/src` – Source files
- `/packages/orbit-tailwind-preset/dist` – **GENERATED** Tailwind preset

#### Root

- `/scripts` – Scripts for development and publishing

### How to develop

Install dependencies:

```sh
yarn install
```

Build the design tokens, the tailwind preset, and the components:

```sh
yarn tokens build
yarn tailwind-preset build
yarn components build
```

For developing Orbit components, run Storybook:

```sh
yarn dev
```

If you would like to try out the development version of one of our packages, we recommend using [yalc](https://github.com/wclr/yalc). If you do not have it installed, consider installing it globally:

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

### How to add new tokens

To introduce new design tokens to the Orbit design system, we rely on the versatile capabilities of style-dictionary. Whether you're enhancing specific components or introducing global tokens, the process is straightforward and consistent.

Follow these steps to seamlessly integrate new tokens:

Navigate to Token Definitions: Begin by creating or editing a JSON file within the [dictionary/definitions folder](https://github.com/kiwicom/orbit/tree/master/packages/orbit-design-tokens/src/dictionary/definitions). This is where the token definitions reside.

Craft Token Entries: Craft your new token entries within the JSON file. For instance, if you're adding a token to the Button component, structure it like the following example:

```json
{
  "component": {
    "button": {
      "stone": {
        "background": {
          "type": "color",
          "value": "{foundation.palette.stone.normal}"
        }
        // ... other properties
      }
    }
  }
}
```

More about token schema you can read in [SCHEMA documentation](https://github.com/kiwicom/orbit/blob/master/packages/orbit-design-tokens/docs/SCHEMA.md)

Refer to the token schema documentation for a comprehensive understanding of token properties.

- Categorize Tokens: Organize your tokens under appropriate categories, either globally or component-specific. This structure ensures clarity and maintainability.

Generate Tokens: Once your token schema is ready, execute the `yarn tokens build` command. This triggers style-dictionary to transform your definitions into a usable output.

```bash
yarn tokens build
```

This triggers style-dictionary to transform your definitions into a usable output.

- Validation and Usage: A successful build, without errors, signifies the readiness of your tokens. They can now be effectively utilized within other packages such as _@kiwicom/orbit-components_, _@kiwicom/tailwind-preset_, or _@kiwicom/orbit.kiwi_.

By adhering to these steps and embracing the style-dictionary workflow, you'll seamlessly extend the design vocabulary of the Orbit design system, fostering consistency and efficiency in design and development.

Feel free to seek further assistance or clarity if needed. Your contributions continue to shape the cohesive Orbit ecosystem.

### Testing

We encourage adding tests to all components in Orbit. Jest is the testing framework across all types of tests in Orbit.

> Before writing the test for a new component, first check [component testing conventions](contribution/testing-conventions.md).

Types of tests required to pass on every component:

- **Unit tests**
- **Visual regression test**

### Unit tests

For checking the correctness of the component run `yarn test-ci` to perform the same automatic checks as the CI server. You can also run these checks separately by typing:

- `yarn check:types` - TypeScript check
- `yarn eslint` for ESLint check
  - some warnings can be fixed automatically by running `yarn eslint --fix`
- `yarn test` to run all Jest tests

If you need to update tests because of some changes in the code, you can do it by running `yarn test -u`. We strongly recommend testing your component in different types of browsers across different platforms.

### Visual regression test

See our testing conventions for more information about [visual regression tests](contribution/testing-conventions.md).

## Contributing to the docs

See our full guide to [contributing to our docs](contribution/docs.md)

## Adding a new icon

It's easy to update or add a new icon because SVGs are automatically converted to React components. See [this documentation](contribution/icons.md) for more information.

## Props naming convention

We want to ensure that all props are consistent across all components. [This convention](contribution/props-convention.md) can help choose the right prop names in for your new components.

## Component design

Check [this section](contribution/component-design.md) for a complete description of the structure of the files which are necessary for a Component check.

## Commits

Please read our [guidelines for authoring commits](contribution/commits.md).

## Publish releases

We use Lerna to publish new versions of Orbit packages. To publish a new version we use a GitHub Action workflow which is triggered **manually** from the GitHub UI. The workflow is called `Publish` and it's located in the `Actions` tab of the repository, see [here](https://github.com/kiwicom/orbit/actions/workflows/publish.yml). To trigger the workflow, click on the `Run workflow` button, leave the `master` branch selected and click on the `Run workflow` button again. The workflow will then run and publish the new versions of the packages to NPM as well as create GitHub releases for each package.

If you want to have a preview of the changes that Lerna will make, you can select the `Dry run` checkbox. This will run the workflow in a dry run mode and it will not publish anything. Instead, it will print out the versions that will be published and the diffs of the changelogs. This is useful if you want to check what will be published before actually publishing it.

## Versioning

We release orbit-components under Semantic Versioning 2.0. [See here](https://semver.org/).

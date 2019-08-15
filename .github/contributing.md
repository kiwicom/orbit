# Contribution guide

## Table of Contents

- [Commit Message](#commit-message)
- [Commit history](#commit-history)
- [Developement Information](#development-information)
  - [Repository structure](#repository-structure)
  - [Requirements](#requirements)
  - [Testing](#testing)

---

## Commit Message

Please see https://chris.beams.io/posts/git-commit/ for information on how to write commit messages.

## Commit History

We are using merges with squashing commits.

#### Bad:

```
- Add React
- add react-dom
- fix deps
- another fix
- fix test
```

#### Good:

```
- add React & React-Dom
- resolve peer dependencies of React
```

## What to not forget during code reviews

- Never click on grey "update branch" button on GitHub - it merges master into reviewed base branch, which leads to messed up history
- Please make sure you've deleted base branch as well by clicking on according GitHub button that appears right after you confirm merge

# Development Information

## Repository Structure

- `/src` - All Source files
- `/es` - **GENERATED** ES compliant modules
- `/lib` - **GENERATED** most compatible modules
- `/config` - All test and build configuration can be found here
- `/flow-typed` - **GENERATED** types for Flow
- `/.storybook` - Storybook configuration

## Requirements

- [Node 8.9+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

## How to develop

For local development you can use:

- `yarn storybook`

In case you want to develop in your current project:

- `yarn add @kiwicom/orbit-components`
- `yarn watch` in this folder
- `yarn link` in this folder
- `yarn link @kiwicom/orbit-components` in the project where you want to use this project

See [Yarn Link](https://yarnpkg.com/lang/en/docs/cli/link/) documentation for more information.

## Testing

Run `yarn test-ci` to perform the same automatic checks as the CI server. You can also run these checks separately:

- `yarn flow` - static type check
- `yarn eslint` - ESLint, some warnings can be fixed automatically with `yarn eslint --fix`
- `yarn test` - run all Jest tests

## Formatting

Run `yarn prettier` before pushing your code to the repository.

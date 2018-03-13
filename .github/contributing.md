# Contribution guide

## Table of Contents

* [Commit Message](#commit-message)
* [Commit history](#commit-history)
* [Developement Information](#development-information)
  * [Repository structure](#repository-structure)
  * [Requirements](#requirements)
  * [Testing](#testing)

---

## Commit Message

Please see https://chris.beams.io/posts/git-commit/ for information on how to write commit messages.

## Commit History

We are using merges in this project without squashing. Please pay attention that your commits make sense and aren't broken up into illogical chunks. Please squash WIP commits, or adjust them so that it is clear what their purpose was.

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

# Development Information

## Repository Structure

- `/src` - All Source files
- `/es` - **GENERATED** ES compliant modules
- `/lib` - **GENERATED** most compatible modules
- `/config` - All test and build configuration can be found here
- `/flow-typed` - **GENERATED** types for Flow
- `/.storybook` - Storybook configuration

## Requirements

* [Node 8.9+](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)

## How to develop

For local development you can use:

* `yarn storybook`

In case you want to develop in your current project:

* `yarn add @kiwicom/orbit-components`
* `yarn watch` in this folder
* `yarn link` in this folder
* `yarn link @kiwicom/orbit-components` in the project where you want to use this project

See [Yarn Link](https://yarnpkg.com/lang/en/docs/cli/link/) documentation for more information.

## Testing

This project uses [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/). Please run `yarn test-ci` from the root folder. By doing this we can enforce the same rules across all projects.

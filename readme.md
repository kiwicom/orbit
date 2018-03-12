# Kiwi.com UI library

## Table of Contents

* [Motivation](#motivation)
* [Repository Structure](#repository-structure)
* [Contributing](#contributing)
* [Requirements](#requirements)
* [How to Develop](#how-to-develop)
* [How to Test](#how-to-test)

## Motivation

The purpose of this repository is to open-source general UI components in use across Kiwi.com.

It also serves as a testing ground for the best approach when it comes to CSS-in-JS.

## Repository Structure

## Contributing

Please checkout our [Contribution Guide](./.github/contributing.md)

## Requirements

* [Node 8.9+](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)

## How to develop

For local development you can use:

* `yarn storybook`

In case you want to develop in your current project:

* `yarn add @kiwicom/balkan-ui`
* `yarn watch` in this folder
* `yarn link` in this folder
* `yarn link @kiwicom/balkan-ui` in the project where you want to use this project

See [Yarn Link](https://yarnpkg.com/lang/en/docs/cli/link/) documentation for more information.

## How to test

This project uses [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/). Please run `yarn test-ci` from the root folder. By doing this we can enforce the same rules across all projects.

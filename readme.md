# Kiwi.com UI library

## Table of Contents

* [Motivation](#motivation)
* [Repository Structure](#repository-structure)
* [Contributing](#contributing)

## Motivation

The purpose of this repository is to open-source general UI components in use across Kiwi.com.

It also serves as a testing ground for the best approach when it comes to CSS-in-JS. We have chosen [Styled components](https://www.styled-components.com) and [Styled JSX](https://github.com/zeit/styled-jsx) as the two front-runners. In time this repository will be changed to use only one technology. This discussion is aggregated here: https://github.com/kiwicom/react-kiwi-ui/issues/7.

## Repository Structure

This repository is broken up into 3 projects.

| Project | Technology                                             | Description                     |
| :------ | :----------------------------------------------------- | :------------------------------ |
| BLKN    | [Styled JSX](https://github.com/zeit/styled-jsx)       | All Components for BLKN project |
| Kiwicom | [Styled Components](https://www.styled-components.com) | All Components for Kiwi.com     |
| Icons   |                                                        | All Kiwi Icons                  |

The root folder contains the global ESLint rules, Yarn Workspaces and Flow. Please refer to the README files in all project subfolder for information on how to run them.

## Contributing

Please checkout https://github.com/kiwicom/react-kiwi-ui/blob/master/contributing.md

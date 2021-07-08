# Contributing to the docs

Thank you for your interest in contributing to the Orbit docs.
It's efforts like yours that help keep our docs useful.

## Table of Contents

- [Location](#location)
- [Running the docs locally](#running-the-docs-locally)
- [Creating new component docs](#creating-new-component-docs)
- [Code style](#code-style)
- [Prose style](#prose-style)

## Location

Our docs live mostly in two places.

General guidelines are in the [docs folder](../../docs),
mostly in MDX files in the [documentation folder](../../docs/src/documentation).
The structure of that folder matches the structure on [our built docs site](https://orbit.kiwi).

The basic API (props tables and such) for each component
is in ReadMe files next to the component
([example button ReadMe](https://github.com/kiwicom/orbit/blob/master/packages/orbit-components/src/Button/README.md)).

## Running the docs locally

Our docs site is based on [Gatsby](https://www.gatsbyjs.com/docs/).

To run the site locally, start by cloning this repository.

```shell
git clone git@github.com:kiwicom/orbit.git
```

Navigate to the created directory.

```shell
cd orbit
```

Install all the necessary packages:

```shell
yarn
```

And start the site.

```shell
yarn dev:docs
```

Your site is now running at `http://localhost:8000`.

Now you can make a change to a file in `docs/src/` (such as the docs in `docs/src/documentation/`)
and your site updates automatically.

## Creating new component docs

To create new guidelines for a component,
follow the [template for components](https://github.com/kiwicom/orbit/blob/master/docs/src/documentation/03-components/component.md.template).
Place it in the right category for the component.

If the component has a React API already defined,
put it in a folder with a `meta.yml` file as with most other components.

## Code style

To keep the files used to build our docs clear, we enforce standard Markdown code styling.

We use [ESLint](https://eslint.org/) to enforce the style for our MDX files
(just as we do for our JavaScript and TypeScript files).
The specific rules are part of an extension for `eslint-plugin-mdx`,
which you can find in [our ESLint settings](../../.eslintrc.js)
(look for the rules that extend `plugin:mdx/recommended`).

To fix any problems that can be fixed automatically,
you can use an ESLint plugin for your IDE
or run `yarn eslint:docs` from a terminal.

### Line length

In addition to the automatic fixes,
we also prefer it when lines are no longer than 80 characters.
This helps ensure the code is readable even in narrow spaces.
It's known as [semantic line breaks](https://sembr.org/)

But we don't enforce a strict limit to line length.
If we did, automatic tools would rearrange lines at any change.
Then reviews would be more difficult:
`git diff` would show changes based on formatting rather than meaning.

So we try to break lines at semantic breaks.
This means having new sentences on new lines.
This should help keep the differences for review about semantics,
and not formatting.

This style is known as ventilated prose.
Read [more about the reasons to use it](https://asciidoctor.org/docs/asciidoc-recommended-practices/#one-sentence-per-line).

## Prose style

In addition to the linting for code style in our docs,
we also lint to ensure the docs follow our [style guide](https://orbit.kiwi/content/voice-tone/)
as much as possible.

For this, we use [Vale](https://docs.errata.ai/vale/about).
Our specifics can be found in the [styles directory](../styles),
with rules in the `Kiwi` folder and accepted spellings in [accept.txt](../styles/Vocab/Kiwi/accept.txt).

To check your prose yourself, [install Vale](https://docs.errata.ai/vale/install).
Or you can create a pull request
and the Vale GitHub Action adds comments pointing out places that could be improved.

The rules aren't perfect at detecting problems,
so feel free to ignore any suggestions that seem wrong.

## Checking links

It's important for working documentation to have working links.

To achieve this, after building the site, we check all built HTML for working links.
Any broken link prevents a pull request from being merged.

To check for yourself,
run `yarn check-links` from a terminal at the root of this repository.
Note that you need to have built the site first (run `yarn orbit-kiwi build`).

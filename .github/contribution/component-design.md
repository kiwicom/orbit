# Component design

## Component directory structure

Structure of the directory where the necessary files for a Component are located.

<pre>
<strong>├─ __tests__</strong>
<strong>  └── index.test.tsx</strong> ........... Component's tests
<strong>├─ Component.ct.tsx</strong>............. Component's visual tests
<strong>├─ Component.ct-story.tsx</strong>....... Component's story to be used in visual tests
<strong>├─ index.tsx</strong> ................... Component's logic and rendering
<strong>├─ index.d.ts</strong> .................. Component's types
<strong>├─ Component.stories.tsx</strong> ....... Component's Storybook
<strong>├─ consts.ts</strong> ................... Component's constants
<strong>└─ README.md</strong> ................... Component's documentation
</pre>

## Styling

We use [Tailwind CSS](https://tailwindcss.com/) for styling. Custom Tailwind classes can be used but should be avoided. All design tokens from `orbit-design-tokens` have classes that apply their value to the different possible CSS properties.

## Component types

For component typing we use [Typescript](https://www.typescriptlang.org/). Always create `index.d.ts` file, where the declaration of types is stored. We use `readonly` types to be more strict in setting up values of the props. When the purpose of the prop is really optional, its type should me marked as optional (`?`).

Every component should accept `dataTest` and `id` props. For this, we extend the `Globals` type.

```ts
import type * as Common from "../common/types";

export interface Props extends Common.Globals {
  readonly size?: "small" | "medium" | "large";
  readonly children: React.ReactNode;
}
```

## Component constants

We use constants for props that have options. In this way, we can easily maintain consistency. Just export your options as objects with `uppercase`.

```jsx
export const SIZE_OPTIONS = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};
```

## Storybook

All components should have stories that display their different variations and behaviors.
Stories should be written in the file `Component.stories.tsx`.
For more information about using Storybook check the [official documentation](https://storybook.js.org/basics/guide-react/).

## Testing

All components should have unit tests and visual tests. We use [Jest](https://jestjs.io/) for unit testing and their tests should be written in the file `__tests__/index.test.tsx`.

Visual tests are performed using [Playwright](https://playwright.dev/). They should be written in the file `Component.ct.tsx` and should be used to test the component in different states and with different props.

For more information about component testing check the [dedicated page](./testing-conventions.md).

## Component documentation

Documentation is one of the most important elements of Orbit components. It’s necessary to add `README.md` to the main directory of the Component.

**Readme should contain:**

- Basic import
- Example of usage in default state
- Table of all props
- Options of enum proptypes
- Functional specs
  - Explains all special behaviors of the Component

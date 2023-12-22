# Component design

## Component directory structure

Structure of the directory where the necessary files for a Component are located.

<pre>
<strong>├─ _tests_</strong>
<strong>  └── index.test.tsx</strong> ........... Component's tests
<strong>├─ index.tsx</strong> ................... Component's logic and rendering
<strong>├─ index.d.ts</strong> .................. Component's types
<strong>├─ Component.stories.tsx</strong> ....... Component's Storybook
<strong>├─ consts.ts</strong> ................... Component's constants
<strong>└─ README.md</strong> ................... Component's documentation
</pre>

## Component structure

We want to ensure that every Component has the same structure, so it's easy to understand where all the logic and styles are.

### Styling

We use `styled-components` (CSS-in-JS) for styling. When you want to style something in the Component, follow the structure below. For more information about `styled-components`, please check their [docs](https://www.styled-components.com/docs).

```jsx
const StyledComponent = styled.div`
  margin: 0;
`;
```

### Default props

It’s necessary to assign every styled component using a theme defaultProps, which contains all the tokens from `orbit-design-tokens`.

```jsx
StyledComponent.defaultProps = {
  theme: defaultTheme,
};
```

### Render

Set up `defaultProps` by assigning default values to the props. Destructure them and finally return the Component.

```jsx
const Component = (props: Props) => {
  const { size = SIZE_OPTIONS.LARGE } = props;
  return <StyledComponent size={size}>...</StyledComponent>;
};
```

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

## Storybook structure

A preview of the Component is written in the structure of the `Component.stories.js` file. We are using [storybook-chapters](https://github.com/Checkfront/react-storybook-addon-chapters) and [storybook-styles](https://www.npmjs.com/package/@sambego/storybook-styles) addons. For more informations about using Storybook check this [doc](https://storybook.js.org/basics/guide-react/).

### Stories

You can add a new Component to storybook by adding the code below.

`storiesOf("Component", module)`

### Chapters

At the very least, it’s necessary to have the `Default` and `Playground` chapters defined. The `Default` chapter contains a Component without any additional props. The `Playground` chapter contains a Component with the possibility to change all defined props for full customization. Follow the structure of the code below. For more information check the Chapter add-on doc.

```jsx
.addWithChapters("Default", () => {
  const children = text("Children", "Hello World!");
  return {
    title: "Default",
    info: "Info about the Component in the Default state",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => <Component>{children}</Component>,
          },
        ],
      },
    ],
  };
});
```

## Component documentation

Documentation is one of the most important elements of Orbit components. It’s necessary to add `README.md` to the main directory of the Component.

**Readme should contain:**

- Basic import
- Example of usage in default state
- Table of all props
- Options of enum proptypes
- Functional specs
  - Explains all special behaviors of the Component

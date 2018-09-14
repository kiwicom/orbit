# Component design

## Component directory structure

Structure of the directory where the necessary files for a Component are located.

<pre>
<strong>├─ _tests_</strong>
<strong>  └── index.test.js</strong> ........... Component's tests
<strong>├─ index.js</strong> .................... Component's logic
<strong>├─ index.js.flow</strong> ............... Component's types
<strong>├─ Component.stories.js</strong> ........ Component's Storybook
<strong>├─ consts.js</strong> ................... Component's constants
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
  theme: defaultTokens,
};
```
### Render
Set up `defaultProps` by assigning default values to the props. Destructurize them and finally return the Component.

```jsx
const Component = (props: Props) => {
  const { size = SIZE_OPTIONS.LARGE } = props;
  return (
    <StyledComponent size={size}>
      ...
    </StyledComponent>
  );
};
```

## Component Flow typing
For static typing we use [Flow](https://flow.org/en/docs/react/). Always create `index.js.flow` file, where the declaration of types is stored. We use `strict` and `read-only` types to be more strict in setting up values of the props, `optional` types are used only when the purpose of the prop is really optional.

Every component should have `dataTest` prop. For this cases, we are using `globals` flow type.
```jsx
// @flow
import type { Globals } from "../common/common.js.flow";
    
export type Props = {|
  +size?: "small" | "medium" | "large",
  +children: React$Node,
  ...Globals,
|};
    
declare export default React$ComponentType<Props>;
```

## Component constants
We use constants for props that have options. In this way, we can easily maintain consistency. Just export your options as objects with `uppercase`.

```jsx
// @flow
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
* Basic import
* Example of usage in default state
* Table of all props
* Options of enum proptypes
* Functional specs
  * Explains all special behaviors of the Component







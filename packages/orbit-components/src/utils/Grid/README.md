# Grid

To implement the Grid component in your project, add the import:

```jsx
import Grid from "@kiwicom/orbit-components/lib/utils/Grid";
```

Then you can use it:

```jsx
<Grid columns="4fr minmax(256px, 1fr)">
  // You can use your custom components
  <Section>Hello world!</Section>
  <SideBar>I'm content on the right side.</SideBar>
</Grid>
```

## Props

The table below contains all of the props available in the Grid component.

| Name         | Type                       | Default | Description                                                                                      |
| :----------- | :------------------------- | :------ | :----------------------------------------------------------------------------------------------- |
| **children** | `React.Node`               |         | The content of the Grid. [See Usage](#usage)                                                     |
| className    | `string`                   |         | If needed, you can extend the Grid component with `styled` and add your own styles.              |
| columns      | `string`                   | `"1fr"` | Property alias for `grid-template-columns`.                                                      |
| columnGap    | `string`                   |         | Gap size for `columns`.                                                                          |
| dataTest     | `string`                   |         | Optional prop for testing purposes.                                                              |
| desktop      | [`Object`](#media-queries) |         | Object for properties for desktop viewports. [See Media queries](#media-queries)                 |
| as           | `string`                   | `"div"` | The valid DOM element used for the root node.                                                    |
| gap          | `string`                   |         | Gap size for `columns` and `rows`.                                                               |
| inline       | `boolean`                  | `false` | If `true`, the Grid will have `display: inline-grid`; otherwise it will be `display: grid`.      |
| tablet       | [`Object`](#media-queries) |         | Object for setting up properties for tablet viewports. [See Media queries](#media-queries)       |
| largeDesktop | [`Object`](#media-queries) |         | Object for setting up properties for largeDesktop viewports. [See Media queries](#media-queries) |
| largeMobile  | [`Object`](#media-queries) |         | Object for setting up properties for largeMobile viewports. [See Media queries](#media-queries)  |
| maxWidth     | `string`                   |         | Alias for the `max-width` property of the Grid component.                                        |
| mediumMobile | [`Object`](#media-queries) |         | Object for setting up properties for mediumMobile viewports. [See Media queries](#media-queries) |
| rows         | `string`                   | `"1fr"` | Property alias for `grid-template-rows`.                                                         |
| rowGap       | `string`                   |         | The gap size for `rows`.                                                                         |
| width        | `string`                   |         | Alias for the `width` property of the Grid component.                                            |
| spaceAfter   | `enum`                     |         | Additional `padding` to bottom of the Stack.                                                     |

### Media Queries

When you need to specify specific behaviours for the Grid component on different viewports, use the appropriate properties.
The component has `mediumMobile`, `largeMobile`, `tablet`, `desktop`, and `largeDesktop`, which behave the same as [mediaQuery](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/utils/mediaQuery) functions.
All of the object for these properties have the same properties and none is required.

| Name       | Type      | Default  | Description                                                                      |
| :--------- | :-------- | :------- | :------------------------------------------------------------------------------- |
| columns    | `string`  | `"none"` | Property alias for `grid-template-columns`.                                      |
| columnGap  | `string`  |          | Gap size for `columns`.                                                          |
| gap        | `string`  |          | Gap size for `columns` and `rows`.                                               |
| inline     | `boolean` | `false`  | If `true`, the grid will have `display: inline-grid`; otherwise `display: grid`. |
| maxWidth   | `string`  |          | Alias for the `max-width` property of the Grid component.                        |
| rows       | `string`  | `"none"` | Property alias for `grid-template-rows`.                                         |
| rowGap     | `string`  |          | Gap size for `rows`.                                                             |
| width      | `string`  |          | Alias for the `width` property of the Grid component.                            |
| spaceAfter | `enum`    |          | Additional `padding` to bottom of the Stack.                                     |

### enum

| spaceAfter   |
| :----------- |
| `"none"`     |
| `"smallest"` |
| `"small"`    |
| `"normal"`   |
| `"medium"`   |
| `"large"`    |
| `"largest"`  |

## Why you should use this component

The main focus of this component is to provide an API that solves the most common issues and gives you a quick how to start using CSS grids in your project without worries.

By default, this Grid component handles:

- Compiling the `repeat` function to the old specification
- Auto-placement of its children

## Usage

This component works the same way as a native CSS grid, so it expects the same hierarchy when it comes to using children.

For instance, when you want to define a Grid that has two columns and two rows, the complete usage should look like this:

```jsx
import Grid from "@kiwicom/orbit-components/lib/utils/Grid";

// your custom component to fill each cell in the grid
import Cell from "./Cell";

const Example = () => (
  <Grid columns="1fr 1fr" rows="1fr 1fr">
    <Cell>First column, first row</Cell>
    <Cell>Second column, first row</Cell>
    <Cell>First column, second row</Cell>
    <Cell>Second column, second row</Cell>
  </Grid>
);
```

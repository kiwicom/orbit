# Grid
The main purpose of the Grid component is to provide compatible version of **CSS Grid for IE10+** that can work only with the old specification of grid properties and options. 

To implement Grid component into your project you'll need to add the import:
```jsx
import Grid from "@kiwicom/orbit-components/lib/utils/Grid";
```
After adding import into your project you can use it simply like:
```jsx
<Grid columns="4fr minmax(256px, 1fr)">
  // you can use your custom components
  <Section>
    Hello world!
  </Section>
  <SideBar>
    I'm content on the right side.
  </SideBar>
</Grid>
```

## Props
Table below contains all types of the props available in the Grid component.
    
| Name          | Type                        | Default         | Description                      |
| :------------ | :-------------------------- | :-------------- | :------------------------------- |
| **children**  | `React.Node`                |                 | The content of the Grid. [See Usage](#usage)
| className     | `string`                    |                 | If needed, you can extend the Grid component with the `styled` factory and add your styles.
| columns       | `string`                    | `"1fr"`         | Property alias for `grid-template-columns`, [see known limitations](#known-limitations).
| columnGap     | `string`                    |                 | The gap size for `columns`.
| dataTest      | `string`                    |                 | Optional prop for testing purposes.
| desktop       | [`Object`](#media-queries)  |                 | Object for setting up properties for the desktop viewport. [See Media queries](#media-queries)
| element       | `string`                    | `"div"`         | The valid DOM element used for the root node.
| gap           | `string`                    |                 | The gap size for `columns` and `rows`.
| inline        | `boolean`                   | `false`         | If `true`, the Grid will have `display: inline-grid`, otherwise `display: grid`.
| tablet        | [`Object`](#media-queries)  |                 | Object for setting up properties for the tablet viewport. [See Media queries](#media-queries)
| largeDesktop  | [`Object`](#media-queries)  |                 | Object for setting up properties for the largeDesktop viewport. [See Media queries](#media-queries)
| largeMobile   | [`Object`](#media-queries)  |                 | Object for setting up properties for the largeMobile viewport. [See Media queries](#media-queries)
| maxWidth      | `string`                    |                 | Alias for the `max-width` property of the Grid component.
| mediumMobile  | [`Object`](#media-queries)  |                 | Object for setting up properties for the mediumMobile viewport. [See Media queries](#media-queries)
| rows          | `string`                    | `"1fr"`         | Property alias for `grid-template-rows`, [see known limitations](#known-limitations).
| rowGap        | `string`                    |                 | The gap size for `rows`.

### Media Queries
When you need to specify some different behaviour of the Grid component on different viewport, you can use properties for it.
There are `mediumMobile`, `largeMobile`, `tablet`, `desktop` and `largeDesktop` available and it behaves the same as [mediaQueries](https://github.com/kiwicom/orbit-components/tree/master/src/utils/mediaQuery) functions.
All this properties - objects have the some own properties and none is required.

| Name          | Type                        | Default         | Description                      |
| :------------ | :-------------------------- | :-------------- | :------------------------------- |
| columns       | `string`                    | `"none"`        | Property alias for `grid-template-columns`, [see known limitations](#known-limitations).
| columnGap     | `string`                    |                 | The gap size for `columns`.
| gap           | `string`                    |                 | The gap size for `columns` and `rows`.
| inline        | `boolean`                   | `false`         | If `true`, the Grid will have `display: inline-grid`, otherwise `display: grid`.
| maxWidth      | `string`                    |                 | Alias for the `max-width` property of the Grid component.
| rows          | `string`                    | `"none"`        | Property alias for `grid-template-rows`, [see known limitations](#known-limitations).
| rowGap        | `string`                    |                 | The gap size for `rows`.

## Usage and known limitations
By default, this Grid component solves:
 - Compiling the `repeat` function to old specification
 - Auto-placement of it's children
 
Even that this component solves the two - the most common issues with using the CSS Grid in IE10+, it still has some usage limitations.

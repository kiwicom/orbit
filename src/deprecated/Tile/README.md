# Tile
To implement Tile component into your project you'll need to the import at least the Tile:
```jsx
import Tile from "@kiwicom/orbit-components/lib/Tile";
```
After adding import into your project you can use it simply like:
```jsx
<Tile title="Title" />
```
## Props
Table below contains all types of the props available in Tile component.

| Name          | Type                          | Default         | Description                      |
| :------------ | :---------------------------- | :-------------- | :------------------------------- |
| dataTest      | `string`                      |                 | Optional prop for testing purposes.
| description   | `string`                      |                 | The content of the Tile.
| external      | `boolean`                     | `false`         | If `true`, the Tile opens link in a new tab.  [See Functional specs](#functional-specs)
| href          | `string`                      |                 | The URL of the link to open when Tile is clicked. [See Functional specs](#functional-specs)
| icon          | `React.Node`                  |                 | Displayed icon on the left side of the Tile.
| onClick       | `event => void \| Promise`    |                 | Function for handling onClick event.
| title         | `React.Node`                  |                 | The title of the Tile.
| children      | `React.Node`                  |                 | Content of expanded tile
| expanded      | `boolean`                     |                 | Default state of expandable. [See Functional specs](#functional-specs)

## Functional specs
* When the `external` is specified, `noopener` and `noreferrer` values will automatically added to attribute `rel` for security reason.
* By passing the `href` prop into Tile, it will render into `a` element.
* By passing children and not defining href, the Tile will be expandable. You can set default visibility of content by property `expanded`

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

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| description   | `string`              |                 | The content of the Tile.
| external      | `boolean`             | `false`         | If `true`, the Tile opens link in a new tab.
| href          | `string`              |                 | The URL of the link to open when Tile is clicked. [See Functional specs](#functional-specs)
| icon          | `React.Node`          |                 | Displayed icon on the left side of the Tile.
| onClick       | `func`                |                 | Function for handling onClick event.
| title         | `string`              |                 | The title of the Tile.
| children      | `React.Node`          |                 | Content of expanded tile
| expanded      | `boolean`             |                 | Default state of expandable. [See Functional specs](#functional-specs)

## Functional specs
* By passing the `href` prop into Tile, it will render into `a` element.
* By passing children and not defining href, the Tile will be expandable. You can set default visibility of content by property `expanded`


# TileGroup

To implement TileGroup component into your project you'll need to the import at least the TileGroup and Tile:

```jsx
import TileGroup from "@kiwicom/orbit-components/lib/TileGroup";
import Tile from "@kiwicom/orbit-components/lib/Tile";
```

After adding import into your project you can use it simply like:

```jsx
<TileGroup>
  <Tile title="Title" />
  <Tile title="Title" />
</TileGroup>
```

## Props

Table below contains all types of the props available in TileGroup component.

| Name     | Type         | Default | Description                                                                                       |
| :------- | :----------- | :------ | :------------------------------------------------------------------------------------------------ |
| as       | `string`     | `"div"` | The element used for the root node.                                                               |
| dataTest | `string`     |         | Optional prop for testing purposes.                                                               |
| id       | `string`     |         | Set `id` for `TileGroup`                                                                          |
| children | `React.Node` |         | Content of the TileGroup - normally the Tile component. [See functional specs](#functional-specs) |

## Functional specs

- You can use the React.Node in many different ways, but please mind that you can't use any additional DOM elements. Otherwise, the styling will be broken.

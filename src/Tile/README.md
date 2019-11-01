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

| Name            | Type                          | Default         | Description                      |
| :-------------- | :---------------------------- | :-------------- | :------------------------------- |
| dataTest        | `string`                      |                 | Optional prop for testing purposes.
| description     | `React.Node`                  |                 | The description of the Tile.
| expandable      | `boolean`                     | `false`         | If `true`, the Tile will be expandable.
| external        | `boolean`                     | `false`         | If `true`, the Tile opens link in a new tab.  [See Functional specs](#functional-specs)
| href            | `string`                      |                 | The URL of the link to open when Tile is clicked. [See Functional specs](#functional-specs)
| icon            | `React.Node`                  |                 | Displayed icon on the left side of the Tile.
| onClick         | `event => void \| Promise`    |                 | Function for handling onClick event.
| title           | `React.Node`                  |                 | The title of the Tile.
| header          | `React.Node`                  |                 | The header of the Tile. Useful when you need different layout than combination of e.g. `title` and `description` properties.
| children        | `React.Node`                  |                 | Content of expandable Tile.
| initialExpanded | `boolean`                     | `false`         | Initial state of expandable Tile when it mounts.
| noPadding       | `boolean`                     |                 | If `true`, the `children` content won't have inner spacing.

## Functional specs
* When the `external` is specified, `noopener` and `noreferrer` values will automatically added to attribute `rel` for security reason.
* By passing the `href` prop into Tile, it will render into `a` element.


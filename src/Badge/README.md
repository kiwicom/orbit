# Badge
To implement Badge component into your project you'll need to add the import:
```jsx
import Badge from "@kiwicom/orbit-components/lib/Badge";
```
After adding import into your project you can use it simply like:
```jsx
<Badge>Hello!</Badge>
```
## Props
Table below contains all types of the props available in Badge component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| circled       | `boolean`             | `false`         | If `true`, the Badge will have circular shape.  [See Functional specs](#functional-specs)
| **children**  | `React.Node`          |                 | The content of the Badge.
| dataTest      | `string`              |                 | Optional prop for testing purposes.
| icon          | `React.Node`          |                 | The displayed icon on the left.
| type          | [`enum`](#enum)       | `"neutral"`     | The color type of the Badge.

### enum

| type                  |
| :-------------------- |
| `"neutral"`           |
| `"dark"`              |
| `"info"`              |
| `"success"`           |
| `"warning"`           |
| `"critical"`          |
| `"infoInverted"`      |
| `"criticalInverted"`  |

## Functional specs

* The `circled` property is meant to be used only for two characters. Don't combine it with any `icon` or `children`.

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
| circled       | `boolean`             | `false`         | If `true`, the Badge will have circular shape.
| **children**  | `React.Node`          |                 | The content of the Badge.
| icon          | `React.Node`          |                 | The displayed icon on the left.
| type          | [`enum`](#enum)       | `"neutral"`     | The color type of the Badge.

### enum

| type          |
| :------------ |
| `"neutral"`   |
| `"dark"`      |
| `"info"`      |
| `"success"`   |
| `"warning"`   |
| `"critical"`  |

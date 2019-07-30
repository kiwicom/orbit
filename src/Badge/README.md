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
| children      | `React.Node`          |                 | The content of the Badge.
| dataTest      | `string`              |                 | Optional prop for testing purposes.
| icon          | `React.Node`          |                 | The displayed icon on the left.
| type          | [`enum`](#enum)       | `"neutral"`     | The color type of the Badge.
| ariaLabel     | `string`              |                 | Adds prop adds `aria-label` to an element, useful for screenreaders.

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
| `"successInverted"`   |
| `"warningInverted"`   |

## Functional specs

* If you want to use `circled` badge, please take a look on [NotificationBadge](../NotificationBadge)

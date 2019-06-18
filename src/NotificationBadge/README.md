# NotificationBadge
To implement NotificationBadge component into your project you'll need to add the import:
```jsx
import NotificationBadge from "@kiwicom/orbit-components/lib/NotificationBadge";
```
After adding import into your project you can use it simply like:
```jsx
<NotificationBadge>Hello!</NotificationBadge>
```
## Props
Table below contains all types of the props available in NotificationBadge component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| **children**  | `React.Node`          |                 | The content of the NotificationBadge.
| dataTest      | `string`              |                 | Optional prop for testing purposes.
| icon          | `React.Node`          |                 | The displayed icon on the left.
| type          | [`enum`](#enum)       | `"neutral"`     | The color type of the NotificationBadge.
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

## Functional specs

* `icon` has higher priority than children. If `icon` is passed the children will not appear 

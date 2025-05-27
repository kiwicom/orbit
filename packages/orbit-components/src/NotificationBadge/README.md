# NotificationBadge

To implement NotificationBadge component into your project you'll need to add the import:

```jsx
import NotificationBadge from "@kiwicom/orbit-components/lib/NotificationBadge";
```

After adding import into your project you can use it simply like:

```jsx
<NotificationBadge>3</NotificationBadge>
```

## Props

Table below contains all types of the props available in NotificationBadge component.

| Name      | Type            | Default     | Description                                                               |
| :-------- | :-------------- | :---------- | :------------------------------------------------------------------------ |
| children  | `React.Node`    |             | The content of the NotificationBadge.                                     |
| dataTest  | `string`        |             | Optional prop for testing purposes.                                       |
| id        | `string`        |             | Sets the `id` attribute for the Badge component inside NotificationBadge. |
| icon      | `React.Node`    |             | The displayed icon. If provided, children content will not be rendered.   |
| type      | [`enum`](#enum) | `"neutral"` | The color type of the NotificationBadge.                                  |
| ariaLabel | `string`        |             | Specifies the accessible name of the badge. See the Accessibility tab.    |

### enum

| type               |
| :----------------- |
| `"neutral"`        |
| `"dark"`           |
| `"info"`           |
| `"success"`        |
| `"warning"`        |
| `"critical"`       |
| `"infoSubtle"`     |
| `"criticalSubtle"` |

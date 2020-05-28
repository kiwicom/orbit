# Badge

To implement Badge component into your project you'll need to add the import:

```jsx
import Badge from "@kiwicom/orbit-components/lib/Badge";
```

After adding import into your project you can use it simply like:

```jsx
<Badge>Hello!</Badge>
```

## Functional specs

- If you want to use `circled` badge, please take a look on **NotificationBadge**.

**Props**
| Name | Type | Default | Description |
| --------- | ------------ | ------- | ----------- |
| children | `React$Node` | | |
| type | `Type` | | |
| icon | `React$Node` | | |
| ariaLabel | `string` | | |
| dataTest | `string` | | |

| **Type**                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "neutral" , "dark" , "info" , "success" , "warning" , "critical" , "white" , "infoInverted" , "criticalInverted" , "successInverted" , "warningInverted" |

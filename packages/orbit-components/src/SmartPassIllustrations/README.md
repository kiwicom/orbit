# SmartPassIllustration

To implement SmartPassIllustration component into your project you'll need to add the import:

```jsx
import { SmartPassV1 } from "@kiwicom/orbit-components/lib/SmartPassIllustration";
```

After adding import into your project you can use it simply like:

```jsx
<SmartPassV1 size="small" />
```

## Props

Table below contains all types of the props available in SmartPassIllustration component.

| Name           | Type            | Default    | Description                            |
| :------------- | :-------------- | :--------- | :------------------------------------- |
| dataTest       | `string`        |            | Optional prop for testing purposes.    |
| size           | [`enum`](#enum) | `"medium"` | The size of the SmartPassIllustration. |
| ariaLabelledby | `string`        |            | Optional prop for a11y element         |
| title          | `string`        |            | Title of svg element                   |
| description    | `string`        |            | Description of svg element             |
| primary        | `string`        | `"white"`  | Primary color                          |
| secondary      | `string`        | `"black"`  | Secondary color                        |

### enum

| size           |
| :------------- |
| `"extraSmall"` |
| `"small"`      |
| `"medium"`     |
| `"large"`      |
| `"display"`    |

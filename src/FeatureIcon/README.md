# FeatureIcon
To implement FeatureIcon component into your project you'll need to add the import:
```jsx
import FeatureIcon from "@kiwicom/orbit-components/lib/FeatureIcon";
```
After adding import into your project you can use it simply like:
```jsx
<FeatureIcon name="TicketFlexi" />
```
## Props
Table below contains all types of the props available in the FeatureIcon component.

| Name          | Type                             | Default         | Description                      |
| :------------ | :------------------------------- | :-------------- | :------------------------------- |
| dataTest      | `string`                         |                 | Optional prop for testing purposes.
| **name**      | [`enum`](#enum)                  |                 | The name for the displayed feature icon.

### enum

| code                |
| :------------------ |
| `"TicketFlexi"`     |
| `"TicketSaver"`     |
| `"TicketStandard"`  |


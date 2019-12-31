# Tooltip

To implement Tooltip component into your project you'll need to add the import:

```jsx
import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";
```

After adding import into your project you can use it simply like:

```jsx
<Tooltip content="Your content">
  <Airplane />
</Tooltip>
```

## Props

Table below contains all types of the props available in the Tooltip component.

| Name                 | Type            | Default | Description                                                                                                       |
| :------------------- | :-------------- | :------ | :---------------------------------------------------------------------------------------------------------------- |
| **children**         | `React.Node`    |         | The reference element where the Tooltip will appear.                                                              |
| **content**          | `React.Node`    |         | The content to display in the Tooltip.                                                                            |
| dataTest             | `string`        |         | Optional prop for testing purposes.                                                                               |
| enabled              | `boolean`       | `true`  | Enable render of tooltip                                                                                          |
| preferredPosition    | [`enum`](#enum) |         | The preferred position to choose.                                                                                 |
| removeUnderlinedText | `boolean`       |         | Removes underline on child component, when underline is not desired.                                              |
| size                 | [`enum`](#enum) |         | The maximum possible size of the Tooltip.                                                                         |
| stopPropagation      | `boolean`       |         | If `true` the click event on children won't bubble. Useful when you use Tooltip inside another clickable element. |
| tabIndex             | `string`        | `"0"`   | Specifies the tab order of an element                                                                             |

## enum

| preferredPosition | size       |
| :---------------- | :--------- |
| `"right"`         | `"small"`  |
| `"left"`          | `"medium"` |
| `"top"`           |
| `"bottom"`        |

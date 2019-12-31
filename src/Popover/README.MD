# Popover

To implement Popover component into your project you'll need to add the import:

```jsx
import Popover from "@kiwicom/orbit-components/lib/Popover";
```

After adding import into your project you can use it simply like:

```jsx
<Popover content="Your content">
  <Button />
</Popover>
```

## Props

Table below contains all types of the props available in the Popover component.

| Name              | Type                    | Default    | Description                                                                                                  |
| :---------------- | :---------------------- | :--------- | :----------------------------------------------------------------------------------------------------------- |
| actions           | `React.Node`            |            | Actions to display in the Popover.                                                                           |
| **content**       | `React.Node`            |            | The content to display in the Popover.                                                                       |
| **children**      | `React.Node`            |            | The reference element where the Popover will appear.                                                         |
| dataTest          | `string`                |            | Optional prop for testing purposes.                                                                          |
| fixed             | `boolean`               |            | Changes position to fixed from absolute, good for use in sticky components.                                  |
| noPadding         | `boolean`               | `true`     | Adds or removes padding around popover's content.                                                            |
| opened            | `boolean`               |            | Prop for programmatically controlling Popover inner state. If `opened` is present open triggers are ignored. |
| preferredAlign    | [`enum`](#enum)         | `"start"`  | The preferred position to choose.                                                                            |
| preferredPosition | [`enum`](#enum)         | `"bottom"` | The preferred align to choose.                                                                               |
| overlapped        | `boolean`               | `false`    | If `true`, the content of Popover will overlap the trigger children.                                         |
| width             | `string`                |            | Width of popover, if not set the with is set to `auto`.                                                      |
| onClose           | `() => void \| Promise` |            | Function for handling onClose.                                                                               |
| onOpen            | `() => void \| Promise` |            | Function for handling onOpen.                                                                                |

## enum

| position   | Align      |
| :--------- | :--------- |
| `"bottom"` | `"start"`  |
| `"top"`    | `"end"`    |

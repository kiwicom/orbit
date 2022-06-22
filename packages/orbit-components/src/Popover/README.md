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

| Name           | Type                     | Default             | Description                                                                                                                                      |
| :------------- | :----------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| actions        | `React.Node`             |                     | Actions to display in the Popover [See Functional specs](#functional-specs).                                                                     |
| **content**    | `React.Node`             |                     | The content to display in the Popover.                                                                                                           |
| **children**   | `React.Node`             |                     | The reference element where the Popover will appear.                                                                                             |
| dataTest       | `string`                 |                     | Optional prop for testing purposes.                                                                                                              |
| id             | `string`                 |                     | Set `id` for `Popover`                                                                                                                           |
| offset         | [`offset`](#offset)      | `{left: 0, top: 0}` | Optional prop to set position offset                                                                                                             |
| fixed          | `boolean`                |                     | Changes position to fixed from absolute, good for use in sticky components.                                                                      |
| noPadding      | `boolean`                | `true`              | Adds or removes padding around popover's content.                                                                                                |
| opened         | `boolean`                |                     | Prop for programmatically controlling Popover inner state. If `opened` is present open triggers are ignored.                                     |
| overlapped     | `boolean`                | `false`             | If `true`, the content of Popover will overlap the trigger children.                                                                             |
| renderInPortal | `boolean`                | `true`              | Optional prop, set it to `false` if you're rendering Popover inside a custom portal, defaults to `true`                                          |
| width          | `string`                 |                     | Width of popover, if not set the with is set to `auto`.                                                                                          |
| onClose        | `() => void \| Promise`  |                     | Function for handling onClose.                                                                                                                   |
| onOpen         | `() => void \| Promise`  |                     | Function for handling onOpen.                                                                                                                    |
| placement      | [`placement](#placement) | `bottom-start`      | 12 different placements to choose from                                                                                                           |
| lockScrolling  | `boolean`                | `true`              | Whether to prevent scrolling of the rest of the page while Popover is open on mobile. This is on by default to provide a better user experience. |
| noFlip         | `boolean`                | `false`             | Turns off automatic flipping of the Popover when there is not enough space                                                                       |
| allowOverflow  | `boolean`                | `false`             | Allows the Popover to be cut off instead of moving it while scrolling to keep it visible.                                                        |

## enum

| Placement        |
| :--------------- |
| `"top"`          |
| `"right"`        |
| `"bottom"`       |
| `"left"`         |
| `"top-start"`    |
| `"top-end"`      |
| `"right-start"`  |
| `"right-end"`    |
| `"bottom-start"` |
| `"bottom-end"`   |
| `"left-start"`   |
| `"left-end"`     |
| `"auto"`         |
| `"auto-start"`   |
| `"auto-end"`     |

## offset

| key    | value    |
| :----- | -------- |
| `top`  | `number` |
| `left` | `number` |

## Functional specs

- Whenever event `onClick` fires, the script inside this component will calculate possible positions that can be applied and the first possible will be applied.

- You can prefer one position that will be used if possible, otherwise the default order in [`enum`](#enum) table will be used.

- You can prefer align that will be used if possible, otherwise the default order in [`enum`](#enum) table will be used.

- Actions are a way to override default close behavior with your own actions, mainly `Buttons` keep in mind that one of the actions should close the popover.

- The Popover component supports rendering of many different components inside its children. You can use combination of e.g. Text, Stack, ListChoice for example:

```jsx
<Popover
  content={
    <React.Fragment>
      <ListChoice
        title="Choice Title"
        description="Further description"
        icon={<Accommodation />}
        onClick={action}
      />
      <ListChoice
        title="Choice Title"
        description="Further description"
        icon={<Accommodation />}
        onClick={action}
      />
      <ListChoice
        title="Choice Title"
        description="Further description"
        icon={<Accommodation />}
        onClick={action}
      />
    </React.Fragment>
  }
>
  <Button>Open Popover</Button>
</Popover>
```

# Popover

To implement Popover component into your project you'll need to add the import:

```jsx
import Popover from "@kiwicom/orbit-components/lib/Popover";
```

After adding import to your project you can use it simply like:

```jsx
<Popover content="Your content">
  <Button />
</Popover>
```

## Props

The table below contains all types of props available in the Popover component.

| Name           | Type                                                  | Default             | Description                                                                                                                                          |
| :------------- | :---------------------------------------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| actions        | `React.Node`                                          |                     | Actions to display at the bottom of the Popover [See Functional specs](#functional-specs).                                                           |
| **content**    | `React.Node`                                          |                     | The content to display in the Popover.                                                                                                               |
| **children**   | `React.Node`                                          |                     | The reference element where the Popover will appear.                                                                                                 |
| dataTest       | `string`                                              |                     | Optional prop for testing purposes.                                                                                                                  |
| id             | `string`                                              |                     | Set `id` for `Popover`.                                                                                                                              |
| offset         | [`offset`](#offset)                                   | `{left: 0, top: 0}` | Optional prop to set position offset.                                                                                                                |
| fixed          | `boolean`                                             |                     | Changes position to fixed from absolute, good for use in sticky components.                                                                          |
| noPadding      | `boolean`                                             | `true`              | Adds or removes padding around popover's content.                                                                                                    |
| opened         | `boolean`                                             |                     | Prop for programmatically controlling Popover inner state. If `opened` is present open triggers are ignored.                                         |
| overlapped     | `boolean`                                             | `false`             | If `true`, the content of Popover will overlap the trigger children.                                                                                 |
| renderInPortal | `boolean`                                             | `true`              | Optional prop, set it to `false` if you're rendering Popover inside a custom portal, defaults to `true`.                                             |
| width          | `string`                                              |                     | Width of popover, if undefined, it is set to `auto`.                                                                                                 |
| maxHeight      | `string`                                              |                     | The maximum height of the content of the popover, if undefined, it is set to `100%`.                                                                 |
| onClose        | `() => void \| Promise`                               |                     | Function for handling onClose.                                                                                                                       |
| onOpen         | `() => void \| Promise`                               |                     | Function for handling onOpen.                                                                                                                        |
| placement      | [`placement`](#placement)                             | `bottom-start`      | 12 different placements to choose from.                                                                                                              |
| lockScrolling  | `boolean`                                             | `true`              | Whether to prevent scrolling of the rest of the page while Popover is open on mobile. This is `true` by default to provide a better user experience. |
| noFlip         | `boolean`                                             | `false`             | Turns off automatic flipping of the Popover when there is not enough space.                                                                          |
| allowOverflow  | `boolean`                                             | `false`             | Allows the Popover to be cut off instead of moving it while scrolling to keep it visible.                                                            |
| labelClose     | `React.Node`                                          | `Close`             | The label for the close button displayed on mobile devices.                                                                                          |
| renderTimeout  | `number`                                              | `0`                 | The timeout for rendering the Popover.                                                                                                               |
| zIndex         | `number`                                              | `710`               | The zIndex value of the Popover component.                                                                                                           |
| ariaLabel      | `string`                                              |                     | Optional prop for `aria-label` attribute.                                                                                                            |
| ariaLabelledby | `string`                                              |                     | Optional prop for `aria-labelledby` attribute.                                                                                                       |
| role           | `"dialog" \| "menu" \| "grid" \| "listbox" \| "tree"` | `"dialog"`          | Optional prop for `role` attribute on the popover.                                                                                                   |

## placement

| value            |
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

- Whenever `onClick` fires, the component will calculate possible positions that can be applied and the first possible will be applied, if none is provided to the `placement` prop.

- The `actions` prop is a way to override the default close behavior with your own actions. Keep in mind that one of the actions should close the popover.

- The Popover component supports rendering of many different components inside its children. You can use a combination of e.g. Text, Stack, ListChoice for example:

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

## Accessibility

- `Button` is the most common trigger component for opening and closing the popover. The `Popover` component renders a wrapping `div` with the `role="button"` attribute by default. Ensure that the trigger component is set as a non-interactive component (for example, using the `asComponent` prop) to avoid the accessibility violation of nesting interactive controls (`Interactive controls must not be nested`).

- The `ariaLabelledby` prop allows you to specify an `aria-labelledby` attribute for the popover content component. This attribute provides a reference to one or more elements that label the popover content. By using `ariaLabelledby`, the accessibility of popover component is improved and it is easier for users with assistive technologies to understand the context and purpose of the content.

- The `ariaLabel` prop allows you to specify an `aria-label` attribute for the popover content component. This attribute provides additional information to screen readers, enhancing the accessibility of the component. By using `ariaLabel`, you can ensure that users who rely on assistive technologies receive the necessary context and information about the component's purpose and functionality.

- The `role` prop defines the semantic role of the popover (defaults to `"dialog"`). Choose the appropriate role based on your content type—for example, use `"menu"` for action lists or `"dialog"` for complex content.

- The component automatically handles several ARIA attributes on the trigger element:
  - `aria-controls`: References the popover content's ID
  - `aria-haspopup`: Indicates that activating the trigger will display a popover
  - `aria-expanded`: Dynamically reflects whether the popover is open or closed

For more comprehensive accessibility guidelines, refer to the dedicated [Accessibility documentation](https://orbit.kiwi/components/popover/accessibility/).

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

| role | `"dialog" \| "menu" \| "grid" \| "listbox" \| "tree"` | `"dialog"` | Optional prop for `role` attribute on the popover. |

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

- Whenever event `onClick` fires, the script inside this component will calculate possible positions that can be applied and the first possible will be applied.

- You can prefer one position that will be used if possible, otherwise the default order in [`placement`](#placement) table will be used.

- You can prefer align that will be used if possible, otherwise the default order in [`placement`](#placement) table will be used.

- Actions are a way to override default close behavior with your own actions, mainly `Buttons` keep in mind that one of the actions should close the popover.

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

- The `Button` component inside the `Popover` component is the most common trigger component for the opening and closing of the popover. The Popover component includes the `role="button"` attribute. Ensure that the `Button` is set as a non-interactive component (for example, using the `asComponent` prop) to avoid the accessibility violation of nesting interactive controls (`Interactive controls must not be nested`).

- The `ariaLabelledby` prop allows you to specify an `aria-labelledby` attribute for the popover content component. This attribute provides a reference to one or more elements that label the popover content. By using `ariaLabelledby`, the accessibility of popover component is improved and easier for users with assistive technologies to understand the context and purpose of the content.

- The `ariaLabel` prop allows you to specify an `aria-label` attribute for the popover content component. This attribute provides additional information to screen readers, enhancing the accessibility of the component. By using `ariaLabel`, you can ensure that users who rely on assistive technologies receive the necessary context and information about the component's purpose and functionality.

# ChoiceTile

To implement ChoiceTile component into your project you'll need to add the import:

```jsx
import ChoiceTile from "@kiwicom/orbit-components/lib/ChoiceTile";
```

After adding import into your project you can use it like:

```jsx
<ChoiceTile type="radio" />
```

## Props

The table below contains all types of the props available in the ChoiceTile component.

| Name        | Type                       | Description                                                                           |
| ----------- | -------------------------- | ------------------------------------------------------------------------------------- |
| **type**    | `checkbox \| radio`        | Required. Defines the type of input is set to be presented.                           |
| inline      | `boolean`                  | Determines if the description is presented inline with the title in larger viewports. |
| title       | `React.Node`               | Defines the title of the ChoiceTile.                                                  |
| icon        | `React.Node`               | Defines the icon or flag of the ChoiceTile.                                           |
| description | `React.Node`               | Defines the description of the ChoiceTile.                                            |
| label       | `React.Node`               | Defines the label to be presented next to the Checkbox or Radio of the ChoiceTile.    |
| selected    | `boolean`                  | Determines if the Checkbox or Radio of the ChoiceTile are selected.                   |
| onClick     | `event => void \| Promise` | Executed when clicking on the ChoiceTile. Can be used for managing its state.         |
| children    | `React.Node`               | Allows for custom content to be added to the ChoiceTile.                              |

## Functional specs

- The ChoiceTile component is completely stateless. All logic and state management should be handled by who uses it, with the `onClick` and `selected` props.
- If using custom content (through the `children` prop) with clickable items, it is needed to stop the propagation of the click event on those items, to avoid undesired interaction with the ChoiceTile.

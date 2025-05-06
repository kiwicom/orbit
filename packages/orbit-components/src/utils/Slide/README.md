# Slide

If a slide animation for some collapsible content is needed, the `Slide` component can be used.

## Usage

The `Slide` component should wrap the content that collapse and expand.

```jsx
import Slide from "@kiwicom/orbit-components/lib/utils/Slide";

<Slide expanded={isExpanded} maxHeight={height}>
  {collapsibleContent}
</Slide>;
```

## Props

| Name                 | Type             | Default  | Description                                                                                 |
| :------------------- | :--------------- | :------- | :------------------------------------------------------------------------------------------ |
| transitionDuration   | `string`         | `"fast"` | Determines the duration of the animation. Can be `"slow"`, `"normal"` or `"fast"`.          |
| children             | `React.Node`     |          | The expandable content that should be animated.                                             |
| maxHeight            | `number \| null` |          | The maximum height the animation should take. Usually it is the height of the container.    |
| expanded             | `boolean`        | `false`  | Determines if the content is expanded or not. When changed to `true`, the animation occurs. |
| id                   | `string`         |          | Sets the id for the wrapper component responsible for the animation.                        |
| ariaLabelledBy       | `string`         |          | Sets the ariaLabelledBy for the wrapper component responsible for the animation.            |
| stopClickPropagation | `boolean`        | `true`   | Prevents click events inside the component from propagating to parent elements.             |

## Accessibility

### Automatic Accessibility Features

The `Slide` component implements several accessibility features to ensure proper interaction for all users:

- `aria-hidden`: Automatically set to `true` when the content is collapsed and `false` when expanded
- `aria-labelledby`: When provided via the `ariaLabelledBy` prop, associates the collapsible content with its label element

### Best Practices

When using `Slide` for expandable components (like accordions or collapsible panels), ensure that:

1. The control that toggles the `expanded` state is keyboard focusable and has the corresponding `aria-expanded` attribute
2. The control has appropriate `aria-controls` attribute pointing to the Slide component's `id`
3. If the control is an icon or icon button, it should have an accessible name via `aria-label`

### Example with Accessibility Features

```jsx
import Slide from "@kiwicom/orbit-components/lib/utils/Slide";
import Button from "@kiwicom/orbit-components/lib/Button";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Text from "@kiwicom/orbit-components/lib/Text";
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import ChevronUp from "@kiwicom/orbit-components/lib/icons/ChevronUp";

const CollapsibleSection = () => {
  const [expanded, setExpanded] = React.useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <>
      <Button
        onClick={toggleExpanded}
        iconRight={expanded ? <ChevronUp ariaHidden /> : <ChevronDown ariaHidden />}
        aria-expanded={expanded}
        aria-controls="details-section"
      >
        Toggle Details
      </Button>
      <Slide
        expanded={expanded}
        maxHeight={200}
        id="details-section"
        ariaLabelledBy="details-heading"
      >
        <Heading type="title3" id="details-heading">
          Section Details
        </Heading>
        <Text>This content expands and collapses with animation.</Text>
      </Slide>
    </>
  );
};
```

### Click Propagation

By default, the `stopClickPropagation` prop is set to `true`, which prevents click events inside the Slide component from bubbling up to parent elements. This helps avoid unintended behaviors when the collapsible content contains interactive elements.

If you need click events to propagate normally, set `stopClickPropagation={false}`.

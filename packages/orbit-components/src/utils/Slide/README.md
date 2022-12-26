# Slide

If a slide animation for some collapsible content is needed, the `Slide` component can be used.

## Usage

The `Slide` component should wrap the content that collapse and expand.

```jsx
import { Slide } from "@kiwicom/orbit-components";

<Slide expanded={isExpanded} maxHeight={height}>
  {collapsibleContent}
</Slide>;
```

## Props

| Name               | Type             | Default  | Description                                                                                 |
| :----------------- | :--------------- | :------- | :------------------------------------------------------------------------------------------ |
| transitionDuration | `string`         | `"fast"` | Determines the duration of the animation. Can be `"slow"`, `"normal"` or `"fast`.           |
| children           | `React.Node`     |          | The expandable content that should be animated.                                             |
| maxHeight          | `number \| null` |          | The maximum height the animation should take. Usually it is the height of the container.    |
| expanded           | `boolean`        | `false`  | Determines if the content is expanded of not. When changed to `true`, the animation occurs. |
| id                 | `string`         |          | Sets the id for the wrapper component responsible for the animation.                        |
| ariaLabelledBy     | `string`         |          | Sets the ariaLabelledBy for the wrapper component responsible for the animation.            |

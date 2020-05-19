# BadgePrimitive

To implement BadgePrimitive component into your project you'll need to add the import:

```jsx
import BadgePrimitive from "@kiwicom/orbit-components/lib/primitives/BadgePrimitive";
```

After adding import into your project you can use it simply like:

```jsx
<BadgePrimitive>Hello!</BadgePrimitive>
```

## Props

Table below contains all types of the props available in BadgePrimitive component.

| Name            | Type         | Default | Description                                                          |
| :-------------- | :----------- | :------ | :------------------------------------------------------------------- |
| background      | `string`     |         | Background of a BadgePrimitive. Can use gradients and images         |
| borderColor     | `string`     |         | Color of the border that is always solid and one pixel.              |
| foregroundColor | `string`     |         | Foreground color, controling color of a text and icon.               |
| children        | `React.Node` |         | The content of the BadgePrimitive.                                   |
| dataTest        | `string`     |         | Optional prop for testing purposes.                                  |
| icon            | `React.Node` |         | The displayed icon on the left.                                      |
| ariaLabel       | `string`     |         | Adds prop adds `aria-label` to an element, useful for screenreaders. |

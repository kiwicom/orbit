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

| Name            | Type                    | Default | Description                                                          |
| :-------------- | :---------------------- | :------ | :------------------------------------------------------------------- |
| background      | `string`                |         | Background of a BadgePrimitive. Can use gradients and images         |
| borderColor     | `string`                |         | Color of the border that is always solid and one pixel.              |
| foregroundColor | `string`                |         | Foreground color, controling color of a text and icon.               |
| children        | `React.Node`            |         | The content of the BadgePrimitive.                                   |
| dataTest        | `string`                |         | Optional prop for testing purposes.                                  |
| icon            | `React.Node`            |         | The displayed icon on the left.                                      |
| ariaLabel       | `string`                |         | Adds prop adds `aria-label` to an element, useful for screenreaders. |
| **carriers**    | [`Carrier[]`](#carrier) |         | The content of the CarrierLogo, passed as array of objects.          |

### Carrier

Table below contains all types of the props available for object in Carrier array.

| Name     | Type            | Description                                                                                   |
| :------- | :-------------- | :-------------------------------------------------------------------------------------------- |
| **code** | `string`        | The code of the Carrier, defines which logo will be rendered.                                 |
| name     | `string`        | The name of the Carrier, mainly for information.                                              |
| type     | [`enum`](#enum) | The preferred placeholder for non-existing carrier. [See Functional specs](#functional-specs) |

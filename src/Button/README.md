# Button
To implement Button component into your project you'll need to add the import:
```jsx
import Button from "@kiwicom/orbit-components/lib/Button";
```
After adding import into your project you can use it simply like:
```jsx
<Button>Hello World!</Button>
```
## Props
Table below contains all types of the props available in Button component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| block         | `boolean`             | `false`         | If `true`, the Button will grow up to the full width of its container.
| bordered      | `boolean`             | `false`         | If `true`, the Button will have a lighter version, with border and light background.
| circled       | `boolean`             | `false`         | If `true`, the Button will have circular shape.
| children      | `React.Node`          |                 | The content of the Button. [See Functional specs](#functional-specs)
| **component** | `string \| React.Node`| `"button"`      | The component used for the root node. Either a string to use a DOM element or a component.
| dataTest      | `string`              |                 | Optional prop for testing purposes.
| disabled      | `boolean`             | `false`         | If `true`, the Button will be disabled.
| external      | `boolean`             | `false`         | If `true`, the Button opens link in a new tab. [See Functional specs](#functional-specs)
| href          | `string`              |                 | The URL of the link to open when Button is clicked. [See Functional specs](#functional-specs)
| icon          | `React.Node`          |                 | The displayed icon (will be removed in the future, use iconLeft instead).
| iconLeft      | `React.Node`          |                 | The displayed icon on the left.
| iconRight     | `React.Node`          |                 | The displayed icon on the right.
| loading       | `boolean`             | `false`         | If `true`, the loading glyph will be displayed.
| onClick       | `func`                |                 | Function for handling onClick event.
| **size**      | [`enum`](#enum)       | `"normal"`      | The size of the Button.
| submit        | `boolean`             | `false`         | If `true`, the Button will have `type="submit"` attribute, otherwise `type="button"`.
| **type**      | [`enum`](#enum)       | `"primary"`     | The type of Button.
| width         | `number`              | `0`             | The width of the Button. Number is defined in `px`.

### enum

| type          | size       |
| :------------ | :--------- |
| `"primary"`   | `"small"`  |
| `"secondary"` | `"normal"` |
| `"info"`      | `"large"`  |
| `"success"`   |            |
| `"warning"`   |            |
| `"critical"`  |            |
| `"facebook"`  |            |
| `"google"`    |            |
| `"white"`     |            |

## Functional specs
* When the `external` is specified, `noopener` and `noreferrer` values will automatically added to attribute `rel` for security reason.

* By passing the `href` prop into Button, it will render into `a` element. If you pass `component` prop it will override this logic.

* If you want to render **Icon only Button**, you just need to let `children` prop empty and set up any `icon` you want to use.

* If you want to use the `component` prop then **YourComponent** should accept at least `className`. Otherwise it won't be rendered with proper styling, e.g.:
  ```jsx
  const YourComponent = props => <div {...props} />
  
  <Button component={YourComponent}>Title</Button>
  ```
  If you specify the children of **YourComponent** component, it will override the children prop of Button component, e.g.:
  ```jsx
  const YourComponent = props => <div {...props}>YourComponent</div>

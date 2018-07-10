# ButtonLink
To implement ButtonLink component into your project you'll need to add the import:
```jsx
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
```
After adding import into your project you can use it simply like:
```jsx
<ButtonLink>Hello World!</ButtonLink>
```
## Props
Table below contains all types of the props available in ButtonLink component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| block         | `boolean`             | `false`         | If `true`, the ButtonLink will grow up to the full width of its container.
| children      | `React.Node`          |                 | The content of the ButtonLink. [See Functional specs](#functional-specs)
| **component** | `string \| React.Node`| `"button"`      | The component used for the root node. Either a string to use a DOM element or a component.
| disabled      | `boolean`             | `false`         | If `true`, the ButtonLink will be disabled.
| external      | `boolean`             | `false`         | If `true`, the ButtonLink opens link in a new tab.
| href          | `string`              |                 | The URL of link to open when ButtonLink is clicked. [See Functional specs](#functional-specs)
| icon          | `React.Node`          |                 | The displayed icon.
| onClick       | `func`                |                 | Function for handling onClick event.
| **size**      | [`enum`](#enum)       | `"normal"`      | The size of the ButtonLink.
| transparent   | `boolean`             | `false`         | If `true`, the ButtonLink will not have `:hover` and `:active` state.
| **type**      | [`enum`](#enum)       | `"primary"`     | The type of ButtonLink.
| width         | `number`              | `0`             | The width of the ButtonLink. Number is defined in `px`.

### enum

| type          | size       |
| :------------ | :--------- |
| `"primary"`   | `"small"`  |
| `"secondary"` | `"normal"` |
|               | `"large"`  |

## Functional specs
* By passing the `href` prop into Button, it will render into `a` element. If you pass `component` prop it will override this logic.

* If you want to render **Icon only ButtonLink**, you just need to let `children` prop empty and set up any `icon` you want to use.

* If you want to use the `component` prop then **YourComponent** should accept at least `className`. Otherwise it won't be rendered with proper styling, e.g.:
```jsx
const YourComponent = props => <div {...props} />

<ButtonLink component={YourComponent}>Title</ButtonLink>
```
If you specify the children of **YourComponent** component, it will override the children prop of Button component, e.g.:
```jsx
const YourComponent = props => <div {...props}>YourComponent</div>
 
<ButtonLink component={YourComponent}>Title</ButtonLink>
```
This example will render ButtonLink in div with children **YourComponent** and not **Title**.

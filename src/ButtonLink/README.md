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

| Name          | Type                            | Default         | Description                      |
| :------------ | :------------------------------ | :-------------- | :------------------------------- |
| ariaControls  | `string`                        |                 | Id of the element the button controls.
| ariaExpanded  | `boolean`                       |                 | Tells screen reader the controlled element from `ariaControls` is expanded
| block         | `boolean`                       | `false`         | If `true`, the ButtonLink will grow up to the full width of its container.
| circled       | `boolean`                       | `false`         | If `true`, the ButtonLink will have circular shape.
| children      | `React.Node`                    |                 | The content of the ButtonLink. [See Functional specs](#functional-specs)
| **component** | `string \| React.Node`          | `"button"`      | The component used for the root node. Either a string to use a DOM element or a component.
| disabled      | `boolean`                       | `false`         | If `true`, the ButtonLink will be disabled.
| dataTest      | `string`                        |                 | Optional prop for testing purposes.
| external      | `boolean`                       | `false`         | If `true`, the ButtonLink opens link in a new tab. [See Functional specs](#functional-specs)
| href          | `string`                        |                 | The URL of link to open when ButtonLink is clicked. [See Functional specs](#functional-specs)
| icon          | `React.Node`                    |                 | The displayed icon on the left (will be removed in the future, use iconLeft instead).
| iconLeft      | `React.Node`                    |                 | The displayed icon on the left.
| iconRight     | `React.Node`                    |                 | The displayed icon on the right.
| onClick       | `event => void \| Promise`      |                 | Function for handling onClick event.
| ref           | `func`                          |                 | Prop for forwarded ref of the Button.
| role          | `string`                        |                 | Specifies the role of an element.
| **size**      | [`enum`](#enum)                 | `"normal"`      | The size of the ButtonLink.
| spaceAfter    | `enum`                          |                 | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken)
| submit        | `boolean`                       | `false`         | If `true`, the Button will have `type="submit"` attribute, otherwise `type="button"`.
| tabIndex      | `string`                        |                 | Specifies the tab order of an element.
| transparent   | `boolean`                       | `false`         | If `true`, the ButtonLink will not have `:hover` and `:active` state.
| title         | `string`                        |                 | Adds `aria-label`.
| **type**      | [`enum`](#enum)                 | `"primary"`     | The type of ButtonLink.
| width         | `number`                        | `0`             | The width of the ButtonLink. Number is defined in `px`.


### enum

| type          | size       |
| :------------ | :--------- |
| `"primary"`   | `"small"`  |
| `"secondary"` | `"normal"` |
|               | `"large"`  |

## Functional specs
* When the `external` is specified, `noopener` and `noreferrer` values will automatically added to attribute `rel` for security reason.

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


## Accessibility
If you use `ButtonLink` without `href` so it's rendered as a `<button>` HTML element, then you can use props below. In case you are passing `href` and element is rendered as `<a>` then it should be treated as a link and `ariaControls`, `ariaExpanded` shouldn't be useful. 

* Use `ariaControls` prop to add `aria-controls` attribute to establish the relationship between button and element which is controlled by it. `aria-controls` works only with a unique `id` of an element. 

* Use `ariaExpands` prop to add `aria-expands` to indicate screenreaders, that element controlled by button through `ariaControls` is expanded or not.

* Use `disabled` prop to indicate users that button is inactive and they can't interact with it.

* Use `role` and `tabIndex` when you are rendering `ButtonLink` to non-actionable HTML element as `div` or `span`. However, this should be done only in edge-cases as it is anti-pattern behavior.

* Use `title` to add `aria-label` when you need to add extra informations to screen readers or there is no `children` presented to be used as label.
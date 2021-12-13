# ButtonPrimitive

To implement ButtonPrimitive component into your project you'll need to add the import:

```jsx
import ButtonPrimitive from "@kiwicom/orbit-components/lib/primitives/ButtonPrimitive";
```

After adding import into your project you can use it simply like:

```jsx
<ButtonPrimitive>Hello!</ButtonPrimitive>
```

## Props

Table below contains all types of the props available in ButtonPrimitive component.

| Name             | Type                       | Default    | Description                                                                                                                                                    |
| :--------------- | :------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| asComponent      | `string \| React.Element`  | `"button"` | The component used for the root node.                                                                                                                          |
| ariaControls     | `string`                   |            | Id of the element the button controls.                                                                                                                         |
| ariaExpanded     | `boolean`                  |            | Tells screen reader the controlled element from `ariaControls` is expanded.                                                                                    |
| arialCurrent     | `string`                   |            | Indicates whether the element represents the current item within within a container or set of related elements.                                                |
| background       | `string`                   |            | The background of the ButtonPrimitive on initial state.                                                                                                        |
| backgroundHover  | `string`                   |            | The background of the ButtonPrimitive on hover state.                                                                                                          |
| backgroundActive | `string`                   |            | The background of the ButtonPrimitive on active state.                                                                                                         |
| backgroundFocus  | `string`                   |            | The background of the ButtonPrimitive on focus state.                                                                                                          |
| boxShadow        | `string`                   |            | The box-shadow of the ButtonPrimitive on initial state.                                                                                                        |
| boxShadowHover   | `string`                   |            | The box-shadow of the ButtonPrimitive on hover state.                                                                                                          |
| boxShadowActive  | `string`                   |            | The box-shadow of the ButtonPrimitive on active state.                                                                                                         |
| boxShadowFocus   | `string`                   |            | The box-shadow of the ButtonPrimitive on focus state.                                                                                                          |
| children         | `React.Node`               |            | The content of the ButtonPrimitive. [See Functional specs](#functional-specs).                                                                                 |
| circled          | `boolean`                  | `false`    | If `true`, the ButtonPrimitive will have circular shape.                                                                                                       |
| contentAlign     | `string`                   | `center`   | The justify-content of inner container that wraps icons and the children.                                                                                      |
| contentWidth     | `string`                   |            | The with of inner container that wraps the children.                                                                                                           |
| dataTest         | `string`                   |            | Optional prop for testing purposes.                                                                                                                            |
| disabled         | `boolean`                  | `false`    | If `true`, the ButtonPrimitive will be disabled.                                                                                                               |
| external         | `boolean`                  | `false`    | If `true`, the ButtonPrimitive opens link in a new tab. [See Functional specs](#functional-specs)                                                              |
| fontSize         | `string`                   |            | The font-size of the ButtonPrimitive.                                                                                                                          |
| fontWeight       | `string`                   |            | The font-weight of the ButtonPrimitive.                                                                                                                        |
| foreground       | `string`                   |            | The color of the text inside ButtonPrimitive on initial state.                                                                                                 |
| foregroundHover  | `string`                   |            | The color of the text inside ButtonPrimitive on hover state.                                                                                                   |
| foregroundFocus  | `string`                   |            | The color of the text inside ButtonPrimitive on active state.                                                                                                  |
| foregroundActive | `string`                   |            | The color of the text inside ButtonPrimitive on focus state.                                                                                                   |
| fullWidth        | `boolean`                  | `false`    | If `true`, the ButtonPrimitive will grow up to the full width of its container.                                                                                |
| height           | `string`                   |            | The height of the ButtonPrimitive.                                                                                                                             |
| href             | `string`                   |            | The URL of the link to open when ButtonPrimitive is clicked. [See Functional specs](#functional-specs)                                                         |
| iconLeft         | `React.Node`               |            | The displayed icon on the left.                                                                                                                                |
| iconRight        | `React.Node`               |            | The displayed icon on the right.                                                                                                                               |
| icons            | [`Icons`](#icons)          |            | Object property for passing down settings for icons inside the ButtonPrimitive.                                                                                |
| loading          | `boolean`                  | `false`    | If `true`, the loading glyph will be displayed and ButtonPrimitive will be disabled.                                                                           |
| onClick          | `event => void \| Promise` |            | Function for handling onClick event.                                                                                                                           |
| padding          | `string`                   |            | The inner padding of the ButtonPrimitive.                                                                                                                      |
| rel              | `string`                   |            | Specifies the rel of an element. [See Functional specs](#functional-specs)                                                                                     |
| role             | `string`                   |            | Specifies the role of an element.                                                                                                                              |
| spaceAfter       | `enum`                     |            | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |
| submit           | `boolean`                  | `false`    | If `true`, the ButtonPrimitive will have `type="submit"` attribute, otherwise `type="button"`.                                                                 |
| title            | `string`                   |            | Adds `aria-label`.                                                                                                                                             |
| tabIndex         | `string \| number`         | `"0"`      | Specifies the tab order of an element.                                                                                                                         |
| width            | `string`                   |            | The width of the ButtonPrimitive. Can be any string - `100px`, `20%`.                                                                                          |

### Icons

`icons` is special object property of ButtonPrimitive where you can pass settings that belongs to icons that is possible to use inside this component.

| Name             | Type     | Description                                             |
| :--------------- | :------- | :------------------------------------------------------ |
| width            | `string` | The width of icons inside the ButtonPrimitive.          |
| height           | `string` | The height of icons inside the ButtonPrimitive.         |
| leftMargin       | `string` | The margin of the left icon inside the ButtonPrimitive. |
| rightMargin      | `string` | The margin of the left icon inside the ButtonPrimitive. |
| foreground       | `string` | The color of the icon inside the ButtonPrimitive.       |
| foregroundHover  | `string` | The color of the icon inside the ButtonPrimitive.       |
| foregroundFocus  | `string` | The color of the icon inside the ButtonPrimitive.       |
| foregroundActive | `string` | The color of the icon inside the ButtonPrimitive.       |

## Functional specs

- When the `external` is specified, `noopener` value will be automatically added to attribute `rel` for security reason.

* By passing the `href` prop into Button, it will render into `a` element. If you pass `asComponent` prop it will override this logic.

- If you want to render **Icon only ButtonPrimitive**, you just need to let `children` prop empty and set up any `icon` you want to use.

* If you want to use the `asComponent` prop then **YourComponent** should accept at least `className`. Otherwise it won't be rendered with proper styling, e.g.:

  ```jsx
  const YourComponent = props => <div {...props} />

  <ButtonPrimitive asComponent={YourComponent}>Title</ButtonPrimitive>
  ```

  If you specify the children of **YourComponent** component, it will override the children prop of ButtonPrimitive component, e.g.:

  ```jsx
  const YourComponent = props => <div {...props}>YourComponent</div>;
  ```

## Accessibility

A button is mainly used for indicating an action, submitting a data, opening a modal etc. If you want to use ButtonPrimitive for navigation consider using a `<TextLink>` for that.

- Use `ariaControls` prop to add `aria-controls` attribute to establish the relationship between button and element which is controlled by it. `aria-controls` works only with a unique `id` of an element.

- Use `ariaExpands` prop to add `aria-expands` to indicate screenreaders, that element controlled by button through `ariaControls` is expanded or not.

- Use `disabled` prop to indicate users that button is inactive and they can't interact with it.

- Use `role` and `tabIndex` when you are rendering `Button` to non-actionable HTML element as `div` or `span`. However, this should be done only in edge-cases as it is anti-pattern behavior.

- Use `title` to add `aria-label` when you need to add extra information to screen readers or there is no `children` presented to be used as label.

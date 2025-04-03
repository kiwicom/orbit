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

| Name           | Type                            | Default     | Description                                                                                                                                                  |
| :------------- | :------------------------------ | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ariaControls   | `string`                        |             | Id of the element the button controls.                                                                                                                       |
| ariaExpanded   | `boolean`                       |             | Tells screen reader the controlled element from `ariaControls` is expanded                                                                                   |
| ariaLabelledby | `string`                        |             | IDs of elements that label the ButtonLink.                                                                                                                   |
| ariaCurrent    | `string`                        |             | Indicates the element that represents the current item within a container or set of related elements.                                                        |
| asComponent    | `string \| () => React.Element` | `"button"`  | The component used for the root node.                                                                                                                        |
| centered       | `boolean`                       | `false`     | Can only be used when `fullWidth` is true and if `iconLeft` and/or `iconRight` are defined. If `centered` prop is `true`, the Button will center everything. |
| circled        | `boolean`                       | `false`     | If `true`, the ButtonLink will have circular shape.                                                                                                          |
| children       | `React.Node`                    |             | The content of the ButtonLink. [See Functional specs](#functional-specs)                                                                                     |
| compact        | `boolean`                       | `false`     | If `true`, the ButtonLink will not have horizontal paddings.                                                                                                 |
| disabled       | `boolean`                       | `false`     | If `true`, the ButtonLink will be disabled.                                                                                                                  |
| download       | `boolean \| string`             |             | Can only be used when `href` is defined. Adds the `download` attribute to the anchor element.                                                                |
| dataTest       | `string`                        |             | Optional prop for testing purposes.                                                                                                                          |
| id             | `string`                        |             | Set `id` for `ButtonLink`                                                                                                                                    |
| external       | `boolean`                       | `false`     | If `true`, the ButtonLink opens link in a new tab. [See Functional specs](#functional-specs)                                                                 |
| fullWidth      | `boolean`                       | `false`     | If `true`, the ButtonLink will grow up to the full width of its container.                                                                                   |
| href           | `string`                        |             | The URL of link to open when ButtonLink is clicked. [See Functional specs](#functional-specs)                                                                |
| iconLeft       | `React.Node`                    |             | The displayed icon on the left.                                                                                                                              |
| iconRight      | `React.Node`                    |             | The displayed icon on the right.                                                                                                                             |
| onClick        | `event => void \| Promise`      |             | Function for handling onClick event.                                                                                                                         |
| ref            | `func`                          |             | Prop for forwarded ref of the Button.                                                                                                                        |
| rel            | `string`                        |             | Specifies the rel of an element. [See Functional specs](#functional-specs)                                                                                   |
| role           | `string`                        |             | Specifies the role of an element.                                                                                                                            |
| **size**       | [`enum`](#enum)                 | `"normal"`  | The size of the ButtonLink.                                                                                                                                  |
| spaceAfter     | `enum`                          |             | Additional `margin-bottom` after component.                                                                                                                  |
| submit         | `boolean`                       | `false`     | If `true`, the Button will have `type="submit"` attribute, otherwise `type="button"`.                                                                        |
| tabIndex       | `string \| number`              |             | Specifies the tab order of an element.                                                                                                                       |
| title          | `string`                        |             | Adds `aria-label`.                                                                                                                                           |
| **type**       | [`enum`](#enum)                 | `"primary"` | The type of ButtonLink.                                                                                                                                      |
| width          | `string`                        |             | The width of the ButtonLink. Can be any string - `100px`, `20%`.                                                                                             |

### enum

| type          | size       | spaceAfter   |
| :------------ | :--------- | :----------- |
| `"primary"`   | `"small"`  | `"none"`     |
| `"secondary"` | `"normal"` | `"smallest"` |
| `"critical"`  | `"large"`  | `"small"`    |
|               |            | `"normal"`   |
|               |            | `"medium"`   |
|               |            | `"large"`    |
|               |            | `"largest"`  |

## Functional specs

- When the `external` is specified, `noopener` value will be automatically added to attribute `rel` for security reason. Read more about it [here](https://web.dev/external-anchors-use-rel-noopener/).

- By passing the `href` prop into Button, it will render into `a` element. If you pass `component` prop it will override this logic.

- If you want to render **Icon only ButtonLink**, you just need to let `children` prop empty and set up any `icon` you want to use.

- If you want to use the `asComponent` prop then **YourComponent** should accept at least `className`. Otherwise it won't be rendered with proper styling, e.g.:

```jsx
const YourComponent = props => <div {...props} />

<ButtonLink asComponent={YourComponent}>Title</ButtonLink>
```

If you specify the children of **YourComponent** component, it will override the children prop of Button component, e.g.:

```jsx
const YourComponent = props => <div {...props}>YourComponent</div>

<ButtonLink asComponent={YourComponent}>Title</ButtonLink>
```

This example will render ButtonLink in div with children **YourComponent** and not **Title**.

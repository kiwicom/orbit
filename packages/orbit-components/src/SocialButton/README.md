# SocialButton

To implement SocialButton component into your project you'll need to add the import:

```jsx
import SocialButton from "@kiwicom/orbit-components/lib/SocialButton";
```

After adding import into your project you can use it simply like:

```jsx
<SocialButton>Hello World!</SocialButton>
```

## Props

Table below contains all types of the props available in SocialButton component.

| Name         | Type                       | Default    | Description                                                                                         |
| :----------- | :------------------------- | :--------- | :-------------------------------------------------------------------------------------------------- |
| ariaControls | `string`                   |            | Id of the element the button controls.                                                              |
| ariaExpanded | `boolean`                  |            | Tells screen reader the controlled element from `ariaControls` is expanded.                         |
| asComponent  | `string \| React.Element`  | `"button"` | The component used for the root node.                                                               |
| fullWidth    | `boolean`                  | `false`    | If `true`, the SocialButton will grow up to the full width of its container.                        |
| children     | `React.Node`               |            | The content of the SocialButton. [See Functional specs](#functional-specs)                          |
| dataTest     | `string`                   |            | Optional prop for testing purposes.                                                                 |
| id           | `string`                   |            | Set `id` for `SocialButton`.                                                                        |
| disabled     | `boolean`                  | `false`    | If `true`, the SocialButton will be disabled.                                                       |
| external     | `boolean`                  | `false`    | If `true`, the SocialButton opens link in a new tab. [See Functional specs](#functional-specs)      |
| href         | `string`                   |            | The URL of the link to open when SocialButton is clicked. [See Functional specs](#functional-specs) |
| loading      | `boolean`                  | `false`    | If `true`, the loading glyph will be displayed.                                                     |
| onClick      | `event => void \| Promise` |            | Function for handling onClick event.                                                                |
| ref          | `func`                     |            | Prop for forwarded ref of the SocialButton.                                                         |
| role         | `string`                   |            | Specifies the role of an element.                                                                   |
| **size**     | [`enum`](#enum)            | `"normal"` | The size of the SocialButton.                                                                       |
| spaceAfter   | `enum`                     |            | Additional `margin-bottom` after component.                                                         |
| submit       | `boolean`                  | `false`    | If `true`, the SocialButton will have `type="submit"` attribute, otherwise `type="button"`.         |
| tabIndex     | `string \| number`         |            | Specifies the tab order of an element.                                                              |
| title        | `string`                   |            | Adds `aria-label`.                                                                                  |
| **type**     | [`enum`](#enum)            | `"apple"`  | The type of SocialButton.                                                                           |
| width        | `string`                   |            | The width of the SocialButton. Can be any string - `100px`, `20%`.                                  |

### enum

| type         | size       | spaceAfter   |
| :----------- | :--------- | :----------- |
| `"apple"`    | `"small"`  | `"none"`     |
| `"facebook"` | `"normal"` | `"smallest"` |
| `"google"`   | `"large"`  | `"small"`    |
| `"X"`        |            | `"normal"`   |
| `"email"`    |            | `"medium"`   |
|              |            | `"large"`    |
|              |            | `"largest"`  |

## Functional specs

- When the `external` is specified, `noopener` value will be automatically added to attribute `rel` for security reason.

- By passing the `href` prop into SocialButton, it will render into `a` element. If you pass `asComponent` prop it will override this logic.

- If you want to use the `asComponent` prop then **YourComponent** should accept at least `className`. Otherwise it won't be rendered with proper styling, e.g.:

  ```jsx
  const YourComponent = props => <div {...props} />

  <SocialButton asComponent={YourComponent}>Title</SocialButton>
  ```

  If you specify the children of **YourComponent** component, it will override the children prop of SocialButton component, e.g.:

  ```jsx
  const YourComponent = props => <div {...props}>YourComponent</div>;
  ```

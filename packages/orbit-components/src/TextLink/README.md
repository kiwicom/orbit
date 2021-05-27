# TextLink

To implement TextLink component into your project you'll need to add the import:

```jsx
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
```

After adding import into your project you can use it simply like:

```jsx
<TextLink>Hello World!</TextLink>
```

## Props

Table below contains all types of the props available in TextLink component.

| Name            | Type                            | Default     | Description                                                                                                                  |
| :-------------- | :------------------------------ | :---------- | :--------------------------------------------------------------------------------------------------------------------------- |
| ariaCurrent     | `string`                        |             | Indicates whether the element represents the current item within within a container or set of related elements.              |
| asComponent     | `string \| () => React.Element` | `"a"`       | The component used for the root node. Either a string to use a DOM element or a component.                                   |
| children        | `React.Node`                    |             | The content of the TextLink.                                                                                                 |
| dataTest        | `string`                        |             | Optional prop for testing purposes.                                                                                          |
| external        | `boolean`                       | `false`     | If `true`, the TextLink opens link in a new tab.                                                                             |
| href            | `string`                        |             | The URL to link when the TextLink is clicked.                                                                                |
| iconLeft        | `React.Node`                    |             | The displayed icon.                                                                                                          |
| iconRight       | `React.Node`                    |             | The displayed icon.                                                                                                          |
| noUnderline     | `boolean`                       |             | If `true` the TextLink won't have underline in any its state.                                                                |
| onClick         | `event => void \| Promise`      |             | Function for handling onClick event.                                                                                         |
| rel             | `string`                        |             | The rel of the TextLink. [See Functional specs](#functional-specs)                                                           |
| size            | [`enum`](#enum)                 |             | The size of the TextLink. [See Functional specs](#functional-specs)                                                          |
| standAlone      | `boolean`                       |             | If `true` the TextLink will have safe clickable area, so it's properly accessible. Useful for usages out of a block of text. |
| stopPropagation | `boolean`                       |             | If `true` the click event on children won't bubble. Useful when you use TextLink inside another clickable element.           |
| tabIndex        | `string \| number`              |             | Specifies the tab order of an element                                                                                        |
| title           | `string`                        |             | HTML attribute Title, used forclarification of a link, for screen readers.                                                   |
| **type**        | [`enum`](#enum)                 | `"primary"` | The color type of the TextLink.                                                                                              |

### enum

| type          | size       |
| :------------ | :--------- |
| `"primary"`   | `"small"`  |
| `"secondary"` | `"normal"` |
| `"info"`      | `"large"`  |
| `"success"`   |
| `"warning"`   |
| `"critical"`  |

## Functional specs

- When the `external` is specified, `noopener` and `noreferrer` values will automatically added to attribute `rel` for security reason.

- The default size of the `TextLink` is inherited from parent element, e.g. `TextLink` is wrapped in `Text` component. Use `size` prop only when you need to set it explicitly.

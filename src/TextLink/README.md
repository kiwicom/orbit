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

| Name          | Type                        | Default         | Description                      |
| :------------ | :-------------------------- | :-------------- | :------------------------------- |
| children      | `React.Node`                |                 | The content of the TextLink.
| dataTest      | `string`                    |                 | Optional prop for testing purposes.
| external      | `boolean`                   | `false`         | If `true`, the TextLink opens link in a new tab.
| href          | `string`                    |                 | The URL to link when the TextLink is clicked.
| icon          | `React.Node`                |                 | The displayed icon.
| onClick       | `event => void \| Promise`  |                 | Function for handling onClick event.
| rel           | `string`                    |                 | The rel of the TextLink. [See Functional specs](#functional-specs)
| size          | [`enum`](#enum)             |                 | The size of the TextLink. [See Functional specs](#functional-specs)
| tabIndex      | `string`                    |                 | Specifies the tab order of an element
| **type**      | [`enum`](#enum)             | `"primary"`     | The color type of the TextLink.

### enum

| size          | type          |
| :------------ | :------------ |
| `"small"`     | `"primary"`   |
| `"normal"`    | `"secondary"` |
| `"large"`     |

## Functional specs
* When the `external` is specified, `noopener` and `noreferrer` values will automatically added to attribute `rel` for security reason.

* The default size of the `TextLink` is inherited from parent element, e.g. `TextLink` is wrapped in `Text` component. Use `size` prop only when you need to set it explicitly.

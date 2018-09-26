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

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| children      | `React.Node`          |                 | The content of the TextLink.
| dataTest      | `string`              |                 | Optional prop for testing purposes.
| external      | `boolean`             | `false`         | If `true`, the TextLink opens link in a new tab.
| href          | `string`              |                 | The URL to link when the TextLink is clicked.
| icon          | `React.Node`          |                 | The displayed icon.
| onClick       | `func`                |                 | Function for handling onClick event.
| rel           | `string`              |                 | The rel of the TextLink.
| **type**      | [`enum`](#enum)       | `"primary"`     | The color type of the TextLink.

### enum

| type          |
| :------------ |
| `"primary"`   |
| `"secondary"` |

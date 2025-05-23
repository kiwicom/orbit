# ListChoice

To implement ListChoice component into your project you'll need to add the import:

```jsx
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
```

After adding import into your project you can use it simply like:

```jsx
<ListChoice title="My Choice" />
```

## Props

Table below contains all types of the props available in the ListChoice component.

| Name        | Type                       | Default | Description                                                                                                                                     |
| :---------- | :------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| dataTest    | `string`                   |         | Optional prop for testing purposes.                                                                                                             |
| id          | `string`                   |         | Set `id` for `ListChoice`.                                                                                                                      |
| description | `Translation`              |         | The additional info about the ListChoice.                                                                                                       |
| disabled    | `boolean`                  |         | If `true`, the ListChoice won't perform any `onClick` action and if `selectable` is set to `true`, the check box glyph will use disabled state. |
| icon        | `React.Node`               |         | The icon on the left of the ListChoice.                                                                                                         |
| onClick     | `event => void \| Promise` |         | Function for handling onClick event.                                                                                                            |
| selectable  | `boolean`                  |         | If `true`, the check box glyph appears on the right size and it will be possible to select the ListChoice.                                      |
| selected    | `boolean`                  | `false` | If `true`, the check box glyph will be checked.                                                                                                 |
| **title**   | `Translation`              |         | The title of the ListChoice.                                                                                                                    |
| action      | `React.Node`               |         | Area for action elements, like Button.                                                                                                          |
| role        | `string`                   |         | ARIA role. Defaults to "checkbox" when selectable, "button" when no action is provided or undefined otherwise.                                  |
| tabIndex    | `number`                   | `0`     | Specifies the tab order of an element.                                                                                                          |

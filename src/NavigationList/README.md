# NavigationList
To implement NavigationList component into your project you'll need to add the import:
```jsx
import NavigationList, { NavigationListItem } from "@kiwicom/orbit-components/lib/NavigationList";
```
After adding import into your project you can use it simply like:
```jsx
<NavigationList>
  <NavigationListItem>About us</NavigationListItem>
  <NavigationListItem>Careers</NavigationListItem>
</NavigationList>
```
## Props
Table below contains all types of the props available in the NavigationList component.

| Name          | Type                              | Default         | Description                      |
| :------------ | :-------------------------------- | :-------------- | :------------------------------- |
| **children**  | `React.Node`                      |                 | The content of the NavigationList.
| dataTest      | `string`                          |                 | Optional prop for testing purposes.
| title         | `Translation`                     |                 | Additional title of the NavigationList that will appear above its children.
| type          | [`enum`](#enum)                   | `"navigation"`  | Visual type of the NavigationList.

### enum

| position          |
| :---------------- |
| `"navigation"`    |
| `"inline"`        |

## Subcomponents

### NavigationListItem
```jsx
import NavigationListItem from "@kiwicom/orbit-components/lib/NavigationListItem";
```
After adding import into your project you can use it simply like:
```jsx
<NavigationListItem>About us</NavigationListItem>
```
## Props
Table below contains all types of the props available in the NavigationListItem component.

| Name          | Type                              | Default         | Description                      |
| :------------ | :-------------------------------- | :-------------- | :------------------------------- |
| ariaLabel     | `string`                          |                 | Adds prop adds `aria-label` to an element, useful for screen readers.
| asComponent   | `string \| React.Node`            | `"button"`      | The component used for the root node. Either a string to use a DOM element or a component.
| children      | `React.Node`                      |                 | The content of the NavigationLink.
| dataTest      | `string`                          |                 | Optional prop for testing purposes.
| external      | `boolean`                         |                 | If `true`, the Navigation opens link in a new tab. [See Functional specs](#functional-specs)
| href          | `string`                          |                 | The URL of the link to open when the NavigationLink is clicked. [See Functional specs](#functional-specs)
| icon          | `React.Element`                   |                 | The displayed icon on the left.
| onClick       | `() => void \| Promise`           |                 | Function for handling onClick event.
| selectable    | `boolean`                         | `false`         | If `true`, the NavigationLink will be selectable and it will be possible to use `selected` property.
| selected      | `boolean`                         |                 | If `true`, the NavigationLink will be selected visually.
| tabIndex      | `string`                          |                 | Specifies the tab order of an element.

## Functional specs
* When the `external` is specified, `noopener` and `noreferrer` values will automatically added to attribute `rel` for security reason.

* By passing the `href` prop into NavigationListItem, it will render into `a` element. If you pass `component` prop it will override this logic.

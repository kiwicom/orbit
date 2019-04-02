# Breadcrumbs
To implement Button component into your project you'll need to add the import:
```jsx
import Breadcrumbs, { BreadcrumbsItem } from "@kiwicom/orbit-components/lib/Breadcrumbs";
```
After adding import into your project you can use it simply like:
```jsx
<Breadcrumbs>
  <BreadcrumbsItem href="https://kiwi.com">Kiwi.com</BreadcrumbsItem>
</Breadcrumbs>
```
## Props
Table below contains all types of the props available in Breadcrumbs component.

| Name          | Type                                    | Default         | Description                      |
| :------------ | :-------------------------------------- | :-------------- | :------------------------------- |
| dataTest      | `string`                                |                 | Optional prop for testing purposes.
| **children**  | `React.Node`                            |                 | The content of the Breadcrumbs, normally [`BreadcrumbsItem`](#breadcrumbsitem).
| onGoBack      | `event => void \| Promise`              |                 | Callback for handling back button action. If present the back button is visible

## Functional specs
* The last BreadcrumbsItem will have stronger `font-weight` automatically. Also, all meta information are automatically render too, so you don't have to specify it explicitly.

## Subcomponents
Breadcrumbs requires one subcomponent - BreadcrumbsItem.

### BreadcrumbsItem
```jsx
import BreadcrumbsItem from "@kiwicom/orbit-components/lib/Breadcrumbs/BreadcrumbsItem";
```
#### Usage:
```jsx
<BreadcrumbsItem href="https://kiwi.com">
  Kiwi.com
</BreadcrumbsItem>
```

#### Props
Table below contains all types of the props available in BreadcrumbsItem component.

| Name          | Type                                    | Default         | Description                      |
| :------------ | :-------------------------------------- | :-------------- | :------------------------------- |
| dataTest      | `string`                                |                 | Optional prop for testing purposes.
| **children**  | `string`                                |                 | The content of the BreadcrumbsItem.
| **href**      | `string`                                |                 | The URL to link when the BreadcrumbsItem is clicked..
| onClick       | `event => void \| Promise`              |                 | Function for handling the onClick event.

# Breadcrumbs

To implement the Button component into your project you'll need to add the import:

```jsx
import Breadcrumbs, { BreadcrumbsItem } from "@kiwicom/orbit-components/lib/Breadcrumbs";
```

After adding import to your project you can use it simply like:

```jsx
<Breadcrumbs>
  <BreadcrumbsItem href="https://kiwi.com">Kiwi.com</BreadcrumbsItem>
</Breadcrumbs>
```

## Props

The Table below contains all types of props available in the Breadcrumbs component.

| Name         | Type                       | Default  | Description                                                                                                                |
| :----------- | :------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| dataTest     | `string`                   |          | Optional prop for testing purposes.                                                                                        |
| id           | `string`                   |          | Set `id` for `Breadcrumbs`                                                                                                 |
| **children** | `React.Node`               |          | The content of the Breadcrumbs, normally [`BreadcrumbsItem`](#breadcrumbsitem).                                            |
| onGoBack     | `event => void \| Promise` |          | Callback for handling back button action. If present the back button is visible.                                           |
| backHref     | `string`                   |          | The location for the back button to direct to. Turns the back button into a link when present (renders as an `a` element). |
| goBackTitle  | `React.Node`               | `"Back"` | Translation string for the go back link on mobile, defined when onGoBack is defined.                                       |
|              |
| spaceAfter   | `enum`                     |          | Additional `margin-bottom` after component.                                                                                |

### enum

| spaceAfter   |
| :----------- |
| `"none"`     |
| `"smallest"` |
| `"small"`    |
| `"normal"`   |
| `"medium"`   |
| `"large"`    |
| `"largest"`  |

## Functional specs

- The last BreadcrumbsItem will have the stronger `font-weight` automatically. Also, all meta-information is automatically rendered too, so you don't have to specify it explicitly.

## Subcomponents

Breadcrumbs requires one subcomponent - BreadcrumbsItem.

### BreadcrumbsItem

```jsx
import BreadcrumbsItem from "@kiwicom/orbit-components/lib/Breadcrumbs/BreadcrumbsItem";
```

#### Usage:

```jsx
<BreadcrumbsItem href="https://kiwi.com">Kiwi.com</BreadcrumbsItem>
```

#### Props

The Table below contains all types of props available in BreadcrumbsItem component.

| Name         | Type                       | Default         | Description                                          |
| :----------- | :------------------------- | :-------------- | :--------------------------------------------------- |
| **children** | `string`                   |                 | The content of the BreadcrumbsItem.                  |
| dataTest     | `string`                   |                 | Optional prop for testing purposes.                  |
| **href**     | `string`                   |                 | The URL to link when the BreadcrumbsItem is clicked. |
| id           | `string`                   |                 | HTML `id` attribute for BreadcrumbsItem.             |
| onClick      | `event => void \| Promise` |                 | Function for handling the onClick event.             |
| component    | `string \| React.Element`  | `a` or `button` | Allows to customize the element to be rendered.      |

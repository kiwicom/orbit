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

## Functional specs

- The last BreadcrumbsItem will have stronger `font-weight` automatically. Also, all meta information are automatically render too, so you don't have to specify it explicitly.

**Props**
| Name | Type | Default | Description |
| ----------- | ------------------------------------------------------------------- | ------- | ----------- |
| dataTest | `string` | | |
| children | `React$Node` | | |
| onGoBack | `(ev?: SyntheticEvent<HTMLButtonElement>) => void \| Promise<any>;` | | |
| goBackTitle | `React$Element<React$ComponentType<any>> \| string` | | |
| spaceAfter | `[`enum`](#enum)` | | |

| **spaceAfter**                                                            |
| ------------------------------------------------------------------------- |
| "none" , "smallest" , "small" , "normal" , "medium" , "large" , "largest" |

**BreadcrumbsItem**

| Name       | Type                                                              | Default | Description |
| ---------- | ----------------------------------------------------------------- | ------- | ----------- |
| dataTest   | `string`                                                          |         |             |
| active     | `boolean`                                                         |         |             |
| component  | `string \| (() => React$Element<any>)`                            |         |             |
| children   | `React$Node`                                                      |         |             |
| href       | `string`                                                          |         |             |
| id         | `string`                                                          |         |             |
| contentKey | `number`                                                          |         |             |
| onClick    | `(ev?: SyntheticEvent<HTMLLinkElement>) => void \| Promise<any>;` |         |             |

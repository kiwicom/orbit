# SkipLink

To implement SkipLink component into your project you'll need to add the import:

```jsx
import SkipLink from "@kiwicom/orbit-components/lib/SkipLink";
```

After adding import into your project you can use it simply like:

```jsx
<SkipLink
  links={[
    {
      href: "#terms",
      name: "Go to terms and conditions",
    },
    {
      name: "Reguest refund",
      onClick: handler,
    },
  ]}
/>
```

Screen reader will read the content in the following order:

- content of the link
- aria-label of nav
- navigation

## Props

The table below contains all types of props available in the SkipLink component.

| Name        | Type                | Description                            |
| :---------- | :------------------ | :------------------------------------- |
| buttonLabel | `string`            | Description for screen readers.        |
| **links**   | [`links[]`](#links) | An array specifying links to point to. |

## links

The table below contains all types of props available for links array.

| Name    | Type                    | Description                         |
| :------ | :---------------------- | :---------------------------------- |
| name    | `string`                | Name of a action.                   |
| link    | `string`                | A href for linking to another page. |
| onClick | `() => void \| Promise` | Callback for handling action.       |

## Functional specs

- SkipLink is visible only on focus.

## Rationale

SkipLink is used to adress [WCAG2.0 Criterion 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html).
The intent of this is to allow people who navigate sequentially through content more direct access to the primary content and common actions of the Web page which can be hidden inside menus or in otherwise complex content.

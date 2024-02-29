# SkipNavigation

To implement the SkipNavigation component into your project you'll need to add the import:

```jsx
import SkipNavigation from "@kiwicom/orbit-components/lib/SkipNavigation";
```

After adding an import to your project you can use it simply like:

```jsx
<SkipNavigation />

<Heading dataA11ySection="section-id-to-scrape">
```

## Props

The table below contains all types of props available in the SkipNavigation component.

| Name              | Type                    | Default           | Description                                  |
| :---------------- | :---------------------- | :---------------- | -------------------------------------------- |
| feedbackUrl       | `string`                |                   | Url to a feedback form.                      |
| feedbackLabel     | `React.Node`            | `Send feedback`   | Text for a feedback form.                    |
| **actions**       | [`Actions[]`](#actions) |                   | An array specifying common actions on a page |
| dataTest          | `string`                |                   | Optional prop for testing purposes           |
| id                | `string`                |                   | Optional id attribute                        |
| firstSectionLabel | `React.Node`            | `Jump to section` | Label for a first section link.              |
| firstActionLabel  | `React.Node`            | `Jump to action`  | Label for a first action link.               |

## actions

The table below contains all types of props available for the Actions array.

| Name    | Type                    | Description                         |
| :------ | :---------------------- | :---------------------------------- |
| name    | `string`                | Name of a action.                   |
| link    | `string`                | A href for linking to another page. |
| onClick | `() => void \| Promise` | Callback for handling action.       |

## Functional specs

- SkipNavigation `onFocus` scrapes the webpage looking for custom attribute `dataA11ySection` to create quick page links. You can extend `<Heading>` and `<CardHeader>` to contain `dataA11ySection`. It's important to note that **without these attributes on a page, SkipNavigation won't work**.

## Rationale

SkipNavigation is used to address [WCAG2.0 Criterion 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html).
The intent of this is to allow people who navigate sequentially through content more direct access to the primary content and common actions of the Web page.

# Accordion

To implement Accordion component into your project you'll need to the import the Accordion and the [AccordionSection](#Accordionsection):

```jsx
import Accordion, { AccordionSection } from "@kiwicom/orbit-components/lib/Accordion";
```

After adding import into your project you can use it simply like:

```jsx
<Accordion>
  <AccordionSection>Hello World!</AccordionSection>
</Accordion>
```

## Props

| Name            | Type                                                                              | Required | Default | Description                                                                 |
| --------------- | --------------------------------------------------------------------------------- | -------- | ------- | --------------------------------------------------------------------------- |
| children        | `React.ReactNode`                                                                 |          |         | The content of the Accordion. You can use only AccordionSection             |
| expandedSection | `string \| number`                                                                |          |         | Optional prop to control which AccordionSection (by id) is expanded         |
| loading         | `boolean`                                                                         |          | `false` | If true it will render the Loading component                                |
| onExpand        | `(sectionId: string \| number) => void \| Promise<any>`                           |          |         | Callback (along with sectionId) that is triggered when section is expanding |
| dataTest        | `string`                                                                          |          |         | Optional prop for testing purposes                                          |
| id              | `string`                                                                          |          |         | Set `id` for `Accordion`                                                    |
| spaceAfter      | `"none" \| "smallest" \| "small" \| "normal" \| "medium" \| "large" \| "largest"` |          |         | Additional space after the component                                        |

## AccordionSection

## Props

| Name              | Type              | Required | Default | Description                                                                                   |
| ----------------- | ----------------- | -------- | ------- | --------------------------------------------------------------------------------------------- |
| id                | `string`          |          |         | Unique identifier for the section, used by `expandedSection`                                  |
| children          | `React.ReactNode` |          |         | The content of the AccordionSection                                                           |
| actions           | `React.ReactNode` |          |         | Additional actions to be displayed in the header                                              |
| expandable        | `boolean`         |          | `true`  | Whether the section can be expanded                                                           |
| expandOnTileClick | `boolean`         |          | `false` | Enables mobile-first interaction where the entire header area becomes clickable for expansion |
| header            | `React.ReactNode` |          |         | The content of the section header                                                             |
| footer            | `React.ReactNode` |          |         | Additional content to display at the bottom of an expanded section                            |
| dataTest          | `string`          |          |         | Optional prop for testing purposes                                                            |

## Functional specs

- By default, the Accordion component operates in an uncontrolled mode. For programmatic control, use the `expandedSection` and `onExpand` props together.

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
| loading         | `boolean`                                                                         |          |         | If true it will render the Loading component                                |
| onExpand        | `(sectionId: string \| number) => void \| Promise<any>`                           |          |         | Callback (along with sectionId) that is triggered when section is expanding |
| dataTest        | `string`                                                                          |          |         |                                                                             |
| id              | `string`                                                                          |          |         | Set `id` for `Accordion`                                                    |
| spaceAfter      | `"none" \| "smallest" \| "small" \| "normal" \| "medium" \| "large" \| "largest"` |          |         |                                                                             |

# AccordionSection

## Props

| Name       | Type               | Required | Default | Description |
| ---------- | ------------------ | -------- | ------- | ----------- |
| id         | `string \| number` |          |         |             |
| children   | `React.ReactNode`  |          |         |             |
| actions    | `React.ReactNode`  |          |         |             |
| expanded   | `boolean`          |          |         |             |
| expandable | `boolean`          |          |         |             |
| onExpand   | `Common.Callback`  |          |         |             |
| header     | `React.ReactNode`  |          |         |             |
| footer     | `React.ReactNode`  |          |         |             |
| dataTest   | `string`           |          |         |             |

### Callback

| Callback                      |
| ----------------------------- |
| `() => void \| Promise<void>` |

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

Table below contains all types of the props available in the Accordion component.

| Name       | Type                                                          | Default | Description                                                                                                                                                    |
| :--------- | :------------------------------------------------------------ | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onExpand   | `() => void \| Promise`                                       |         | Callback (along with sectionId) that is triggered when section is expanding                                                                                    |
| expanded   | `boolean`                                                     | `false` | Optional prop to control expanded state for AccordionSections                                                                                                  |
| children   | `React.ChildrenArray<React.Element<typeof AccordionSection>>` |         | The content of the Accordion. You can use only [AccordionSection](#accordionsection)                                                                           |
| dataTest   | `string`                                                      |         | Optional prop for testing purposes                                                                                                                             |
| loading    | `boolean`                                                     |         | If `true` it will render the Loading component                                                                                                                 |
| spaceAfter | `enum`                                                        |         | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |

### AccordionSection

```jsx
import Accordion, { AccordionSection } from "@kiwicom/orbit-components/lib/Accordion";
```

#### Usage:

```jsx
<Accordion onExpand={onExpand} expanded={expanded}>
  <AccordionSection id="0X1">Hello World!</AccordionSection>
</Accordion>
```

```jsx
<Accordion loading>
  <AccordionSection id="0X1">Loading...</AccordionSection>
</Accordion>
```

#### Props

| Name       | Type               | Default | Description                                                                                                                              |
| :--------- | :----------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| id         | `string \| number` |         | Identificator used to determine active section when using with controlled state                                                          |
| actions    | `React.Node`       |         | Actions which will be rendered on the right side                                                                                         |
| children   | `React.Node`       |         | The content of the AccordionSection.                                                                                                     |
| dataTest   | `string`           |         | Optional prop for testing purposes.                                                                                                      |
| expandable | `boolean`          |         | If set to `false` `actions` will not be displayed                                                                                        |
| header     | `React.Node`       |         | The header of the AccordionSection. Useful when you need different layout than combination of e.g. `title` and `description` properties. |
| footer     | `React.Node`       |         | The sticky footer of the AccordionSection. Useful for navigation buttons                                                                 |

### enum

| titleAs |
| :------ |
| `"h1"`  |
| `"h2"`  |
| `"h3"`  |
| `"h4"`  |
| `"h5"`  |
| `"h6"`  |
| `"div"` |

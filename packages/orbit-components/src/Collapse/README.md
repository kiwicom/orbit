# Collapse

To implement Collapse component into your project you'll need to add the import:

```jsx
import Collapse from "@kiwicom/orbit-components/lib/Collapse";
```

After adding import into your project you can use it simply like:

```jsx
<Collapse label="Duration">
  <Slider defaultValue={5} onChange={value => doSomething(value)} />
</Collapse>
```

## Props

Table below contains all types of the props available in the Collapse component.

| Name                | Type                                | Default | Description                                                                                                             |
| :------------------ | :---------------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------- |
| actions             | `React.Node`                        |         | Actions which will be render next to arrow.                                                                             |
| **children**        | `React.Node`                        |         | The children that should be collapsed.                                                                                  |
| id                  | `string`                            |         | Set `id` for `Collapse`.                                                                                                |
| dataTest            | `string`                            |         | Optional prop for testing purposes.                                                                                     |
| expanded            | `boolean`                           |         | Passing `true` or `false` makes Collapse a controlled component, requiring you to manage its state via `onClick`.       |
| initialExpanded     | `boolean`                           | `false` | If `true` the Collapse component will be expanded on the initial render. To be used when the component is uncontrolled. |
| label               | `string`                            |         | The rendered label of the Collapse.                                                                                     |
| customLabel         | `React.Node`                        |         | Allows for rendering any component as a label.                                                                          |
| onClick             | `(event, state) => void \| Promise` |         | Callback for handling onClick event.                                                                                    |
| expandButtonLabel   | `string`                            |         | The accessible label of the button when the content is collapsed.                                                       |
| collapseButtonLabel | `string`                            |         | The accessible label of the button when the content is expanded.                                                        |

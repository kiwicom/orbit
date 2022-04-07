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

| Name            | Type                                | Default | Description                                                                                                                                |
| :-------------- | :---------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
| actions         | `React.Node`                        |         | Actions which will be render next to arrow.                                                                                                |
| **children**    | `React.Node`                        |         | The children that should be collapsed.                                                                                                     |
| dataTest        | `string`                            |         | Optional prop for testing purposes.                                                                                                        |
| expanded        | `boolean`                           |         | If you pass either `true` or `false` the Collapse component will controlled component and you will have to manage the state via `onClick`. |
| initialExpanded | `boolean`                           | `false` | If `true` the Collapse component will be expanded on the initial render.                                                                   |
| **label**       | `Translation`                       |         | The rendered label of the Collapse.                                                                                                        |
| **customLabel** | `React.Node`                        |         | The rendered custom label of the Collapse.                                                                                                 |
| onClick         | `(event, state) => void \| Promise` |         | Callback for handling onClick event.                                                                                                       |

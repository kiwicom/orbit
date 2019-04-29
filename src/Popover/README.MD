# Popover
To implement Popover component into your project you'll need to add the import:
```jsx
import Popover from "@kiwicom/orbit-components/lib/Popover";
```
After adding import into your project you can use it simply like:
```jsx
<Popover content="Your content">
  <Button />
</Popover>
```

## Props
Table below contains all types of the props available in the Popover component.

| Name              | Type                   | Default         | Description                      |
| :---------------- | :--------------------- | :-------------- | :------------------------------- |
| **content**       | `React.Node`           |                 | The content to display in the Popover.
| **children**      | `React.Node`           |                 | The reference element where the Popover will appear.
| dataTest          | `string`               |                 | Optional prop for testing purposes.
| noPadding        | `boolean`              | `true`          | Adds or removes padding around popover's content.
| opened            | `boolean`              |                 | Prop for programatically controling Popover inner state. If `opened` is present open triggers are ignored
| preferredPosition | [`enum`](#enum)        | `"bottom"`      | The preferred position to choose [See Functional specs](#functional-specs)
| width             | `string`               |                 | Width of popover, if not set the with is set to `auto`.
| onClose           | `() => void \| Promise`|                 | Function for handling onClose.
| onOpen            | `() => void \| Promise`|                 | Function for handling onOpen.

## enum
| position          | 
| :---------------- | 
| `"bottom"`        | 
| `"top"`           | 


## Functional specs
* Whenever event `onClick` fires, the script inside this component will calculate possible positions that can be applied and the first possible will be applied.

* You can prefer one position that will be used if possible, otherwise the default order in [`enum`](#enum) table will be used.

* The Popover component supports rendering of many different components inside its children. You can use combination of e.g. Text, Stack, ListChoice for example:

```jsx
<Popover
  content={
    <React.Fragment>
      <ListChoice  title="Choice Title" description="Further description" icon={<Accommodation />} onClick={action} />
      <ListChoice  title="Choice Title" description="Further description" icon={<Accommodation />} onClick={action} />
      <ListChoice  title="Choice Title" description="Further description" icon={<Accommodation />} onClick={action} />
    </React.Fragment>
  }
>
  <Button>Open Popover</Button>
</Popover>
```



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

| Name              | Type                  | Default         | Description                      |
| :---------------- | :-------------------- | :-------------- | :------------------------------- |
| dataTest          | `string`              |                 | Optional prop for testing purposes.
| **children**      | `React.Node`          |                 | The reference element where the Popover will appear.
| **content**       | `React.Node`          |                 | The content to display in the Popover.
| preferredPosition | [`enum`](#enum)       | `"bottom"`      | The preferred position to choose [See Functional specs](#functional-specs)
| closeText         | `Translation`         | `"Close"`       | The text of the close button to display on mobile devices.
| width             | `number`              |                 | Width of popover, if not set the with is set to `auto`.
| open              | `boolean`             |                 | Prop for programatically controling Popover inner state. If `open` is present open triggers are ignored


  +open?: boolean,
  +width?: number,

## enum
| position          | 
| :---------------- | 
| `"bottom"`        | 
| `"top"`           | 


## Functional specs
* Whenever event `onClick` fires, the script inside this component will calculate possible positions that can be applied and the first possible will be applied.

* You can prefer one position that will be used if possible, otherwise the default order in [`enum`](#enum) table will be used.

* The Popover component supports rendering of many different components inside its children. You can use combination of e.g. Text, Stack, List for example:

```jsx
<Popover
  content={
     <Stack>
        <Text>More information</Text>
        <List>
            <ListItem>Additional information</ListItem>
            <ListItem>Additional information</ListItem>
            <ListItem>Additional information</ListItem>
        </List>
        <Button>Action</Button>
    </Stack>
  }
>
  <Button>Open Popover</Button>
</Popover>
```



# ButtonGroup
To implement ButtonGroup component into your project you'll need to add the import:
```jsx
import ButtonGroup from "@kiwicom/orbit-components/lib/ButtonGroup";
```
After adding import into your project you can use it simply like:
```jsx
<ButtonGroup>
  <Button>Hello</Button>
  <Button>World!</Button>
</ButtonGroup>
```
## Props
Table below contains all types of the props available in ButtonGroup component.

| Name          | Type                          | Default         | Description                      |
| :------------ | :---------------------------- | :-------------- | :------------------------------- |
| **children**  | `React.Node`                  |                 | The content of the ButtonGroup, normally [`Button`](../Button) or [`ButtonLink`](../ButtonLink).
| connected     | `boolean`                     | `false`         | If `true`, there will not be any spaces between individual Buttons/ButtonLinks.
| dataTest      | `string`                      |                 | Optional prop for testing purposes.

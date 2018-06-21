# ButtonGroup
To implement ButtonGroup component into your project you'll need to add the import:
```jsx
import ButtonGroup from "@kiwicom/orbit-components/lib/ButtonGroup";
```
After adding import into your project you can use it simply like:
```jsx
<ButtonLink>
  <Button>Hello</Button>
  <Button>World!</Button>
</ButtonLink>
```
## Props
Table below contains all types of the props available in ButtonLink component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| **children**  | `React.Node`          |                 | The content of the ButtonLink. [See Functional specs](#functional-specs)
| connected     | `string \| React.Node`| `"button"`      | If `true`, there will not be any spaces between individual Buttons/ButtonLinks.

## Functional specs
* Either Button or ButtonLink components are allowed in **children**.

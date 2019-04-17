# Checkbox
To implement Checkbox component into your project you'll need to add the import:
```jsx
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox";
```
After adding import into your project you can use it simply like:
```jsx
<Checkbox label="Checkbox"/>
```
## Props
Table below contains all types of the props available in Checkbox component.

| Name         | Type                         | Default | Description                      |
| :-------     | :--------------------------- | :------ | :------------------------------- |
| checked      | `boolean`                    | `false` | If `true`, the Checkbox will be checked.
| disabled     | `boolean`                    | `false` | If `true`, the Checkbox will be set up as disabled.
| dataTest     | `string`                     |         | Optional prop for testing purposes.
| hasError     | `boolean`                    | `false` | If `true`, the border of the Checkbox will turn red. [See Functional specs](#functional-specs)
| info         | `React.Node`                 |         | The additional info about the Checkbox.
| label        | `string`                     |         | The label of the Checkbox.
| name         | `string`                     |         | The name for the Checkbox.
| onChange     | `event => void \| Promise`   |         | Function for handling onChange event.
| ref          | `func`                       |         | Prop for forwarded ref of the Checkbox. [See Functional specs](#functional-specs)
| tabIndex     | `string`                     |         | Specifies the tab order of an element
| value        | `string`                     |         | The value of the Checkbox.

## Functional specs
* The `hasError` prop will be visible only when the Checkbox has `checked` or `disabled` prop set on **false**.

* `ref` can be used for example auto-focus the elements immediately after render.
```jsx
class Component extends React.PureComponent<Props> {

  componentDidMount() {
    this.ref.current && this.ref.current.focus();
  }

  ref: { current: React$ElementRef<*> | null } = React.createRef();

  render() {
    return (
      <Checkbox ref={this.ref} />
    )
  }
}
```

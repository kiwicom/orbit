# ChoiceGroup
To implement ChoiceGroup component into your project you'll need to add the import:
```jsx
import ChoiceGroup from "@kiwicom/orbit-components/lib/ChoiceGroup";
import Radio from "@kiwicom/orbit-components/lib/Radio";
```
After adding import into your project you can use it simply like:
```jsx
<ChoiceGroup label="What was the reason for your cancellation?">
  <Radio label="Reason one" value="one" />
  <Radio label="Reason two" value="two" />
  <Radio label="Reason three" value="three" />
</ChoiceGroup>
```
## Props
Table below contains all types of the props available in the ChoiceGroup component.

| Name                | Type                       | Default     | Description                      |
| :------------------ | :------------------------- | :---------- | :------------------------------- |
| dataTest            | `string`                   |             | Optional prop for testing purposes.
| **children**        | `React.Node`               |             | The content of the ChoiceGroup, normally [`Radio`](../Radio) or [`Checkbox`](../Checkbox).
| error               | `Translation`              |             | The error to display beneath the ChoiceGroup. Also, the Checkboxes/Radios will turn red when you pass some valuue.
| label               | `Translation`              |             | Heading text of `<ChoiceGroup />`
| labelSize           | [`enum`](#enum)            | `"normal"`  | The size type of Heading.
| labelElement        | [`enum`](#enum)            | `"h4"`      | The element used to render the label into.
| **onChange**        | `event => void \| Promise` |             | Function for handling onChange event. [See Functional specs](#functional-specs)
| filter              | `boolean`                  | `false`     | Changes visual appearence of child components, to contain background on hover and updates padding.
| onOnlySelection     | `(event, {value: string, label: string}) => void \| Promise<any>`| | Function for handling onOnlySelection, read more in Functional specs.


### enum
| labelElement  | labelSize   |
| :------------ | :---------- |
| `"h2"`        | `"normal"`  |
| `"h3"`        | `"large"`   |
| `"h4"`        |
| `"h5"`        |
| `"h6"`        |

## Functional specs
* onChange props in `<Radio />` or `<Checkbox />` will be overrode by internal onChange function
* If you want to handle selecting field, pass `onChange` to `<ChoiceGroup />` and it will be always triggered when `<Radio />` or `<Checkbox />` should change
* `onChange` will return `SyntheticEvent` of field that should change

```jsx
<ChoiceGroup onChange={ev => doSomething(ev)}>
  <Radio label="Reason one" value="one" />
  <Radio label="Reason two" value="two" />
  <Radio label="Reason three" value="three" />
</ChoiceGroup>
```
* `onOnlySelection` can be used only when `filter` prop is used.
* `filter` pattern with `onOnlySelection` is used where multiple checkboxes in different states are presented to the user, and the user wants to choose only one of them.
* `filter` pattern with `onOnlySelection` shouldn't contain radio buttons.
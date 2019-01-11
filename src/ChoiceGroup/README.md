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
| **children**        | `Array<Radio or Checkbox>` |             | Could accept `<Radio />` or `<Checkbox />`
| hasError            | `boolean`                  |             | If `true`, the glyphs will have red border color.
| label               | `Translation`              |             | Heading text of `<ChoiceGroup />`
| labelSize           | [`enum`](#enum)            | `"normal"`  | The size type of Heading.
| labelElement        | [`enum`](#enum)            | `"h4"`      | The element used to render the label into.
| **onChange**        | `func`                     |             | Function for handling onChange event. [See Functional specs](#functional-specs)
  
### enum
| labelElement  | labelSize   |
| :------------ | :---------- |
| `"h2"`        | `"normal"`  |
| `"h3"`        | `"large"`   |
| `"h4"`        |
| `"h5"`        |
| `"h6"`        |

## Functional specs
* onChange props in `<Radio />` or `<Checkbox />` will be overrided by internal onChange function
* If you want to handle selecting field, pass `onChange` to `<ChoiceGroup />` and it will be always triggered when `<Radio />` or `<Checkbox />` should change
* onChange will return `SyntheticEvent` of field that should change
```jsx
<ChoiceGroup onChange={ev => doSomething(ev)}>
  <Radio label="Reason one" value="one" />
  <Radio label="Reason two" value="two" />
  <Radio label="Reason three" value="three" />
</ChoiceGroup>
```

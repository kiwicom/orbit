# RadioGroup
To implement Radio component into your project you'll need to add the import of the RadioGroup and the Radio component:
```jsx
import RadioGroup from "@kiwicom/orbit-components/lib/RadioGroup";
import Radio from "@kiwicom/orbit-components/lib/Radio";
```
After adding import into your project you can use it simply like:
```jsx
<RadioGroup label="Label">
  <Radio value="first" label="Option" />
  <Radio value="second" label="Option" />
  <Radio value="third" label="Option" />
</RadioGroup>
```
## Props
Table below contains all types of the props available in RadioGroup component.

| Name         | Type         | Default | Description                      |
| :-------     | :----------- | :------ | :------------------------------- |
| dataTest     | `string`     |         | Optional prop for testing purposes.
| defaultValue | `string`     |         | The default value of the Radio.
| disabled     | `boolean`    | `false` | If `true`, all Radios will be disabled.
| hasError     | `boolean`    | `false` | If `true`, the border of all the Radios will turn red.
| label        | `string`     |         | The label of the Radio.
| onChange     | `func`       |         | Function for handling onChange event. [See Functional specs](#functional-specs)
  
## Functional specs
* The prop `defaultValue` sets up the default value when component mounts. If you need to get the current value of RadioGroup, use arrow function for it, e.g.:
```jsx
<RadioGroup onChange={(value) => doSomething(value)} />
```

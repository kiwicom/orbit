# Stepper
To implement Stepper component into your project you'll need to add the import:
```jsx
import Stepper from "@kiwicom/orbit-components/lib/Stepper";
```
After adding import into your project you can use it simply like:
```jsx
<Stepper />
```

## Props

Table below contains all types of the props available in Stepper component.

| Name            | Type                          | Default     | Description                                        |
| :-------------- | :---------------------------- | :---------- | :------------------------------------------------- |
| dataTest        | `string`                      |             | Optional prop for testing purposes.
| defaultValue    | `number`                      | `0`         | Specifies the value of the Stepper. [See Functional specs](#functional-specs)
| disabled        | `boolean`                     | `false`     | If `true`, the Stepper will be disabled.
| maxValue        | `number`                      | `∞`         | Specifies the maximum value for the Stepper.
| minValue        | `number`                      | `-∞`        | Specifies the minimum value for the Stepper.
| name            | `string`                      |             | The name for the Stepper.
| onBlur          | `event => void \| Promise`    |             | Function for handling onBlur event.
| onChange        | `number => void \| Promise`   |             | Function for handling onClick event.
| onFocus         | `event => void \| Promise`    |             | Function for handling onFocus event.
| step            | `number`                      | `1`         | Specifies the value of step to increment and decrement.

## Functional specs
* The prop `defaultValue` sets up the default value when component mounts. If you need to get the current value of Stepper, use arrow function for it. The second parameter `name` is optional. The code may look like this:
```jsx
<Stepper onChange={(value, name) => doSomething(value, name)} />
```

# InputStepper

To implement InputStepper component into your project you'll need to add the import:

```jsx
import InputStepper from "@kiwicom/orbit-components/lib/InputStepper";
```

After adding import into your project you can use it simply like:

```jsx
<InputStepper />
```

## Props

Table below contains all types of the props available in InputStepper component.

| Name            | Type                        | Default     | Description                                        |
| :-------------- | :-------------------------- | :---------- | :------------------------------------------------- |
| defaultValue    | `number`                    | `0`         | Specifies the value of the InputStepper. [See Functional specs](#functional-specs)
| disabled        | `boolean`                   | `false`     | If `true`, the InputStepper will be disabled.
| error           | `React.Node`                |             | The error to display beneath the InputStepper. [See Functional specs](#functional-specs)
| help            | `React.Node`                |             | The help to display beneath the InputStepper.
| label           | `Translation`               |             | The label for the InputStepper. [See Functional specs](#functional-specs)
| maxValue        | `number`                    | `∞`         | Specifies the maximum value for the InputStepper.
| minValue        | `number`                    | `-∞`        | Specifies the minimum value for the InputStepper.
| name            | `string`                    |             | The name for the InputStepper.
| required        | `boolean`                   | `false`     | If `true`, the label is displayed as required.
| onBlur          | `event => void \| Promise`  |             | Function for handling onBlur event.
| onChange        | `number => void \| Promise` |             | Function for handling onClick event.
| onFocus         | `event => void \| Promise`  |             | Function for handling onFocus event.
| ref             | `func`                      |             | Prop for forwarded ref of the InputStepper. [See Functional specs](#functional-specs)
| size            | [`enum`](#enum)             | `"normal"`  | The size of the InputStepper.
| spaceAfter      | `enum`                      |             | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-components/tree/master/src/common/getSpacingToken)
| step            | `number`                    | `1`         | Specifies the value of step to increment and decrement.
| tabIndex        | `string`                    |             | Specifies the tab order of an element
| titleDecrement  | `string | (any => string)`  |             | Specifies `title` property on decrement `Button`.
| titleIncrement  | `string | (any => string)`  |             | Specifies `title` property on increment `Button`.

### enum

| size       |
| :--------- |
| `"small"`  |
| `"normal"` |

## Functional specs

* The `error` prop overwrites the `help` prop, due to higher priority.

* The color of the label will turn into cloud shade when the InputStepper has some filled value.

* The prop `defaultValue` sets up the default value when component mounts. If you need to get the current and validated value of InputStepper, use arrow function for it,  e.g.:
```jsx
<InputStepper onChange={(value) => doSomething(value)} />
```

* `ref` can be used for example auto-focus the elements immediately after render.
```jsx
class Component extends React.PureComponent<Props> {
  
  componentDidMount() {
    this.ref.current && this.ref.current.focus();
  }

  ref: { current: React$ElementRef<*> | null } = React.createRef();

  render() {
    return (
      <InputStepper ref={this.ref} />
    )
  }
}
```

# InputStepperStateless
InputStepper offers a stateless version for your custom solutions. To use `InputStepperStateless` you'll need to add the import

```jsx
import InputStepperStateless from "@kiwicom/orbit-components/lib/InputStepper/InputStepperStateless"
```

## Props
Table below contains all types of the props available in `InputStepperStateless` component.

| Name              | Type                        | Default     | Description                                        |
| :---------------- | :-------------------------- | :---------- | :------------------------------------------------- |
| disabled          | `boolean`                   | `false`     | If `true`, the InputStepperStateless will be disabled.
| disabledIncrement | `boolean`                   |             | If `true`, the increment `Button` will be disabled.
| disabledDecrement | `boolean`                   |             | If `true`, the decrement `Button` will be disabled.
| error             | `React.Node`                |             | The error to display beneath the InputStepperStateless. [See Functional specs](#functional-specs)
| help              | `React.Node`                |             | The help to display beneath the InputStepperStateless.
| label             | `Translation`               |             | The label for the InputStepperStateless. [See Functional specs](#functional-specs)
| maxValue          | `number`                    | `∞`         | Specifies the maximum value for the InputStepperStateless.
| minValue          | `number`                    | `-∞`        | Specifies the minimum value for the InputStepperStateless.
| name              | `string`                    |             | The name for the InputStepperStateless.
| onBlur            | `event => void \| Promise`  |             | Function for handling onBlur event.
| onChange          | `number => void \| Promise` |             | Function for handling onClick event.
| onDecrement       | `event => void \| Promise`  |             | Function for handling decrement event.
| onFocus           | `event => void \| Promise`  |             | Function for handling onFocus event.
| onIncrement       | `event => void \| Promise`  |             | Function for handling increment event.
| onKeyDown         | `event => void \| Promise`  |             | Function for handling onKeyDown event present on input.
| ref               | `func`                      |             | Prop for forwarded ref of the InputStepperStateless. [See Functional specs](#functional-specs)
| required          | `boolean`                   | `false`     | If `true`, the label is displayed as required.
| size              | [`enum`](#enum)             | `"normal"`  | The size of the InputStepperStateless.
| spaceAfter        | `enum`                      |             | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit-comp onents/tree/master/src/common/getSpacingToken)
| step              | `number`                    | `1`         | Specifies the value of step to increment and decrement.
| tabIndex          | `string`                    |             | Specifies the tab order of an element
| titleDecrement    | `string | (any => string)`  |             | Specifies `title` property on decrement `Button`.
| titleIncrement    | `string | (any => string)`  |             | Specifies `title` property on increment `Button`.
| value             | `number | string`           |             | Specifies the value of the InputStepperStateless.

### Usage:
```jsx
<InputStepperStateless value={"2 adults"}/>
```

## Helper functions
We provide you with helpers function for validation they can be imported like this:

```jsx
import validateIncrement from "@kiwicom/orbit-components/lib/utils/validateIncrement";
import validateDecrement from "@kiwicom/orbit-components/lib/utils/validateDecrement";
```

### ValidateIncrement

#### Arguments
| Name            | Type                        | Default     | Description                                        |
| :-------------- | :-------------------------- | :---------- | :------------------------------------------------- |
| value           | `number`                    |             | Specifies the the current value.
| maxValue        | `number`                    |  `∞`        | Specifies the maximum value for the InputStepperStateless.
| step            | `number`                    |  `1`        | Specifies the value of step to increment and decrement.


#### Usage 
```js
validateIncrement({value, maxValue, step})
```

### ValidateDecrement
Helper function for validating decrement. Can be used with Stateless InputStepper to make custom validation easier.

#### Arguments
| Name            | Type                        | Default     | Description                                        |
| :-------------- | :-------------------------- | :---------- | :------------------------------------------------- |
| value           | `number`                    |             | Specifies the the current value.
| minValue        | `number`                    |  `-∞`       | Specifies the minimum value for the InputStepperStateless.
| step            | `number`                    |  `1`        | Specifies the value of step to increment and decrement.


#### Usage 
```js
validateDecrement({value, minValue, step})
```

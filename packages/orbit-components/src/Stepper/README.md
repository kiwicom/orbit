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

| Name                 | Type                        | Default | Description                                                                               |
| :------------------- | :-------------------------- | :------ | :---------------------------------------------------------------------------------------- |
| dataTest             | `string`                    |         | Optional prop for testing purposes.                                                       |
| id                   | `string`                    |         | Set `id` for `Stepper`.                                                                   |
| maxWidth             | `boolean`                   | `108px` | Set `max-width`for `Stepper` wrapper.                                                     |
| active               | `boolean`                   |         | Changes the color of the `Stepper`.                                                       |
| defaultValue         | `number`                    | `0`     | Specifies the value of the Stepper. [See Functional specs](#functional-specs)             |
| disabled             | `boolean`                   | `false` | If `true`, the Stepper will be disabled.                                                  |
| maxValue             | `number`                    | `∞`     | Specifies the maximum value for the Stepper.                                              |
| minValue             | `number`                    | `-∞`    | Specifies the minimum value for the Stepper.                                              |
| name                 | `string`                    |         | The name for the Stepper.                                                                 |
| onBlur               | `event => void \| Promise`  |         | Function for handling onBlur event.                                                       |
| onChange             | `number => void \| Promise` |         | Function for handling onClick event.                                                      |
| onFocus              | `event => void \| Promise`  |         | Function for handling onFocus event.                                                      |
| step                 | `number`                    | `1`     | Specifies the value of step to increment and decrement.                                   |
| titleDecrement       | `string`                    |         | Specifies `aria-label` property on decrement `Button`. See accessibility tab.             |
| titleIncrement       | `string`                    |         | Specifies `aria-label` property on increment `Button`. See accessibility tab.             |
| ariaLabelValue       | `string`                    |         | Optional prop for `aria-label` value for input field. See accessibility tab.              |
| ariaLabelledby       | `string`                    |         | Optional prop for `aria-labelledby` value for input field. See accessibility tab.         |
| ariaDescribedby      | `string`                    |         | Optional prop for `aria-describedby` value for input field. See accessibility tab.        |
| descriptionDecrement | `string`                    |         | Optional prop for `aria-describedby` value for decrement `Button`. See accessibility tab. |
| descriptionIncrement | `string`                    |         | Optional prop for `aria-describedby` value for increment `Button`. See accessibility tab. |

## Functional specs

- The prop `defaultValue` sets the default value when the component mounts. If you need to get the current value of the Stepper, use an arrow function.

```jsx
<Stepper onChange={value => doSomething(value)} />
```

## StepperStateless

Stepper offers a stateless version for your custom solutions. To use `StepperStateless`, you need to import it.

```jsx
import StepperStateless from "@kiwicom/orbit-components/lib/Stepper/StepperStateless";
```

### Props

Table below contains all types of the props available in `StepperStateless` component.

| Name                 | Type                        | Default | Description                                                                               |
| :------------------- | :-------------------------- | :------ | :---------------------------------------------------------------------------------------- |
| dataTest             | `string`                    |         | Optional prop for testing purposes.                                                       |
| disabled             | `boolean`                   | `false` | If `true`, the Stepper will be disabled.                                                  |
| disabledIncrement    | `boolean`                   |         | If `true`, the increment `Button` will be disabled.                                       |
| disabledDecrement    | `boolean`                   |         | If `true`, the decrement `Button` will be disabled.                                       |
| maxValue             | `number`                    | `∞`     | Specifies the maximum value for the Stepper.                                              |
| minValue             | `number`                    | `-∞`    | Specifies the minimum value for the Stepper.                                              |
| name                 | `string`                    |         | The name for the Stepper.                                                                 |
| onBlur               | `event => void \| Promise`  |         | Function for handling onBlur event.                                                       |
| onChange             | `number => void \| Promise` |         | Function for handling onClick event.                                                      |
| onDecrement          | `event => void \| Promise`  |         | Function for handling decrement event.                                                    |
| onFocus              | `event => void \| Promise`  |         | Function for handling onFocus event.                                                      |
| onIncrement          | `event => void \| Promise`  |         | Function for handling increment event.                                                    |
| onKeyDown            | `event => void \| Promise`  |         | Function for handling onKeyDown event present on input.                                   |
| step                 | `number`                    | `1`     | Specifies the value of step to increment and decrement.                                   |
| titleDecrement       | `string`                    |         | Specifies `aria-label` property on decrement `Button`. See accessibility tab.             |
| titleIncrement       | `string`                    |         | Specifies `aria-label` property on increment `Button`. See accessibility tab.             |
| value                | `number \| string`          |         | Specifies the value of the StepperStateless. See accessibility tab.                       |
| ariaLabelValue       | `string`                    |         | Optional prop for `aria-label` value for input field. See accessibility tab.              |
| ariaLabelledby       | `string`                    |         | Optional prop for `aria-labelledby` value for input field. See accessibility tab.         |
| ariaDescribedby      | `string`                    |         | Optional prop for `aria-describedby` value for input field. See accessibility tab.        |
| descriptionDecrement | `string`                    |         | Optional prop for `aria-describedby` value for decrement `Button`. See accessibility tab. |
| descriptionIncrement | `string`                    |         | Optional prop for `aria-describedby` value for increment `Button`. See accessibility tab. |

### Usage:

```jsx
<StepperStateless value="2 adults" />
```

## Helper functions

We provide you with helpers function for validation they can be imported like this:

```jsx
import validateIncrement from "@kiwicom/orbit-components/lib/utils/validateIncrement";
import validateDecrement from "@kiwicom/orbit-components/lib/utils/validateDecrement";
```

### ValidateIncrement

Helper function for validating increment. Can be used with Stateless Stepper to make custom validation easier.

#### Arguments

| Name     | Type     | Default | Description                                                |
| :------- | :------- | :------ | :--------------------------------------------------------- |
| value    | `number` |         | Specifies the the current value.                           |
| maxValue | `number` | `∞`     | Specifies the maximum value for the InputStepperStateless. |
| step     | `number` | `1`     | Specifies the value of step to increment and decrement.    |

#### Usage

```js
validateIncrement({ value, maxValue, step });
```

### ValidateDecrement

Helper function for validating decrement. Can be used with Stateless Stepper to make custom validation easier.

#### Arguments

| Name     | Type     | Default | Description                                                |
| :------- | :------- | :------ | :--------------------------------------------------------- |
| value    | `number` |         | Specifies the the current value.                           |
| minValue | `number` | `-∞`    | Specifies the minimum value for the InputStepperStateless. |
| step     | `number` | `1`     | Specifies the value of step to increment and decrement.    |

#### Usage

```js
validateDecrement({ value, minValue, step });
```

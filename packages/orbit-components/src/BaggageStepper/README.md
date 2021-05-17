# BaggageStepper

To implement BaggageStepper component into your project you'll need to add the import:

```jsx
import BaggageStepper from "@kiwicom/orbit-components/lib/BaggageStepper";
```

After adding import into your project you can use it simply like:

```jsx
<BaggageStepper />
```

## Props

Table below contains all types of the props available in BaggageStepper component.

| Name           | Type                        | Default | Description                                                                          |
| :------------- | :-------------------------- | :------ | :----------------------------------------------------------------------------------- |
| dataTest       | `string`                    |         | Optional prop for testing purposes.                                                  |
| defaultValue   | `number`                    | `0`     | Specifies the value of the BaggageStepper. [See Functional specs](#functional-specs) |
| disabled       | `boolean`                   | `false` | If `true`, the BaggageStepper will be disabled.                                      |
| maxValue       | `number`                    | `∞`     | Specifies the maximum value for the BaggageStepper.                                  |
| minValue       | `number`                    | `-∞`    | Specifies the minimum value for the BaggageStepper.                                  |
| name           | `string`                    |         | The name for the BaggageStepper.                                                     |
| onBlur         | `event => void \| Promise`  |         | Function for handling onBlur event.                                                  |
| onChange       | `number => void \| Promise` |         | Function for handling onClick event.                                                 |
| onFocus        | `event => void \| Promise`  |         | Function for handling onFocus event.                                                 |
| step           | `number`                    | `1`     | Specifies the value of step to increment and decrement.                              |
| titleDecrement | `string \| (any => string)` |         | Specifies `title` property on decrement `Button`.                                    |
| titleIncrement | `string \| (any => string)` |         | Specifies `title` property on increment `Button`.                                    |
| selected       | `boolean`                   |         | If `true`, the BaggageStepper will have selected styles.                             |

## Functional specs

- The prop `defaultValue` sets the default value when the component mounts. If you need to get the current value of the BaggageStepper, use an arrow function.

```jsx
<BaggageStepper onChange={value => doSomething(value)} />
```

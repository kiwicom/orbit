"use client";

import * as React from "react";

import StepperStateless from "./StepperStateless";
import validateIncrement from "../utils/validateIncrement";
import validateDecrement from "../utils/validateDecrement";
import useStateWithCallback from "../hooks/useStateWithCallback";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Stepper
 *
 * To implement Stepper component into your project you'll need to add the import:
 *
 * ```jsx
 * import Stepper from "@kiwicom/orbit-components/lib/Stepper";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Stepper />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in Stepper component.
 *
 * | Name                 | Type                        | Default | Description                                                                               |
 * | :------------------- | :-------------------------- | :------ | :---------------------------------------------------------------------------------------- |
 * | dataTest             | `string`                    |         | Optional prop for testing purposes.                                                       |
 * | id                   | `string`                    |         | Set `id` for `Stepper`.                                                                   |
 * | maxWidth             | `boolean`                   | `108px` | Set `max-width`for `Stepper` wrapper.                                                     |
 * | active               | `boolean`                   |         | Changes the color of the `Stepper`.                                                       |
 * | defaultValue         | `number`                    | `0`     | Specifies the value of the Stepper. [See Functional specs](#functional-specs)             |
 * | disabled             | `boolean`                   | `false` | If `true`, the Stepper will be disabled.                                                  |
 * | maxValue             | `number`                    | `∞`     | Specifies the maximum value for the Stepper.                                              |
 * | minValue             | `number`                    | `-∞`    | Specifies the minimum value for the Stepper.                                              |
 * | name                 | `string`                    |         | The name for the Stepper.                                                                 |
 * | onBlur               | `event => void \| Promise`  |         | Function for handling onBlur event.                                                       |
 * | onChange             | `number => void \| Promise` |         | Function for handling onClick event.                                                      |
 * | onFocus              | `event => void \| Promise`  |         | Function for handling onFocus event.                                                      |
 * | step                 | `number`                    | `1`     | Specifies the value of step to increment and decrement.                                   |
 * | titleDecrement       | `string`                    |         | Specifies `aria-label` property on decrement `Button`. See accessibility tab.             |
 * | titleIncrement       | `string`                    |         | Specifies `aria-label` property on increment `Button`. See accessibility tab.             |
 * | ariaLabelValue       | `string`                    |         | Optional prop for `aria-label` value for input field. See accessibility tab.              |
 * | ariaLabelledby       | `string`                    |         | Optional prop for `aria-labelledby` value for input field. See accessibility tab.         |
 * | ariaDescribedby      | `string`                    |         | Optional prop for `aria-describedby` value for input field. See accessibility tab.        |
 * | descriptionDecrement | `string`                    |         | Optional prop for `aria-describedby` value for decrement `Button`. See accessibility tab. |
 * | descriptionIncrement | `string`                    |         | Optional prop for `aria-describedby` value for increment `Button`. See accessibility tab. |
 *
 * ## Functional specs
 *
 * - The prop `defaultValue` sets the default value when the component mounts. If you need to get the current value of the Stepper, use an arrow function.
 *
 * ```jsx
 * <Stepper onChange={value => doSomething(value)} />
 * ```
 *
 * ## StepperStateless
 *
 * Stepper offers a stateless version for your custom solutions. To use `StepperStateless`, you need to import it.
 *
 * ```jsx
 * import StepperStateless from "@kiwicom/orbit-components/lib/Stepper/StepperStateless";
 * ```
 *
 * ### Props
 *
 * Table below contains all types of the props available in `StepperStateless` component.
 *
 * | Name                 | Type                        | Default | Description                                                                               |
 * | :------------------- | :-------------------------- | :------ | :---------------------------------------------------------------------------------------- |
 * | dataTest             | `string`                    |         | Optional prop for testing purposes.                                                       |
 * | disabled             | `boolean`                   | `false` | If `true`, the Stepper will be disabled.                                                  |
 * | disabledIncrement    | `boolean`                   |         | If `true`, the increment `Button` will be disabled.                                       |
 * | disabledDecrement    | `boolean`                   |         | If `true`, the decrement `Button` will be disabled.                                       |
 * | maxValue             | `number`                    | `∞`     | Specifies the maximum value for the Stepper.                                              |
 * | minValue             | `number`                    | `-∞`    | Specifies the minimum value for the Stepper.                                              |
 * | name                 | `string`                    |         | The name for the Stepper.                                                                 |
 * | onBlur               | `event => void \| Promise`  |         | Function for handling onBlur event.                                                       |
 * | onChange             | `number => void \| Promise` |         | Function for handling onClick event.                                                      |
 * | onDecrement          | `event => void \| Promise`  |         | Function for handling decrement event.                                                    |
 * | onFocus              | `event => void \| Promise`  |         | Function for handling onFocus event.                                                      |
 * | onIncrement          | `event => void \| Promise`  |         | Function for handling increment event.                                                    |
 * | onKeyDown            | `event => void \| Promise`  |         | Function for handling onKeyDown event present on input.                                   |
 * | step                 | `number`                    | `1`     | Specifies the value of step to increment and decrement.                                   |
 * | titleDecrement       | `string`                    |         | Specifies `aria-label` property on decrement `Button`. See accessibility tab.             |
 * | titleIncrement       | `string`                    |         | Specifies `aria-label` property on increment `Button`. See accessibility tab.             |
 * | value                | `number \| string`          |         | Specifies the value of the StepperStateless. See accessibility tab.                       |
 * | ariaLabelValue       | `string`                    |         | Optional prop for `aria-label` value for input field. See accessibility tab.              |
 * | ariaLabelledby       | `string`                    |         | Optional prop for `aria-labelledby` value for input field. See accessibility tab.         |
 * | ariaDescribedby      | `string`                    |         | Optional prop for `aria-describedby` value for input field. See accessibility tab.        |
 * | descriptionDecrement | `string`                    |         | Optional prop for `aria-describedby` value for decrement `Button`. See accessibility tab. |
 * | descriptionIncrement | `string`                    |         | Optional prop for `aria-describedby` value for increment `Button`. See accessibility tab. |
 *
 * ### Usage:
 *
 * ```jsx
 * <StepperStateless value="2 adults" />
 * ```
 *
 * ## Helper functions
 *
 * We provide you with helpers function for validation they can be imported like this:
 *
 * ```jsx
 * import validateIncrement from "@kiwicom/orbit-components/lib/utils/validateIncrement";
 * import validateDecrement from "@kiwicom/orbit-components/lib/utils/validateDecrement";
 * ```
 *
 * ### ValidateIncrement
 *
 * Helper function for validating increment. Can be used with Stateless Stepper to make custom validation easier.
 *
 * #### Arguments
 *
 * | Name     | Type     | Default | Description                                                |
 * | :------- | :------- | :------ | :--------------------------------------------------------- |
 * | value    | `number` |         | Specifies the the current value.                           |
 * | maxValue | `number` | `∞`     | Specifies the maximum value for the InputStepperStateless. |
 * | step     | `number` | `1`     | Specifies the value of step to increment and decrement.    |
 *
 * #### Usage
 *
 * ```js
 * validateIncrement({ value, maxValue, step });
 * ```
 *
 * ### ValidateDecrement
 *
 * Helper function for validating decrement. Can be used with Stateless Stepper to make custom validation easier.
 *
 * #### Arguments
 *
 * | Name     | Type     | Default | Description                                                |
 * | :------- | :------- | :------ | :--------------------------------------------------------- |
 * | value    | `number` |         | Specifies the the current value.                           |
 * | minValue | `number` | `-∞`    | Specifies the minimum value for the InputStepperStateless. |
 * | step     | `number` | `1`     | Specifies the value of step to increment and decrement.    |
 *
 * #### Usage
 *
 * ```js
 * validateDecrement({ value, minValue, step });
 * ```
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Stepper component has been designed with accessibility in mind. It can be used with keyboard navigation and includes properties that enhance the experience for users of assistive technologies.
 *
 * The following props provide additional information to screen readers.
 *
 * **Input field props:**
 *
 * | Prop              | Type   | Description                                                                                                                                                              |
 * | ----------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 * | `ariaLabelValue`  | string | Specifies `aria-label` for the input field.                                                                                                                              |
 * | `ariaLabelledby`  | string | Specifies `aria-labelledby` for the input field, referencing the ID of the element that labels the component, ensuring that screen readers announce the label correctly. |
 * | `ariaDescribedby` | string | Specifies `aria-describedby` for the input field, referencing the ID of the element that describes the component, providing additional context or instructions.          |
 *
 * **Buttons props:**
 *
 * | Prop                   | Type   | Description                                                                                                |
 * | ---------------------- | ------ | ---------------------------------------------------------------------------------------------------------- |
 * | `titleDecrement`       | string | Specifies `aria-label` for the decrement icon button.                                                      |
 * | `titleIncrement`       | string | Specifies `aria-label` for the increment icon button.                                                      |
 * | `descriptionDecrement` | string | Specifies `aria-describedby` for the decrement icon button, referencing the ID of the descriptive element. |
 * | `descriptionIncrement` | string | Specifies `aria-describedby` for the increment icon button, referencing the ID of the descriptive element. |
 *
 * Although these props are optional for the Stepper (StepperStateless) component itself, it is recommended to fill them in.
 *
 * ### Example
 *
 * ```jsx
 * <Stepper
 *   step={1}
 *   minValue={0}
 *   minValue={10}
 *   ariaLabelValue="Number of passengers"
 *   titleDecrement="Remove a passenger"
 *   titleIncrement="Add a passenger"
 * />
 * ```
 *
 * The screen reader will announce the value title (`Number of passengers`) and buttons title (`Add a passenger`, `Remove a passenger`) once they are focused by the screen reader.
 *
 * ```jsx
 * <Stack>
 *   <Stack>
 *     <Text id="passengers">Passengers</Text>
 *   </Stack>
 *   <Stepper
 *     step={1}
 *     minValue={0}
 *     maxValue={10}
 *     ariaLabelValue="Number of passengers"
 *     ariaLabelledby="passengers"
 *     titleDecrement="Remove a passenger"
 *     titleIncrement="Add a passenger"
 *   />
 * </Stack>
 * ```
 *
 * This example includes `ariaLabelledby` prop. In this case, `ariaLabelledby` prop is prioritized over `ariaLabelValue`, so the screen reader will announce the value title (`Passengers`) and buttons title (`Add a passenger`, `Remove a passenger`) once they are focused by the screen reader.
 *
 * ```jsx
 * <Stack>
 *   <Stack>
 *     <Text id="adults-title">Adults</Text>
 *     <Text id="adults-description">Number of adults in your group</Text>
 *   </Stack>
 *   <Stepper
 *     step={1}
 *     minValue={0}
 *     maxValue={10}
 *     ariaLabelValue="Number of passengers"
 *     ariaLabelledby="adults-title"
 *     ariaDescribedby="adults-description"
 *     titleDecrement="Remove a passenger"
 *     titleIncrement="Add a passenger"
 *     descriptionIncrement="adults-title"
 *     descriptionDecrement="adults-title"
 *   />
 * </Stack>
 * ```
 *
 * This example includes `ariaLabelledby`, `descriptionIncrement` and `descriptionDecrement` props.
 *
 * When decrement button is focused by screen reader, the screen reader will announce the button title (`Remove a passenger`) and complementary information (`Adults`).
 *
 * For input field, the value of `ariaLabelledby` reference (`Adults`) is read first, then the complementary information (value of `ariaDescribedby` prop) is announced - `Number of adults in your group`. Value of `ariaLabelValue` is ignored.
 *
 * The same logic as for decrement button is applicable for the increment button. When increment button is focused by screen reader, the screen reader will announce the button title (`Add a passenger`) and complementary information (`Adults`).
 *
 *
 * @orbit-doc-end
 */
const Stepper = ({ onChange, defaultValue = 0, maxWidth = 108, ...props }: Props) => {
  const [value, setValue] = useStateWithCallback<number>(defaultValue, onChange);

  const incrementCounter = () => {
    const { maxValue = Number.POSITIVE_INFINITY, step = 1 } = props;

    setValue(validateIncrement({ value, maxValue, step }));
  };

  const decrementCounter = () => {
    const { minValue = Number.NEGATIVE_INFINITY, step = 1 } = props;

    setValue(validateDecrement({ value, minValue, step }));
  };

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.keyCode === 40) {
      ev.preventDefault();
      decrementCounter();
    }
    if (ev.keyCode === 38) {
      ev.preventDefault();
      incrementCounter();
    }
  };

  const {
    onBlur,
    onFocus,
    disabled,
    name,
    dataTest,
    id,
    minValue,
    maxValue,
    titleIncrement,
    titleDecrement,
    descriptionIncrement,
    descriptionDecrement,
    active,
    ariaLabelValue,
    ariaLabelledby,
    ariaDescribedby,
  } = props;
  return (
    <StepperStateless
      onKeyDown={handleKeyDown}
      maxWidth={maxWidth}
      onIncrement={incrementCounter}
      onDecrement={decrementCounter}
      minValue={minValue}
      maxValue={maxValue}
      onFocus={onFocus}
      onBlur={onBlur}
      active={active}
      disabled={disabled}
      dataTest={dataTest}
      id={id}
      value={value}
      name={name}
      ariaLabelValue={ariaLabelValue}
      ariaLabelledby={ariaLabelledby}
      ariaDescribedby={ariaDescribedby}
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
      descriptionIncrement={descriptionIncrement}
      descriptionDecrement={descriptionDecrement}
    />
  );
};

export default Stepper;

export { default as StepperStateless } from "./StepperStateless";

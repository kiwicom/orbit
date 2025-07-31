"use client";

import * as React from "react";
import cx from "clsx";

import handleKeyDown from "../utils/handleKeyDown";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Switch
 *
 * To implement the Switch component into your project you'll need to add the import:
 *
 * ```jsx
 * import Switch from "@kiwicom/orbit-components/lib/Switch";
 * ```
 *
 * After adding import to your project you can use it simply like:
 *
 * ```jsx
 * <Switch checked={isChecked} onChange={handleOnChange} />
 * ```
 *
 * ## Props
 *
 * The table below contains all types of the props available in the Switch component.
 *
 * | Name           | Type                    | Default      | Description                                |
 * | :------------- | :---------------------- | :----------- | :----------------------------------------- |
 * | dataTest       | `string`                |              | Optional prop for testing purposes.        |
 * | id             | `string`                |              | Set `id` for `Switch` input.               |
 * | **onChange**   | `() => void \| Promise` |              | Function for handling onChange event.      |
 * | onFocus        | `() => void \| Promise` |              | Function for handling onFocus event.       |
 * | onBlur         | `() => void \| Promise` |              | Function for handling onBlur event.        |
 * | **checked**    | `boolean`               |              | If `true`, the Switch will be checked.     |
 * | icon           | `React.Node`            | `<Circle />` | Optional property for custom icon.         |
 * | disabled       | `boolean`               | `false`      | If `true`, the Switch will be disabled.    |
 * | ariaControls   | `string`                |              | Optional prop for `aria-controls` value.   |
 * | ariaLabel      | `string`                |              | Optional prop for `aria-label` value.      |
 * | ariaLabelledby | `string`                |              | Optional prop for `aria-labelledby` value. |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Switch component has been designed with accessibility in mind.
 *
 * It supports keyboard navigation and includes the following properties that provide additional information to screen readers:
 *
 * | Name           | Type     | Description                                                                                                                                                                                                                                                                 |
 * | :------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | ariaControls   | `string` | Allows you to specify an `aria-controls` attribute to establish the relationship between the Switch and element which is controlled by it. `ariaControls` works only with a unique `id` of an element.                                                                      |
 * | ariaLabel      | `string` | Allows you to specify an `aria-label` attribute of the component.                                                                                                                                                                                                           |
 * | ariaLabelledby | `string` | Allows you to specify an `aria-labelledby` attribute of the component. This attribute references the id(s) of element(s) that label(s) the Switch, separated by a space. The elements with those ids can be hidden, so that their text is only announced by screen readers. |
 *
 * While these props are optional, we recommend including them to ensure proper functionality with assistive technologies.
 * This helps users better understand the component's context and improves the overall experience.
 *
 * ### Example
 *
 * The following code snippet shows how to use these properties:
 *
 * ```jsx
 * <Card
 *   title="Billing details"
 *   actions={
 *     <Switch
 *       checked={isExpanded}
 *       onChange={handleShowBillingDetails}
 *       ariaLabel="Toggle billing details section"
 *       ariaControls="BillingDetailsForm"
 *     />
 *   }
 * >
 *   {isExpanded && (
 *     <CardSection>
 *       <BillingDetailsForm id="BillingDetailsForm" />
 *     </CardSection>
 *   )}
 * </Card>
 * ```
 *
 * Using the `ariaLabel` prop enables screen readers to properly announce the Switch component.
 * Alternatively, you can use the `ariaLabelledby` prop to reference another element that serves as a label for the Switch component.
 *
 * For enhanced accessibility, it is recommended to have these label strings translated and dynamically updated based on the user's current journey state
 * (e.g. if a billing details section is expanded and the user is about to collapse it, the screen reader should properly announce it).
 *
 * The `ariaControls` prop establishes a connection between the Switch and the element it controls.
 * This relationship enables users to navigate directly from the Switch to this element, improving the overall navigation experience.
 *
 *
 * @orbit-doc-end
 */
const Switch = ({
  onChange,
  checked,
  dataTest,
  id,
  icon,
  onBlur,
  onFocus,
  disabled,
  ariaControls,
  ariaLabel,
  ariaLabelledby,
  ref,
}: Props) => {
  return (
    <label className="inline-block">
      <div
        className={cx(
          "duration-fast h-600 w-form-box-normal relative flex items-center justify-between rounded-full transition-colors",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
          checked ? "bg-blue-normal" : "bg-cloud-dark",
        )}
      >
        <input
          className={cx(
            "peer absolute inset-0 m-0 size-full p-0 opacity-0",
            !disabled && "cursor-pointer",
          )}
          ref={ref}
          checked={checked}
          disabled={disabled}
          aria-checked={checked}
          role="switch"
          onKeyDown={!disabled ? handleKeyDown<HTMLInputElement>(undefined, onChange) : undefined}
          onBlur={!disabled ? onBlur : undefined}
          onChange={!disabled ? onChange : undefined}
          onFocus={!disabled ? onFocus : undefined}
          type="checkbox"
          data-test={dataTest}
          id={id}
          aria-controls={ariaControls}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
        />
        <div
          className={cx(
            "bg-white-normal duration-fast shadow-switch size-500 absolute box-border inline-flex items-center justify-center rounded-full",
            "peer-focus:outline-blue-normal peer-focus:outline peer-focus:outline-2",
            "[&_svg]:size-300",
            !disabled && "active:shadow-level2",
            !checked && (icon ? "[&_svg]:text-ink-normal" : "[&_svg]:text-cloud-dark"),
            checked
              ? "[&_svg]:text-blue-normal rtl:-translate-x-50 ltr:translate-x-[calc(100%+2px)]"
              : "left-50",
          )}
        >
          {icon || null}
        </div>
      </div>
    </label>
  );
};

export default Switch;

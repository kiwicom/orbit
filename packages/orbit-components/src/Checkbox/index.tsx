"use client";

import * as React from "react";
import cx from "clsx";

import Check from "../icons/Check";
import getFieldDataState from "../common/getFieldDataState";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Checkbox
 *
 * To implement Checkbox component into your project you'll need to add the import:
 *
 * ```jsx
 * import Checkbox from "@kiwicom/orbit-components/lib/Checkbox";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Checkbox label="Checkbox" />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in Checkbox component.
 *
 * | Name            | Type                       | Default | Description                                                                                    |
 * | :-------------- | :------------------------- | :------ | :--------------------------------------------------------------------------------------------- |
 * | ariaControls    | `string`                   |         | Identifies the element whose contents or presence are controlled by the Checkbox.              |
 * | ariaDescribedby | `string`                   |         | Identifies the element that describes the Checkbox, providing additional information.          |
 * | checked         | `boolean`                  |         | If `true`, the Checkbox will be checked.                                                       |
 * | defaultChecked  | `boolean`                  |         | If `true`, the Checkbox will be checked by default. Only to be used in uncontrolled.           |
 * | disabled        | `boolean`                  | `false` | If `true`, the Checkbox will be set up as disabled.                                            |
 * | dataTest        | `string`                   |         | Optional prop for testing purposes.                                                            |
 * | id              | `string`                   |         | Set `id` for `Checkbox`                                                                        |
 * | hasError        | `boolean`                  | `false` | If `true`, the border of the Checkbox will turn red. [See Functional specs](#functional-specs) |
 * | info            | `React.Node`               |         | The additional info about the Checkbox.                                                        |
 * | label           | `string`                   |         | The label of the Checkbox.                                                                     |
 * | name            | `string`                   |         | The name for the Checkbox.                                                                     |
 * | onChange        | `event => void \| Promise` |         | Function for handling onChange event.                                                          |
 * | ref             | `func`                     |         | Prop for forwarded ref of the Checkbox. [See Functional specs](#functional-specs)              |
 * | tabIndex        | `string \| number`         |         | Specifies the tab order of an element                                                          |
 * | value           | `string`                   |         | The value of the Checkbox.                                                                     |
 *
 * ## Functional specs
 *
 * - The `hasError` prop will be visible only when the Checkbox is not checked nor disabled.
 *
 * - `ref` can be used, for example, to control focus or to get the status (checked) of the element.
 *
 * # FakeCheckbox
 *
 * The FakeCheckbox component was created for accessibility reasons and offers only a visual presentation of the Checkbox component. It does not have any functionality and accepts only state props - `disabled`, `checked`, `hasError`.
 *
 * ## Props
 *
 * Table below contains all types of the props available in FakeCheckbox component.
 *
 * | Name     | Type      | Default | Description                                                                                                         |
 * | :------- | :-------- | :------ | :------------------------------------------------------------------------------------------------------------------ | --- |
 * | checked  | `boolean` | `false` | If `true`, the FakeCheckbox will be checked.                                                                        |
 * | disabled | `boolean` | `false` | If `true`, the FakeCheckbox will be set up as disabled.                                                             |
 * | hasError | `boolean` | `false` | If `true`, the border of the FakeCheckbox will turn red. [See Functional specs](#functional-specs-for-fakecheckbox) |     |
 *
 * ## Functional specs for FakeCheckbox
 *
 * - The `hasError` prop will be visible only when the FakeCheckbox is not checked nor disabled.
 *
 * ## Example
 *
 * ```jsx
 * import * as React from "react";
 *
 * <div role="checkbox" onChange={() => {}}>
 *   <Text>Item title</Text>
 *   <FakeCheckbox checked={selected} disabled={disabled} />
 * </div>;
 * ```
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Checkbox component has been designed with accessibility in mind, providing standard checkbox functionality with keyboard navigation and screen reader support.
 *
 * ### Accessibility Props
 *
 * **Checkbox props:**
 *
 * | Name            | Type             | Description                                                                                                                                                                               |
 * | :-------------- | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | ariaControls    | string           | Identifies the element whose contents or presence are controlled by the Checkbox. Use this to connect the Checkbox to related elements that are shown/hidden based on the Checkbox state. |
 * | ariaDescribedby | string           | Identifies the element that describes the Checkbox. Typically used to connect error messages or additional information to the Checkbox.                                                   |
 * | hasError        | boolean          | When true, applies a visual error state and sets aria-invalid="true" to indicate an error to screen readers.                                                                              |
 * | label           | React.Node       | Provides an accessible name for the Checkbox through its label content.                                                                                                                   |
 * | disabled        | boolean          | When true, prevents interaction with the Checkbox and communicates this state to assistive technology.                                                                                    |
 * | tabIndex        | string \| number | Controls the tab order of the checkbox within the page.                                                                                                                                   |
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically manages ARIA attributes:
 *   - Uses native HTML `<input type="checkbox">` element which has an implicit `role="checkbox"` for screen readers
 *   - Automatically announces checked/unchecked states for screen readers
 *   - Provides visual feedback for error states that is also communicated to screen readers
 *   - Supports keyboard focus management with visible focus indicators
 *   - Disabled state is properly communicated to screen readers
 *
 * ### Best Practices
 *
 * - Always provide a descriptive label for the Checkbox to ensure screen reader users understand its purpose
 * - Use `ariaControls` to establish relationships between a Checkbox and the content it shows/hides or controls
 * - Use `ariaDescribedby` to connect supplementary information to the Checkbox, such as error messages, help text, or additional context for better screen reader communication
 * - Group related Checkboxes with appropriate heading elements or fieldsets with legends
 * - Ensure sufficient color contrast between the checkbox, its label, and the background
 * - When using the hasError state, make sure to provide an accessible error message using ariaDescribedby
 * - Use the Checkbox's native state management rather than creating custom checkbox-like components
 *
 * ### Keyboard Navigation
 *
 * - **Tab**: Moves focus to the Checkbox
 * - **Space**: Toggles the checked state of the Checkbox
 * - When focused, the Checkbox has a visible focus indicator
 *
 * ### Examples
 *
 * #### Basic Checkbox with Label
 *
 * ```jsx
 * <Checkbox label="I agree to the terms and conditions" />
 * ```
 *
 * Screen reader announces: "I agree to the terms and conditions, checkbox, not checked"
 *
 * #### Checkbox with Error State
 *
 * ```jsx
 * <div>
 *   <Checkbox
 *     label="I agree to the terms and conditions"
 *     hasError={true}
 *     ariaDescribedby="checkbox-error"
 *   />
 *   <div id="checkbox-error">You must accept the terms to continue</div>
 * </div>
 * ```
 *
 * Screen reader announces: "I agree to the terms and conditions, You must accept the terms to continue, invalid, not checked, checkbox"
 *
 * #### Checkbox Controlling Content Display
 *
 * ```jsx
 * <div>
 *   <Checkbox label="Show advanced options" ariaControls="advanced-options" />
 *   <div id="advanced-options">{/* Advanced options content *\/}</div>
 * </div>
 * ```
 *
 * Screen reader announces: "Show advanced options, checkbox, not checked" and indicates that the checkbox controls other content.
 *
 * #### Checkbox with Additional Information
 *
 * ```jsx
 * <Checkbox
 *   label="Subscribe to newsletter"
 *   info="Receive weekly updates about our products and services"
 * />
 * ```
 *
 * Screen reader announces: "Subscribe to newsletter, Receive weekly updates about our products and services, checkbox, not checked"
 *
 *
 * @orbit-doc-end
 */
const Checkbox = (props: Props) => {
  const {
    label,
    value,
    hasError = false,
    disabled = false,
    checked,
    defaultChecked,
    name,
    onChange,
    dataTest,
    id,
    info,
    tabIndex,
    ariaControls,
    ariaDescribedby,
    ref,
  } = props;

  const Component = label ? "label" : "div";

  return (
    <Component
      htmlFor={label ? id : undefined}
      className={cx(
        "orbit-checkbox-label",
        "font-base",
        "flex flex-row",
        "relative w-full",
        "[&_.orbit-checkbox-icon-container]:hover:shadow-none",
        "[&_.orbit-checkbox-icon-container]:has-[:focus]:outline-blue-normal [&_.orbit-checkbox-icon-container]:has-[:focus]:outline [&_.orbit-checkbox-icon-container]:has-[:focus]:outline-2",
        "[&_.orbit-checkbox-icon-container>svg]:has-[:checked]:visible",
        disabled
          ? [
              "cursor-not-allowed",
              "[&_.orbit-checkbox-icon-container]:bg-form-element-disabled-background",
              "[&_.orbit-checkbox-icon-container]:has-[:checked]:bg-cloud-dark",
              checked && "[&_.orbit-checkbox-icon-container]:bg-cloud-dark",
            ]
          : [
              "cursor-pointer",
              "[&_.orbit-checkbox-icon-container]:has-[:checked]:border-blue-normal [&_.orbit-checkbox-icon-container]:has-[:checked]:bg-blue-normal [&_.orbit-checkbox-icon-container]:has-[:checked]:hover:border-blue-dark [&_.orbit-checkbox-icon-container]:has-[:checked]:hover:bg-blue-dark",
              checked &&
                !hasError &&
                "[&_.orbit-checkbox-icon-container]:bg-blue-normal [&_.orbit-checkbox-icon-container]:border-blue-normal [&_.orbit-checkbox-icon-container]:hover:bg-blue-dark [&_.orbit-checkbox-icon-container]:hover:border-blue-dark",
              !checked && "[&_.orbit-checkbox-icon-container]:bg-form-element-background",
              !checked && hasError
                ? "[&_.orbit-checkbox-icon-container]:border-form-element-error"
                : "[&_.orbit-checkbox-icon-container]:border-form-element-border-color [&_.orbit-checkbox-icon-container]:hover:border-blue-light-active [&_.orbit-checkbox-icon-container]:active:border-form-element-focus",
            ],
      )}
    >
      <input
        className="-z-default absolute opacity-0"
        data-test={dataTest}
        id={id}
        data-state={getFieldDataState(!!hasError)}
        value={value}
        type="checkbox"
        disabled={disabled}
        name={name}
        tabIndex={tabIndex ? Number(tabIndex) : undefined}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        ref={ref}
        aria-controls={ariaControls}
        aria-describedby={ariaDescribedby}
        aria-invalid={hasError ? true : undefined}
      />
      <div
        className={cx(
          "orbit-checkbox-icon-container",
          "relative box-border",
          "border border-solid",
          "flex shrink-0 grow-0 basis-auto items-center justify-center",
          "size-icon-medium",
          "rounded-150 de:rounded-100",
          "duration-fast transition-all ease-in-out",
          "[&>svg]:size-icon-small",
          "[&>svg]:flex [&>svg]:items-center [&>svg]:justify-center",
          checked ? "[&>svg]:visible" : "[&>svg]:invisible",
          disabled ? ["border-cloud-dark"] : "active:scale-95",
        )}
      >
        <Check customColor="white" ariaHidden />
      </div>
      {(label || info) && (
        <div className={cx("ms-200 flex flex-1 flex-col", disabled ? "opacity-50" : "opacity-100")}>
          {label && (
            <span className="font-base text-form-element-normal text-form-element-label-foreground [&_.orbit-text]:text-form-element-normal [&_.orbit-text]:text-form-element-label-foreground [&_.orbit-text]:leading-small font-medium leading-normal [&_.orbit-text]:font-medium">
              {label}
            </span>
          )}
          {info && (
            <span className="text-small leading-small text-secondary-foreground">{info}</span>
          )}
        </div>
      )}
    </Component>
  );
};

export default Checkbox;

export { default as FakeCheckbox } from "./FakeCheckbox";

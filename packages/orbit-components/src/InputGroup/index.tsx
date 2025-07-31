"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";
import type { Props as InputFieldProps } from "../InputField/types";
import type { Props as SelectProps } from "../Select/types";
import FormLabel from "../FormLabel";
import ErrorFormTooltip from "../ErrorFormTooltip";
import useRandomId, { useRandomIdSeed } from "../hooks/useRandomId";
import getFieldDataState from "../common/getFieldDataState";
import { getSpaceAfterClasses } from "../common/tailwind";

const findPropInChild = (propToFind, children) =>
  React.Children.map(children, el => {
    if (el.props && el.props[propToFind]) return el.props[propToFind];
    return null;
  }).filter(el => el != null);

/**
 * @orbit-doc-start
 * README
 * ----------
 * # InputGroup
 *
 * To implement InputGroup component into your project you'll need to add the import:
 *
 * ```jsx
 * import InputGroup from "@kiwicom/orbit-components/lib/InputGroup";
 * import InputField from "@kiwicom/orbit-components/lib/InputField";
 * import Select from "@kiwicom/orbit-components/lib/Select";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <InputGroup>
 *   <InputField />
 *   <Select />
 * </InputGroup>
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in InputGroup component.
 *
 * | Name           | Type                        | Default      | Description                                                                                                         |
 * | :------------- | :-------------------------- | :----------- | :------------------------------------------------------------------------------------------------------------------ |
 * | **children**   | `React.Node`                |              | The content of the InputGroup, normally **InputField** or **Select**.                                               |
 * | dataTest       | `string`                    |              | Optional prop for testing purposes.                                                                                 |
 * | id             | `string`                    |              | Set `id` for `InputGroup`                                                                                           |
 * | error          | `React.Node`                |              | The error to display in a tooltip. [See Functional specs](#functional-specs)                                        |
 * | help           | `React.Node`                |              | The help to display in a tooltip. [See Functional specs](#functional-specs)                                         |
 * | disabled       | `boolean`                   |              | Whether to disable all nested fields.                                                                               |
 * | flex           | `string` or `Array<string>` | `"0 1 auto"` | The flex attribute(s) for children of the InputGroup. [See Functional specs](#functional-specs)                     |
 * | label          | `Translation`               |              | The label for the InputGroup. [See Functional specs](#functional-specs)                                             |
 * | onChange       | `event => void \| Promise`  |              | Function for handling onClick event. [See Functional specs](#functional-specs)                                      |
 * | onFocus        | `event => void \| Promise`  |              | Function for handling onFocus event. [See Functional specs](#functional-specs)                                      |
 * | onBlur         | `event => void \| Promise`  |              | Function for handling onBlur event between different InputGroup children. [See Functional specs](#functional-specs) |
 * | onBlurGroup    | `event => void \| Promise`  |              | Function for handling onBlur event for the whole InputGroup. [See Functional specs](#functional-specs)              |
 * | spaceAfter     | `enum`                      |              | Additional `margin-bottom` after component.                                                                         |
 * | ariaLabel      | `string`                    |              | Optional prop for `aria-label` value.                                                                               |
 * | ariaLabelledby | `string`                    |              | Optional prop for `aria-labelledby` value.                                                                          |
 * | required       | `boolean`                   |              | If `true`, displays the label as required and sets `aria-required` on the fieldset.                                 |
 *
 * ### enum
 *
 * | spaceAfter   |
 * | :----------- |
 * | `"none"`     |
 * | `"smallest"` |
 * | `"small"`    |
 * | `"normal"`   |
 * | `"medium"`   |
 * | `"large"`    |
 * | `"largest"`  |
 *
 * ## Functional specs
 *
 * - `error` or `help` defined on children will be displayed to user from left to right, only one error at a time will be displayed until resolved.
 *
 * - The `error` prop overwrites the `help` prop, due to higher priority.
 *
 * - Define `error` or `help` only for the **InputGroup**. Any `error` or `help` in InputField or Select won't be displayed.
 *
 * - You can set up different `flex` attribute for every children, or use one for all. See [flex property docs](https://www.w3schools.com/cssref/css3_pr_flex.asp) for more information.
 *
 * - If the passed children into the InputGroup won't have any callbacks - either `onChange`, `onFocus` or `onBlur`, the passed callback of the InputGroup will be used.
 *
 * - `onBlurGroup`: In comparison to onBlur, which is triggered by every blur event of InputGroup's children, onBlurGroup treats children as a single field, and fires only when a child loses focus and no child gains focus, for example clicking out of InputGroup.
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The InputGroup component has been designed with accessibility in mind, providing a fieldset structure that groups related form controls with proper semantic markup and screen reader support.
 *
 * ### Accessibility Props
 *
 * | Name           | Type         | Description                                                                                                                    |
 * | :------------- | :----------- | :----------------------------------------------------------------------------------------------------------------------------- |
 * | ariaLabel      | `string`     | Provides an accessible label for the fieldset when no visible `label` is provided.                                             |
 * | ariaLabelledby | `string`     | References the ID of an element that labels the fieldset.                                                                      |
 * | label          | `string`     | Provides a visible legend for the fieldset that also serves as the accessible name.                                            |
 * | error          | `React.Node` | Provides a group-level error message. When displayed, its content is assigned to `aria-describedby` on all child components.   |
 * | help           | `React.Node` | Provides contextual help for the group. Behaves the same as `error` and is announced to screen readers via `aria-describedby`. |
 * | required       | `bool`       | When `true`, applies `aria-required="true"` to indicate at least one field must be completed.                                  |
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically manages ARIA attributes:
 *   - `aria-required="true"` when the `required` prop is set
 *   - `aria-describedby` on all child elements when InputGroup has `error` or `help` content and the tooltip is shown
 * - The component automatically manages semantic structure:
 *   - Uses `<fieldset>` element to group related form controls
 *   - Wraps `label` prop content in `<legend>` element
 * - Child component integration:
 *   - InputGroup `error`/`help` takes precedence over individual component messages, i.e child `error`/`help` props are ignored
 *   - Child component labels are visually hidden but converted to `aria-label` for screen readers
 *   - Child component `ariaDescribedby` and `ariaLabel` values are overwritten by InputGroup's accessibility logic
 *
 * ### Keyboard Navigation
 *
 * - **Tab/Shift + Tab**: Standard form navigation through child controls
 * - Individual keyboard interactions are handled by child components (InputField, Select, etc.)
 *
 * ### Best Practices
 *
 * - Always provide either `label` or `ariaLabel` to ensure the fieldset has an accessible name
 * - Use `ariaLabelledby` when referencing an existing heading that describes the group
 * - Avoid setting `ariaDescribedby` on child components as InputGroup will completely override these values
 * - Use InputGroup's `error` and `help` props for group-level messages rather than individual component messages
 * - Ensure all accessibility strings are properly translated
 * - Group only logically related form controls together
 *
 * ### Examples
 *
 * #### Basic InputGroup with Label
 *
 * ```jsx
 * <InputGroup label="Passenger details">
 *   <InputField label="First name" />
 *   <InputField label="Last name" />
 * </InputGroup>
 * ```
 *
 * Screen reader announces: "First name, edit, Passenger details, group" when focusing on the first input field.
 *
 * #### InputGroup with Error Message
 *
 * ```jsx
 * <InputGroup label="Contact information" error="Please complete all required fields">
 *   <InputField label="Email" required />
 *   <InputField label="Phone number" />
 * </InputGroup>
 * ```
 *
 * Screen reader announces: "Email, required, edit, Please complete all required fields, Contact information, group" when focusing on the first input field.
 *
 * #### InputGroup with ariaLabelledby
 *
 * ```jsx
 * <Stack>
 *   <Heading id="travel-details">Travel Details</Heading>
 *   <InputGroup ariaLabelledby="travel-details" label="Destinations">
 *     <Select options={countryOptions} label="Departure country" />
 *     <Select options={countryOptions} label="Destination country" />
 *   </InputGroup>
 * </Stack>
 * ```
 *
 * Screen reader announces: "Departure country, edit, Travel Details, group" when focusing on the first select field.
 * _Note: The `label` prop is ignored by the screen reader when `ariaLabelledby` is provided._
 *
 * #### Required InputGroup
 *
 * ```jsx
 * <InputGroup label="Billing address" required>
 *   <InputField label="Street address" />
 *   <InputField label="City" />
 *   <Select options={countryOptions} label="Country" />
 * </InputGroup>
 * ```
 *
 * Screen reader announces: "Street address, edit, Billing address, group, required" when focusing on the first input field.
 *
 * #### Group-level error/help messages
 *
 * If the InputGroup has `error`/`help` messages, these will be properly associated with all child components:
 *
 * ```jsx
 * <InputGroup label="Travel preferences" error="Please complete all fields">
 *   <Select options={countryOptions} label="Departure country" help="Fill in the origin country" />
 *   <Select options={countryOptions} label="Destination country" />
 * </InputGroup>
 * ```
 *
 * Screen reader announces: "Departure country, edit, Please complete all fields, Travel preferences, group" when focusing on the first Select component and "Destination country, edit, Please complete all fields" when focusing on the second Select component.
 * _Note: Individual component `help`/`error` messages are ignored when the InputGroup has its own message._
 *
 * #### Component-level error/help messages
 *
 * If individual child components have their own `error`/`help` messages (and the InputGroup doesn't), only those specific components will have `aria-describedby` set:
 *
 * ```jsx
 * <InputGroup label="Travel preferences">
 *   <Select options={countryOptions} label="Departure country" />
 *   <Select options={countryOptions} label="Destination country" error="This field is required" />
 * </InputGroup>
 * ```
 *
 * Screen reader announces: "Departure country, edit, Travel preferences, group" when focusing on the first Select component, and "Destination country, edit, This field is required" when focusing on the second Select component.
 *
 *
 * @orbit-doc-end
 */
const InputGroup = ({
  children,
  label,
  flex,
  help,
  id,
  error,
  disabled,
  dataTest,
  spaceAfter,
  onFocus,
  onBlur,
  onChange,
  onBlurGroup,
  ariaLabel,
  ariaLabelledby,
  required,
  ref,
}: Props) => {
  const [active, setActive] = React.useState(false);
  const inputID = useRandomId();
  const [tooltipShown, setTooltipShown] = React.useState(false);
  const [tooltipShownHover, setTooltipShownHover] = React.useState(false);
  const labelRef = React.useRef(null);
  const iconRef = React.useRef(null);

  const foundErrors = findPropInChild("error", children);
  const foundHelp = findPropInChild("help", children);

  const errorReal = error || (foundErrors.length > 0 && foundErrors[0]);
  const helpReal = help || (foundHelp.length > 0 && foundHelp[0]);
  const randomId = useRandomIdSeed();
  const feedbackId = useRandomId();

  const hasTooltip = errorReal || helpReal;
  const shown = tooltipShown || tooltipShownHover;

  const handleFocus =
    callBack =>
    (ev: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setActive(true);
      setTooltipShown(true);
      if (onFocus) onFocus(ev);
      if (callBack) callBack(ev);
    };

  const handleBlur =
    callBack =>
    (ev: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setActive(false);
      if (onBlur) onBlur(ev);
      if (callBack) callBack(ev);
    };

  const handleChange =
    callBack =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      if (onChange) onChange(ev);
      if (callBack) callBack(ev);
    };

  const handleBlurGroup = (ev: React.FocusEvent<HTMLDivElement>) => {
    ev.persist();
    if (onBlurGroup) {
      setTimeout(() => {
        setActive(isActive => {
          if (!isActive) {
            onBlurGroup(ev);
          }
          return isActive;
        });
      }, 50);
    }
  };

  return (
    <div
      className={cx(
        "relative flex w-full flex-col",
        spaceAfter != null && getSpaceAfterClasses(spaceAfter),
      )}
    >
      <fieldset
        ref={ref}
        id={id}
        data-test={dataTest}
        data-state={getFieldDataState(!!errorReal)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-required={required}
      >
        {label && (
          <legend>
            <FormLabel
              id={inputID}
              labelRef={labelRef}
              error={!!errorReal}
              help={!!helpReal}
              iconRef={iconRef}
              onMouseEnter={() => (hasTooltip ? setTooltipShownHover(true) : undefined)}
              onMouseLeave={() => (hasTooltip ? setTooltipShownHover(false) : undefined)}
              required={required}
            >
              {label}
            </FormLabel>
          </legend>
        )}

        <div
          className={cx(
            "text-normal h-form-box-normal duration-fast rounded-150 tb:rounded-100 z-default w-full transition-shadow ease-in-out",
            disabled ? "bg-form-element-disabled-background" : "bg-form-element-background",
            !errorReal && "shadow-form-element",
            !errorReal && !disabled && "hover:shadow-form-element-hover",
            Boolean(errorReal) && "shadow-form-element-error",
            Boolean(errorReal) && !disabled && "hover:shadow-form-element-error-hover",
          )}
        >
          <div className="relative flex" onBlur={handleBlurGroup}>
            {React.Children.toArray(children).map((child, key) => {
              // TODO: next cleanup iteration just remove this whole `flex` prop thing
              // and cloning elements, and make children take care of their sizing themselves

              const childrenCount = React.Children.count(children);
              const isLastChild = key === childrenCount - 1;
              const flexArray = Array.isArray(flex) ? flex : [flex];

              let childFlex = flex ? flexArray[key] || flexArray[0] : undefined;
              if (isLastChild && flexArray.length !== childrenCount) {
                childFlex = "1 1 100%";
              }

              const item = child as React.ReactElement<InputFieldProps | SelectProps>;

              return (
                <div
                  key={randomId(String(key))}
                  className={cx(
                    "orbit-input-group-child [&_.orbit-input-field-fake-input]:hidden [&_.orbit-input-field-fake-input]:bg-transparent [&_.orbit-input-field-input~.orbit-input-field-fake-input]:shadow-none [&_.orbit-select-container_select]:bg-transparent [&_.orbit-select-container_select]:shadow-none [&_.orbit-select-container_select]:focus:outline-none",
                    // InputField:after
                    "[&_.orbit-input-field-input-container]:after:duration-fast [&_.orbit-input-field-input-container]:after:z-default [&_.orbit-input-field-input-container]:after:h-600 [&_.orbit-input-field-input-container]:after:absolute [&_.orbit-input-field-input-container]:after:end-0 [&_.orbit-input-field-input-container]:after:top-1/2 [&_.orbit-input-field-input-container]:after:block [&_.orbit-input-field-input-container]:after:-translate-y-1/2 [&_.orbit-input-field-input-container]:after:border-r [&_.orbit-input-field-input-container]:after:transition-colors [&_.orbit-input-field-input-container]:after:ease-in-out [&_.orbit-input-field-input-container]:last-of-type:after:content-none",
                    // Select:after
                    "[&_.orbit-select-container]:after:duration-fast [&_.orbit-select-container]:after:h-600 [&_.orbit-select-container]:bg-transparent [&_.orbit-select-container]:after:absolute [&_.orbit-select-container]:after:end-0 [&_.orbit-select-container]:after:top-1/2 [&_.orbit-select-container]:after:z-[2] [&_.orbit-select-container]:after:block [&_.orbit-select-container]:after:-translate-y-1/2 [&_.orbit-select-container]:after:border-r [&_.orbit-select-container]:after:transition-colors [&_.orbit-select-container]:after:ease-in-out [&_.orbit-select-container]:last-of-type:after:content-none",
                    Boolean(errorReal) && !active
                      ? "[&_.orbit-select-container]:after:border-form-element-error [&_.orbit-input-field-input-container]:after:border-form-element-error"
                      : "[&_.orbit-select-container]:after:border-form-element [&_.orbit-input-field-input-container]:after:border-form-element",
                    label != null && "[&_.orbit-form-label]:hidden",
                  )}
                  style={{ flex: childFlex }}
                >
                  {React.cloneElement(item, {
                    disabled: item.props.disabled || disabled,
                    label: undefined,
                    onChange: handleChange(item.props.onChange),
                    onBlur: handleBlur(item.props.onBlur),
                    onFocus: handleFocus(item.props.onFocus),
                    ariaLabel: item.props.label as string,
                    insideInputGroup: true,
                    ariaDescribedby:
                      (error || help || item.props.error || item.props.help) && shown
                        ? feedbackId
                        : undefined,
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </fieldset>
      <ErrorFormTooltip
        id={feedbackId}
        help={helpReal}
        error={errorReal}
        onShown={setTooltipShown}
        shown={shown}
        referenceElement={labelRef}
      />
    </div>
  );
};

export default InputGroup;

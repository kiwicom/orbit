"use client";

import * as React from "react";
import cx from "clsx";

import { TYPE_OPTIONS } from "./consts";
import InputTags from "./InputTags";
import getFieldDataState from "../common/getFieldDataState";
import useRandomId from "../hooks/useRandomId";
import ErrorFormTooltip from "../ErrorFormTooltip";
import AlertCircle from "../icons/AlertCircle";
import InformationCircle from "../icons/InformationCircle";
import FormLabel from "../FormLabel";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import type { Props } from "./types";
import { spaceAfterClasses } from "../common/tailwind";

const getDOMType = (type: Lowercase<keyof typeof TYPE_OPTIONS>) => {
  if (type === TYPE_OPTIONS.PASSPORTID) return TYPE_OPTIONS.TEXT;
  return type;
};

export const FakeInput = ({ error, disabled }: Pick<Props, "error" | "disabled">) => (
  <div
    className={cx(
      "orbit-input-field-fake-input",
      "h-form-box-normal text-form-element-large z-default",
      "absolute left-0 top-0",
      "duration-fast transition-all ease-in-out",
      "rounded-200 box-border w-full",
      "peer-focus:outline-blue-normal peer-focus:outline peer-focus:outline-2",
      error ? "shadow-form-element-error" : "shadow-form-element",
      disabled
        ? "bg-form-element-disabled-background"
        : [
            "bg-form-element-background",
            error
              ? "peer-hover:shadow-form-element-error-hover"
              : "peer-hover:shadow-form-element-hover",
          ],
    )}
  />
);

const Prefix = ({ children }: { children: React.ReactNode }) => (
  <span
    className={cx(
      "text-form-element-prefix-foreground",
      "ps-300 pointer-events-none z-[3] flex h-full items-center justify-center",
      "[&>svg]:text-icon-tertiary-foreground",
      "[&_svg]:size-icon-medium",
      "[&_.orbit-button-primitive-icon]:text-icon-secondary-foreground",
    )}
  >
    {children}
  </span>
);

const Suffix = ({
  disabled,
  children,
}: {
  disabled: Props["disabled"];
  children: React.ReactNode;
}) => (
  <div
    className={cx(
      "h-form-box-normal text-form-element-prefix-foreground",
      "z-[3] flex shrink-0 items-center justify-center",
      "[&_.orbit-button-primitive-icon]:text-icon-secondary-foreground",
      "[&_.orbit-service-logo]:pe-300 [&_.orbit-service-logo]:h-400",
      disabled && "pointer-events-none",
    )}
  >
    {children}
  </div>
);

/**
 * @orbit-doc-start
 * README
 * ----------
 * # InputField
 *
 * To implement the InputField component into your project you'll need to add the import:
 *
 * ```jsx
 * import InputField from "@kiwicom/orbit-components/lib/InputField";
 * ```
 *
 * After adding import to your project you can use it simply like:
 *
 * ```jsx
 * <InputField />
 * ```
 *
 * ## Props
 *
 * The table below contains all types of props available in the InputField component.
 *
 * | Name                 | Type                               | Default   | Description                                                                                                                                                                       |
 * | :------------------- | :--------------------------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | autoComplete         | `string`                           |           | The autocomplete attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).                                              |
 * | autoFocus            | `boolean`                          |           | The autofocus attribute of the input, see [this docs](https://www.w3schools.com/tags/att_autofocus.asp). Keep in mind that autofocus works only when Input is initially rendered. |
 * | defaultValue         | `string \| number`                 |           | Specifies the default value of the InputField. To be used with uncontrolled usage.                                                                                                |
 * | disabled             | `boolean`                          |           | If `true`, the InputField will be disabled.                                                                                                                                       |
 * | dataAttrs            | `Object`                           |           | Optional prop for passing `data-*` attributes to the `input` DOM element.                                                                                                         |
 * | dataTest             | `string`                           |           | Optional prop for testing purposes.                                                                                                                                               |
 * | error                | `React.Node`                       |           | The error to display beneath the InputField. [See Functional specs](#functional-specs)                                                                                            |
 * | tags                 | `React.Node`                       |           | Optional prop to display rendered Tag component. [See Functional specs](#functional-specs)                                                                                        |
 * | help                 | `React.Node`                       |           | The help to display beneath the InputField.                                                                                                                                       |
 * | label                | `Translation`                      |           | The label for the InputField. [See Functional specs](#functional-specs)                                                                                                           |
 * | id                   | `string`                           |           | Set `id` attribute for input.                                                                                                                                                     |
 * | inlineLabel          | `boolean`                          |           | If `true`, the label renders on the left side of input.                                                                                                                           |
 * | inputMode            | [`enum`](#enum)                    |           | The type of data that might be entered by the user. [See more here](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).                               |
 * | minValue             | `number`                           |           | Specifies the minimum value for the InputField.                                                                                                                                   |
 * | maxValue             | `number`                           |           | Specifies the maximum value for the InputField.                                                                                                                                   |
 * | maxLength            | `number`                           |           | Specifies the maximum number of characters allowed.                                                                                                                               |
 * | minLength            | `number`                           |           | Specifies the minimum number of characters allowed.                                                                                                                               |
 * | width                | `string`                           | `"100%"`  | Specifies the width of the InputField.                                                                                                                                            |
 * | required             | `boolean`                          |           | If `true`, the label is displayed as required.                                                                                                                                    |
 * | name                 | `string`                           |           | The name for the InputField.                                                                                                                                                      |
 * | onBlur               | `event => void \| Promise`         |           | Function for handling onBlur event.                                                                                                                                               |
 * | onChange             | `event => void \| Promise`         |           | Function for handling onChange event.                                                                                                                                             |
 * | onFocus              | `event => void \| Promise`         |           | Function for handling onFocus event.                                                                                                                                              |
 * | onKeyDown            | `event => void \| Promise`         |           | Function for handling onKeyDown event.                                                                                                                                            |
 * | onKeyUp              | `event => void \| Promise`         |           | Function for handling onKeyUp event.                                                                                                                                              |
 * | onMouseDown          | `event => void \| Promise`         |           | Function for handling onMouseDown event.                                                                                                                                          |
 * | onMouseUp            | `event => void \| Promise`         |           | Function for handling onMouseUp event.                                                                                                                                            |
 * | onSelect             | `event => void \| Promise`         |           | Function for handling onSelect event.                                                                                                                                             |
 * | placeholder          | `string \| (() => string))`        |           | The placeholder of the InputField.                                                                                                                                                |
 * | **prefix**           | `React.Node`                       |           | The prefix component for the InputField.                                                                                                                                          |
 * | readOnly             | `boolean`                          | `false`   | If `true`, the InputField is readOnly.                                                                                                                                            |
 * | ref                  | `func`                             |           | Prop for forwarded ref of the InputField. [See Functional specs](#functional-specs)                                                                                               |
 * | spaceAfter           | `enum`                             |           | Additional `margin-bottom` after component.                                                                                                                                       |
 * | suffix               | `React.Node`                       |           | The suffix component for the InputField.                                                                                                                                          |
 * | tabIndex             | `string \| number`                 |           | Specifies the tab order of an element.                                                                                                                                            |
 * | **type**             | [`enum`](#enum)                    | `"text"`  | The type of the InputField.                                                                                                                                                       |
 * | value                | `string \| number`                 |           | Specifies the value of the InputField. To be used with controlled usage.                                                                                                          |
 * | list                 | `string`                           |           | The id of the datalist element.                                                                                                                                                   |
 * | ariaAutocomplete     | `inline \| list \| both`           |           | The aria-autocomplete attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete).                      |
 * | role                 | `textbox \| combobox \| searchbox` | `textbox` | The role attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role).                                             |
 * | ariaActiveDescendant | `string`                           |           | The aria-activedescendant attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant).              |
 * | ariaHasPopup         | `boolean`                          |           | The aria-haspopup attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup).                              |
 * | ariaExpanded         | `boolean`                          |           | The aria-expanded attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded).                              |
 * | ariaControls         | `string`                           |           | The aria-controls attribute of the input, see [this docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls).                              |
 * | ariaLabel            | `string`                           |           | Optional prop for `aria-label` value. See `Accessibility` tab.                                                                                                                    |
 * | ariaLabelledby       | `string`                           |           | Optional prop for `aria-labelledby` value. See `Accessibility` tab.                                                                                                               |
 * | ariaDescribedby      | `string`                           |           | Optional prop for `aria-describedby` value. See `Accessibility` tab.                                                                                                              |
 *
 * ### enum
 *
 * | inputMode   | type           | spaceAfter   |
 * | :---------- | :------------- | :----------- |
 * | `"numeric"` | `"text"`       | `"none"`     |
 * | `"tel"`     | `"number"`     | `"smallest"` |
 * | `"decimal"` | `"email"`      | `"small"`    |
 * | `"email"`   | `"password"`   | `"normal"`   |
 * | `"url"`     | `"passportid"` | `"medium"`   |
 * | `"search"`  |                | `"large"`    |
 * | `"text"`    |                | `"largest"`  |
 * | `"none"`    |
 *
 * ## Functional specs
 *
 * - The `error` prop overwrites the `help` prop, due to higher priority.
 *
 * - The `help` and `error` icons overwrite the prefix when `inlineLabel` is `true`.
 *
 * ### Examples
 *
 * - Usage of `Tag` in `InputField`
 *
 * ```jsx
 * import Tag from "@kiwicom/orbit-components/lib/Tag";
 *
 * <InputField
 *   placeholder="My placeholder"
 *   tags={
 *     <div>
 *       <Tag>Brno</Tag>
 *       <Tag>Praha</Tag>
 *     </div>
 *   }
 * />;
 * ```
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The InputField component has been designed with accessibility in mind, providing features that enhance the experience for users of assistive technologies.
 *
 * ### Accessibility props
 *
 * The following props are available to improve the accessibility of your InputField component:
 *
 * | Name                 | Type                             | Description                                                                                                                 |
 * | :------------------- | :------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
 * | label                | `Translation`                    | Provides a visible label that is associated with the input field.                                                           |
 * | role                 | `string`                         | Defines the role of the input element, which helps screen readers understand its purpose and behavior.                      |
 * | ariaLabel            | `string`                         | Adds an `aria-label` to the input, providing a description for screen readers when no visible label is present.             |
 * | ariaLabelledby       | `string`                         | References the ID of an element that labels the input, establishing a relationship for screen readers.                      |
 * | ariaDescribedby      | `string`                         | References the ID of an element that describes the input, useful for associating additional information with the field.     |
 * | ariaAutocomplete     | `inline \| list \| both \| none` | Indicates to screen readers whether and how the input provides autocomplete suggestions.                                    |
 * | ariaActiveDescendant | `string`                         | Identifies the currently active descendant in a composite widget, such as when navigating through autocomplete suggestions. |
 * | ariaHasPopup         | `boolean`                        | Indicates to screen readers that the input can trigger a popup, like a dropdown menu or dialog.                             |
 * | ariaExpanded         | `boolean`                        | Indicates to screen readers whether the associated popup or dropdown is currently expanded.                                 |
 * | ariaControls         | `string`                         | Identifies the element controlled by the input, establishing a relationship for screen readers.                             |
 *
 * ### Automatic Accessibility Features
 *
 * The InputField component automatically handles several important ARIA attributes:
 *
 * - `aria-invalid`: When the `error` prop is provided, the input is automatically marked as invalid (`aria-invalid="true"`). This helps screen readers announce to users that the input contains an error.
 *
 * - `aria-describedby`: This attribute is automatically managed to associate `error` or `help` text with the input field:
 *   - When the component is not inside an InputGroup and has `error` or `help` text, a unique ID is generated (based on the input's ID) and is combined with the `ariaDescribedby` prop to ensure all descriptions are announced by screen readers.
 *   - When the component is inside an InputGroup, the InputGroup completely overrides any `ariaDescribedby` value that was set on the InputField. The InputGroup sets its own feedback ID as the `aria-describedby` value if there are any `error` or `help` values and the tooltip is shown.
 *
 * These automatic features ensure that the InputField remains accessible even without explicitly setting every ARIA attribute, while still allowing for customization when needed. See the [Examples section](#using-ariadescribedby-for-enhanced-accessibility) for detailed usage examples of `ariaDescribedby`.
 *
 * ### Best practices
 *
 * - When no visible `label` is provided, use `ariaLabel` to provide an accessible name for the input field to ensure the input's purpose is clear to screen reader users. Alternatively, you can use `ariaLabelledby` to reference the ID of an existing element that labels the input.
 *
 * - Always ensure that `ariaLabel` text and any text in elements referenced by `ariaLabelledby` are properly translated to match the user's language.
 *
 * - Don't rely solely on `placeholder` for providing instructions or label of the input.
 *
 * - For inputs that trigger autocomplete behavior or control other elements, use the appropriate ARIA attributes (`ariaAutocomplete`, `ariaActiveDescendant`, `ariaHasPopup`, `ariaExpanded`, `ariaControls`) to make the functionality accessible.
 *
 * - When using `prefix` or `suffix` elements, ensure they don't interfere with the accessibility of the input field and are properly labeled if they are interactive.
 *
 * ### Examples
 *
 * #### Basic InputField with label
 *
 * ```jsx
 * <InputField label="Email address" placeholder="your@email.com" type="email" name="email" required />
 * ```
 *
 * In this example, screen readers would announce "Email address, required, edit, email" when focusing on the input field.
 *
 * #### InputField with autocomplete
 *
 * ```jsx
 * <InputField
 *   label="City"
 *   placeholder="Start typing..."
 *   role="combobox"
 *   ariaHasPopup={true}
 *   ariaExpanded={suggestionsVisible}
 *   ariaControls="city-suggestions"
 *   ariaAutocomplete="list"
 *   ariaActiveDescendant={activeItemId}
 * />
 * ```
 *
 * In this example, the InputField is configured as a combobox with autocomplete features. Screen readers would announce information about the combobox state, including whether suggestions are available and which suggestion is currently active.
 *
 * #### Using ariaDescribedby for enhanced accessibility
 *
 * The `ariaDescribedby` prop allows you to specify an `aria-describedby` attribute for the InputField component. This attribute links the component to additional descriptive text, enhancing accessibility by providing supplementary information to screen readers.
 *
 * ```jsx
 * <InputField label="Password" type="password" ariaDescribedby="password-requirements" />
 * <p id="password-requirements" style={{ display: "none", visibility: "hidden" }}>
 *   Password must be at least 8 characters long and include at least one uppercase letter and one number.
 * </p>
 * ```
 *
 * When using the `error` or `help` props, the component automatically manages the `aria-describedby` attribute:
 *
 * ```jsx
 * <InputField label="Username" error="This username is already taken" />
 * ```
 *
 * In this example, the error message is automatically associated with the input field via `aria-describedby`.
 *
 * If you provide both an `ariaDescribedby` prop and use `error` or `help`, the component automatically combines them, ensuring that screen readers announce all descriptive content:
 *
 * ```jsx
 * <InputField label="Email" error="Invalid email format" ariaDescribedby="email-hint" />
 * <p id="email-hint" style={{ display: "none", visibility: "hidden" }}>
 *   We'll never share your email with anyone else.
 * </p>
 * ```
 *
 * In this example, both the "email-hint" text and the error message will be announced by screen readers. The text from `ariaDescribedby` will be announced first, followed by the text from `error`.
 *
 * ### InputGroup Integration
 *
 * When using InputField within an InputGroup, the `aria-describedby` association follows these rules:
 *
 * #### Group-level error/help messages
 *
 * If the InputGroup has `error`/`help` messages, all child components will have `aria-describedby` set to these values **by default:**
 *
 * ```jsx
 * <InputGroup label="Passenger details" error="Incomplete information">
 *   <InputField label="First name" />
 *   <InputField label="Last name" />
 * </InputGroup>
 * ```
 *
 * In this example, all InputField components will have the InputGroup's error message "Incomplete information" announced by screen readers.
 *
 * #### Component-level error/help messages
 *
 * If individual InputField components have their own `error`/`help` messages (and the InputGroup doesn't), only those specific components will have `aria-describedby` set:
 *
 * ```jsx
 * <InputGroup label="Passenger details">
 *   <InputField label="First name" />
 *   <InputField label="Last name" error="Last name is required" />
 * </InputGroup>
 * ```
 *
 * In this example, only the second InputField will have its error message "Last name is required" announced.
 *
 * #### Component-level ariaDescribedby value
 *
 * Avoid setting `ariaDescribedby` directly on InputField components when inside an InputGroup, as these values will be overwritten by the InputGroup's internal accessibility logic:
 *
 * ```jsx
 * <InputGroup label="Contact information">
 *   <Select options={countryOptions} label="Country" />
 *   <InputField
 *     label="Phone number"
 *     ariaDescribedby="phone-hint" // This will be overwritten
 *   />
 *   <p id="phone-hint" style={{ display: "none", visibility: "hidden" }}>
 *     Enter your phone number
 *   </p>
 * </InputGroup>
 * ```
 *
 * In this example, the `ariaDescribedby` value "phone-hint" will be ignored because the InputGroup manages the accessibility associations internally. Instead, rely on the InputGroup's `error`/`help` props or the component's own `error`/`help` props.
 *
 *
 * @orbit-doc-end
 */
const InputField = (props: Props) => {
  const {
    disabled,
    type = TYPE_OPTIONS.TEXT,
    label,
    inlineLabel,
    dataTest,
    required,
    error,
    name,
    prefix,
    onChange,
    onFocus,
    onBlur,
    onSelect,
    onMouseUp,
    onMouseDown,
    onKeyUp,
    onKeyDown,
    placeholder,
    minValue = -Infinity,
    maxValue = Infinity,
    minLength,
    maxLength,
    suffix,
    help,
    value,
    defaultValue,
    tags,
    tabIndex = 0,
    readOnly,
    list,
    autoComplete,
    ariaLabel,
    ariaLabelledby,
    ariaAutocomplete,
    ariaActiveDescendant,
    ariaHasPopup,
    ariaExpanded,
    ariaControls,
    ariaDescribedby,
    autoFocus,
    spaceAfter,
    id,
    width = "100%",
    inputMode,
    insideInputGroup,
    dataAttrs,
    role,
    ref,
  }: Props = props;

  const forID = useRandomId();
  const inputId = id || forID;

  const hasTooltip = Boolean(error || help);

  const {
    tooltipShown,
    tooltipShownHover,
    setTooltipShown,
    setTooltipShownHover,
    labelRef,
    iconRef,
    handleFocus,
  } = useErrorTooltip<HTMLInputElement, HTMLDivElement>({ onFocus, hasTooltip });

  const shown = tooltipShown || tooltipShownHover;
  const fieldRef = React.useRef(null);

  const InlineLabelElement = inlineLabel && (error || help || label) ? "label" : "div";

  const tooltipId = shown ? `${inputId}-feedback` : undefined;

  const ariaDescribedbyValue = insideInputGroup
    ? ariaDescribedby
    : [ariaDescribedby, tooltipId].filter(Boolean).join(" ") || undefined;

  return (
    <div
      className={cx(
        "orbit-input-field-field font-base relative block flex-1 basis-full",
        spaceAfter && spaceAfterClasses[spaceAfter],
      )}
      ref={fieldRef}
      style={{ width }}
      onMouseEnter={() => (disabled && inlineLabel ? setTooltipShownHover(true) : undefined)}
      onMouseLeave={() => (disabled && inlineLabel ? setTooltipShownHover(false) : undefined)}
    >
      {!inlineLabel && label && (
        <label className="block" ref={fieldRef} htmlFor={inputId}>
          <FormLabel
            required={required}
            error={!!error}
            help={!!help}
            labelRef={labelRef}
            iconRef={iconRef}
            onMouseEnter={() => (hasTooltip ? setTooltipShownHover(true) : undefined)}
            onMouseLeave={() => (hasTooltip ? setTooltipShownHover(false) : undefined)}
          >
            {label}
          </FormLabel>
        </label>
      )}
      <div
        className={cx(
          "orbit-input-field-input-container",
          "flex flex-row items-center justify-between",
          "relative box-border",
          "h-form-box-normal text-form-element-large",
          disabled ? "cursor-not-allowed" : "cursor-text",
          disabled || readOnly
            ? "text-form-element-disabled-foreground"
            : "text-form-element-filled-foreground",
        )}
      >
        <InlineLabelElement
          className="relative z-[2] flex items-center"
          ref={fieldRef}
          htmlFor={InlineLabelElement === "label" ? inputId : undefined}
        >
          {inlineLabel && !tags && (error || help) ? (
            <Prefix>
              {help && !error && (
                <span className="flex" ref={iconRef}>
                  <InformationCircle color="info" size="small" ariaHidden />
                </span>
              )}
              {error && (
                <span className="flex" ref={iconRef}>
                  <AlertCircle color="critical" size="small" ariaHidden />
                </span>
              )}
            </Prefix>
          ) : (
            prefix && <Prefix>{prefix}</Prefix>
          )}
          {label && inlineLabel && (
            <span
              className={cx(
                "flex items-center justify-center",
                "pointer-events-none h-full",
                "[&>.orbit-form-label]:mb-0",
                "[&>.orbit-form-label]:text-form-element-large [&>.orbit-form-label]:whitespace-nowrap [&>.orbit-form-label]:leading-normal",
                "[&>.orbit-form-label]:z-[3]",
                !tags && (error || help) ? "ps-100" : "ps-300",
              )}
            >
              <FormLabel
                required={required}
                error={!!error}
                help={!!help}
                labelRef={labelRef}
                inlineLabel
              >
                {label}
              </FormLabel>
            </span>
          )}
        </InlineLabelElement>
        {tags && <InputTags>{tags}</InputTags>}
        {/* the rule is working weird, it passes only if the value is number, eg not even prop including number } */}
        {/* eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex */}
        <input
          className={cx(
            "orbit-input-field-input",
            "font-base p-form-element-normal-padding",
            "z-[2] appearance-none border-none shadow-none",
            "box-border size-full min-w-0",
            "bg-transparent",
            "flex-1 basis-1/5",
            "[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
            "[&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0",
            "[&[data-com-onepassword-filled]]:!bg-inherit",
            "[&:-webkit-autofill]:rounded-200",
            "[&:autofill]:rounded-200",
            "peer",
            insideInputGroup
              ? "focus:outline-blue-normal focus:rounded-200 duration-fast transition-all ease-in-out focus:outline-2 focus:-outline-offset-1"
              : "focus:outline-none",
            "[&::placeholder]:opacity-100",
            "[&::placeholder]:text-form-element-foreground",
            "[&::-ms-input-placeholder]:text-form-element-foreground",
            "[&::-ms-clear]:hidden [&::-ms-reveal]:hidden",
            disabled && "cursor-not-allowed",
            (disabled || readOnly) &&
              "[-webkit-text-fill-color:theme(textColor.form-element-disabled-foreground)]",
            inlineLabel ? "font-medium" : "font-normal",
            type === TYPE_OPTIONS.PASSPORTID && "tabular-nums tracking-[2px]",
          )}
          data-test={dataTest}
          required={required}
          data-state={
            insideInputGroup && typeof error === "undefined"
              ? undefined
              : getFieldDataState(!!error)
          }
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          onSelect={onSelect}
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
          name={name}
          type={getDOMType(type)}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          min={type === TYPE_OPTIONS.NUMBER ? minValue : undefined}
          max={type === TYPE_OPTIONS.NUMBER ? maxValue : undefined}
          minLength={minLength}
          maxLength={maxLength}
          ref={ref}
          tabIndex={tabIndex !== undefined ? Number(tabIndex) : undefined}
          list={list}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          aria-describedby={ariaDescribedbyValue}
          aria-invalid={error ? true : undefined}
          aria-autocomplete={ariaAutocomplete}
          aria-haspopup={ariaHasPopup}
          aria-expanded={ariaExpanded}
          aria-controls={ariaControls}
          aria-activedescendant={ariaActiveDescendant}
          readOnly={readOnly}
          autoCapitalize="off"
          autoCorrect="off"
          role={role}
          autoComplete={autoComplete}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          id={inputId}
          inputMode={inputMode}
          {...dataAttrs}
        />
        {suffix && <Suffix disabled={disabled}>{suffix}</Suffix>}
        <FakeInput error={error} disabled={disabled} />
      </div>
      {!insideInputGroup && hasTooltip && (
        <ErrorFormTooltip
          help={help}
          id={tooltipId}
          shown={shown}
          onShown={setTooltipShown}
          error={error}
          inlineLabel={inlineLabel}
          referenceElement={inlineLabel && !tags ? iconRef : fieldRef}
        />
      )}
    </div>
  );
};

export default InputField;

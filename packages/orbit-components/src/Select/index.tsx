"use client";

import * as React from "react";
import cx from "clsx";

import FormLabel from "../FormLabel";
import { FakeInput } from "../InputField";
import ChevronDown from "../icons/ChevronDown";
import AlertCircle from "../icons/AlertCircle";
import InformationCircle from "../icons/InformationCircle";
import getFieldDataState from "../common/getFieldDataState";
import ErrorFormTooltip from "../ErrorFormTooltip";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import useRandomId from "../hooks/useRandomId";
import type { Props } from "./types";
import { spaceAfterClasses } from "../common/tailwind";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Select
 *
 * To implement Select component into your project you'll need to add the import:
 *
 * ```jsx
 * import Select from "@kiwicom/orbit-components/lib/Select";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Select options={Option} />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the Select component.
 *
 * | Name            | Type                       | Default | Description                                                                              |
 * | :-------------- | :------------------------- | :------ | :--------------------------------------------------------------------------------------- |
 * | dataAttrs       | `Object`                   |         | Optional prop for passing `data-*` attributes to the `input` DOM element.                |
 * | dataTest        | `string`                   |         | Optional prop for testing purposes.                                                      |
 * | disabled        | `boolean`                  | `false` | If `true`, the Select will be disabled.                                                  |
 * | error           | `React.Node`               |         | The error message for the Select. [See Functional specs](#functional-specs)              |
 * | help            | `React.Node`               |         | The help message for the Select.                                                         |
 * | id              | `string`                   |         | Adds `id` HTML attribute to an element.                                                  |
 * | label           | `Translation`              |         | The label for the Select.                                                                |
 * | inlineLabel     | `boolean`                  |         | If true the label renders on the left side of the Select.                                |
 * | name            | `string`                   |         | The name for the Select.                                                                 |
 * | onBlur          | `event => void \| Promise` |         | Function for handling onBlur event.                                                      |
 * | onChange        | `event => void \| Promise` |         | Function for handling onChange event.                                                    |
 * | onFocus         | `event => void \| Promise` |         | Function for handling onFocus event.                                                     |
 * | **options**     | [`Option[]`](#option)      |         | The content of the Select, passed as array of objects.                                   |
 * | placeholder     | `TranslationString`        |         | The placeholder for the Select.                                                          |
 * | prefix          | `React.Node`               |         | The prefix component for the Select. [See Functional specs](#functional-specs)           |
 * | ref             | `func`                     |         | Prop for forwarded ref of the Select. [See Functional specs](#functional-specs)          |
 * | required        | `boolean`                  | `false` | If true, the label is displayed as required.                                             |
 * | spaceAfter      | `enum`                     |         | Additional `margin-bottom` after component.                                              |
 * | tabIndex        | `string \| number`         |         | Specifies the tab order of an element                                                    |
 * | value           | `string`                   | `""`    | The value of the Select.                                                                 |
 * | width           | `string`                   | `100%`  | Specifies width of the Select                                                            |
 * | customValueText | `string`                   |         | The custom text alternative of current value. [See Functional specs](#functional-specs). |
 * | ariaLabel       | `string`                   |         | Optional prop for `aria-label` value. See Accessibility tab.                             |
 * | ariaLabelledby  | `string`                   |         | Optional prop for `aria-labelledby` value. See Accessibility tab.                        |
 * | ariaDescribedby | `string`                   |         | Optional prop for `aria-describedby` value. See Accessibility tab.                       |
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
 * ## Option
 *
 * Table below contains all types of the props available for object in Option array.
 *
 * | Name      | Type               | Description                             |
 * | :-------- | :----------------- | :-------------------------------------- |
 * | **value** | `string \| number` | The value of the Option.                |
 * | label     | `string`           | The label for the Option.               |
 * | key       | `string`           | The key of the Option.                  |
 * | disabled  | `boolean`          | If `true`, the Option will be disabled. |
 *
 * ## Functional specs
 *
 * - The `error` prop overwrites the `help` prop, due to higher priority.
 *
 * - When you have limited space for the `Select`, you can use `customValueText` property to pass an alternative text for the current value. For instance, when the label of the selected option is `Czech Republic (+420)`, you can pass only `+420` to this property and the original label will be visually hidden.
 *
 * - The `prefix` prop can accept any element. However, it is not recommended to pass it more than an icon (or flag).
 *
 * - `ref` can be used for example auto-focus the elements immediately after render.
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Select component has been designed with accessibility in mind.
 *
 * It supports keyboard navigation and includes the following properties that provide additional information to screen readers:
 *
 * | Name            | Type     | Description                                                             |
 * | :-------------- | :------- | :---------------------------------------------------------------------- |
 * | ariaLabel       | `string` | Allows you to specify an `aria-label` attribute of the component.       |
 * | ariaLabelledby  | `string` | Allows you to specify an `aria-labelledby` attribute of the component.  |
 * | ariaDescribedby | `string` | Allows you to specify an `aria-describedby` attribute of the component. |
 *
 * While these props are optional, we recommend including them to ensure proper accessibility of the component, especially if the `label` prop is not provided.
 *
 * These attributes help users better understand the component's purpose and context, improving the overall experience with assistive technologies.
 *
 * ### Examples
 *
 * The following code snippets show different ways to use these properties:
 *
 * ```jsx
 * <Select options={options} value={categoryValue} onChange={onChange} label="Category" />
 * ```
 *
 * ```jsx
 * <Select
 *   options={options}
 *   value={categoryValue}
 *   onChange={onChange}
 *   ariaLabel="Select passenger category"
 * />
 * ```
 *
 * ```jsx
 * <Stack>
 *   <p id="passengers-category-label" style={{ display: "none", visibility: "hidden" }}>
 *     Select passenger category
 *   </p>
 *
 *   <Select
 *     options={options}
 *     value={categoryValue}
 *     onChange={onChange}
 *     ariaLabelledby="passengers-category-label"
 *   />
 * </Stack>
 * ```
 *
 * Using the `ariaLabel` prop enables screen readers to properly announce the Select component if the `label` prop is not provided.
 *
 * Alternatively, you can use the `ariaLabelledby` prop to reference another element that serves as a label for the Select component. The `ariaLabelledby` prop can reference multiple ids, separated by a space. The elements with those ids can be hidden, so that their text is only announced by screen readers.
 *
 * Note that if both `ariaLabel` and `ariaLabelledby` props are provided, `ariaLabelledby` takes precedence.
 *
 * For better screen reader experience, you can always complement the `label` prop with `ariaLabel` or `ariaLabelledby`:
 *
 * ```jsx
 * <Select
 *   options={options}
 *   value={languageValue}
 *   onChange={onChange}
 *   label="Language"
 *   ariaLabel="Select your language"
 * />
 * ```
 *
 * For enhanced accessibility, it is recommended to have these label strings translated.
 *
 * The `ariaDescribedby` prop allows you to associate additional descriptive text with the Select component. This is useful for providing supplementary information that screen readers will announce after reading the component's label.
 *
 * ```jsx
 *   <Select
 *     options={countryOptions}
 *     value={countryValue}
 *     onChange={onChange}
 *     label="Country"
 *     ariaDescribedby="country-info"
 *   />
 *   <p id="country-info" style={{ display: "none", visibility: "hidden" }}>
 *     Select the country where you currently reside.
 *   </p>
 * ```
 *
 * When using the `help` or `error` props, their content is set as `aria-describedby` on the element. Screen readers will announce this additional information after reading the component's label (whether provided via `label`, `ariaLabel`, or `ariaLabelledby` props).
 *
 * ```jsx
 * <Select
 *   options={options}
 *   value={nationalityValue}
 *   onChange={onChange}
 *   label="Nationality"
 *   error="Required field"
 * />
 * ```
 *
 * It would have the screen reader announce: "Nationality. Required field."
 *
 * If you provide both an `ariaDescribedby` prop and use `error` or `help`, the component automatically combines them, ensuring all descriptive content is properly announced:
 *
 * ```jsx
 *   <p id="terms-info" style={{ display: "none", visibility: "hidden" }}>
 *     Please review our terms and conditions.
 *   </p>
 *   <Select
 *     options={termsOptions}
 *     value={termsValue}
 *     onChange={onChange}
 *     label="Accept Terms"
 *     error="This field is required"
 *     ariaDescribedby="terms-info"
 *   />
 * ```
 *
 * In this example, both the "terms-info" text and the error message will be announced by screen readers. The text from `ariaDescribedby` will be announced first, followed by the text from `error`.
 *
 * ### InputGroup Integration
 *
 * When using Select within an InputGroup, the `aria-describedby` association follows these rules:
 *
 * #### Example 1
 *
 * If the InputGroup has `error`/`help` messages, these will be properly associated with all child components:
 *
 * ```jsx
 * <InputGroup label="Travel preferences" error="Please complete all fields">
 *   <Select options={countryOptions} label="Departure country" />
 *   <Select options={countryOptions} label="Destination country" />
 * </InputGroup>
 * ```
 *
 * In this example, all Select components will have the InputGroup's error message "Please complete all fields" announced by screen readers.
 *
 * #### Example 2
 *
 * If individual Select components have their own `error`/`help` messages (and the InputGroup doesn't), only those specific components will have `aria-describedby` set:
 *
 * ```jsx
 * <InputGroup label="Travel preferences">
 *   <Select options={countryOptions} label="Departure country" />
 *   <Select options={countryOptions} label="Destination country" error="This field is required" />
 * </InputGroup>
 * ```
 *
 * In this example, only the second Select will have its error message "This field is required" announced.
 *
 * #### Example 3
 *
 * Avoid setting `ariaDescribedby` directly on Select components when inside an InputGroup, as these values will be overwritten by the InputGroup's internal accessibility logic:
 *
 * ```jsx
 * <InputGroup label="Contact information">
 *   <Select
 *     options={countryOptions}
 *     label="Country"
 *     ariaDescribedby="country-hint" // This will be overwritten
 *   />
 *   <InputField label="Phone number" />
 *   <p id="country-hint" style={{ display: "none", visibility: "hidden" }}>
 *     Select the country prefix of your phone number
 *   </p>
 * </InputGroup>
 * ```
 *
 * In this example, the `ariaDescribedby` value "country-hint" will be ignored because the InputGroup manages the accessibility associations internally. Instead, rely on the InputGroup's `error`/`help` props or the component's own `error`/`help` props.
 *
 *
 * @orbit-doc-end
 */
const Select = (props: Props) => {
  const {
    label,
    inlineLabel,
    placeholder,
    value,
    disabled = false,
    error,
    help,
    name,
    onChange,
    onBlur,
    onFocus,
    width = "100%",
    options,
    tabIndex,
    id,
    required,
    dataTest,
    prefix,
    spaceAfter,
    customValueText,
    insideInputGroup,
    dataAttrs,
    ariaLabel,
    ariaLabelledby,
    ariaDescribedby,
    ref,
  } = props;
  const filled = !(value == null || value === "");

  const forID = useRandomId();
  const selectId = id || forID;

  const hasTooltip = Boolean(error || help);

  const {
    tooltipShown,
    tooltipShownHover,
    setTooltipShownHover,
    labelRef,
    iconRef,
    setTooltipShown,
    handleFocus,
  } = useErrorTooltip<HTMLSelectElement, HTMLDivElement>({ onFocus, hasTooltip });

  const inputRef = React.useRef<HTMLLabelElement | null>(null);

  const shown = tooltipShown || tooltipShownHover;
  const tooltipId = shown ? `${selectId}-feedback` : undefined;

  const ariaDescribedbyValue = insideInputGroup
    ? ariaDescribedby
    : [ariaDescribedby, tooltipId].filter(Boolean).join(" ") || undefined;

  return (
    <div
      className={cx(
        "orbit-select-label-container relative block",
        spaceAfter && spaceAfterClasses[spaceAfter],
      )}
      style={{ width }}
    >
      <label ref={inputRef}>
        {label && !inlineLabel && (
          <FormLabel
            error={!!error}
            help={!!help}
            labelRef={labelRef}
            iconRef={iconRef}
            onMouseEnter={() => (hasTooltip ? setTooltipShownHover(true) : undefined)}
            onMouseLeave={() => (hasTooltip ? setTooltipShownHover(false) : undefined)}
            required={required}
          >
            {label}
          </FormLabel>
        )}
        <div
          ref={label ? null : labelRef}
          className={cx(
            "orbit-select-container",
            "relative flex flex-row items-center justify-between",
            "h-form-box-normal box-border w-full",
            disabled
              ? "text-form-element-disabled-foreground cursor-not-allowed"
              : "text-form-element-filled-foreground cursor-pointer",
            !disabled &&
              (error
                ? "[&_.orbit-input-field-fake-input]:hover:shadow-form-element-error-hover"
                : "[&_.orbit-input-field-fake-input]:hover:shadow-form-element-hover"),
            "focus-within:outline-none",
            "[&_.orbit-input-field-fake-input]:focus-within:outline-blue-normal [&_.orbit-input-field-fake-input]:focus-within:outline [&_.orbit-input-field-fake-input]:focus-within:outline-2",
          )}
        >
          {label && inlineLabel && (
            <div
              className={cx(
                "pointer-events-none z-[3] flex h-full items-center justify-center",
                error || help ? "ps-100" : "ps-300",
                "[&_.orbit-form-label]:text-normal [&_.orbit-form-label]:mb-0 [&_.orbit-form-label]:inline-block [&_.orbit-form-label]:max-w-[20ch] [&_.orbit-form-label]:truncate [&_.orbit-form-label]:leading-normal",
              )}
              ref={labelRef}
            >
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
              <FormLabel
                required={required}
                error={!!error}
                help={!!help}
                inlineLabel={inlineLabel}
              >
                {label}
              </FormLabel>
            </div>
          )}

          <div className="relative z-[3] size-full">
            {prefix && (
              <div className="px-300 pointer-events-none absolute top-0 z-[3] flex h-full items-center">
                {prefix}
              </div>
            )}
            {customValueText && (
              <div
                className={cx(
                  (disabled && "text-form-element-disabled-foreground") || filled
                    ? "text-form-element-filled-foreground"
                    : "text-form-element-foreground",
                  "text-form-element-large font-base pointer-events-none absolute inset-y-0 z-[3] flex items-center",
                  prefix ? "ps-1200" : "ps-300",
                )}
              >
                {customValueText}
              </div>
            )}
            <select
              className={cx(
                "cursor-pointer appearance-none bg-transparent",
                insideInputGroup
                  ? "focus:outline-blue-normal focus:rounded-200 focus:outline-2 focus:outline-offset-0"
                  : "outline-none",
                filled ? "text-form-element-filled-foreground" : "text-form-element-foreground",
                "font-base text-form-element-large",
                "pe-1000",
                prefix ? "ps-1200" : "ps-300",
                "shrink grow basis-1/5",
                "size-full",
                "border-0",
                Boolean(customValueText) && "!text-transparent",
                "duration-fast transition-shadow ease-in-out",
                "rounded-200",
                "[&>option]:text-form-element-filled-foreground",
                "disabled:text-form-element-disabled-foreground disabled:cursor-not-allowed",
              )}
              id={selectId}
              data-test={dataTest}
              data-state={getFieldDataState(!!error)}
              disabled={disabled}
              value={value == null ? "" : value}
              name={name}
              onFocus={handleFocus}
              onBlur={onBlur}
              onChange={onChange}
              tabIndex={tabIndex ? Number(tabIndex) : undefined}
              required={required}
              ref={ref}
              aria-describedby={ariaDescribedbyValue}
              aria-invalid={error ? true : undefined}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledby}
              {...dataAttrs}
            >
              {placeholder && (
                <option label={placeholder.toString()} value="">
                  {placeholder}
                </option>
              )}
              {options.map(option => (
                <option
                  key={`option-${option.key || option.value}`}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div
            className={cx(
              "end-200 pointer-events-none absolute top-0 z-[3] flex h-full items-center justify-center",
              disabled
                ? "text-form-element-disabled-foreground"
                : "text-form-element-filled-foreground",
            )}
          >
            <ChevronDown color="secondary" ariaHidden />
          </div>
          <FakeInput disabled={disabled} error={error} />
        </div>
      </label>
      {!insideInputGroup && hasTooltip && (
        <ErrorFormTooltip
          id={tooltipId}
          help={help}
          error={error}
          shown={shown}
          onShown={setTooltipShown}
          inlineLabel={inlineLabel}
          referenceElement={inlineLabel ? iconRef : inputRef}
        />
      )}
    </div>
  );
};

export default Select;

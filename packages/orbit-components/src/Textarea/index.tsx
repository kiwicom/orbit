"use client";

import * as React from "react";
import cx from "clsx";

import ErrorFormTooltip from "../ErrorFormTooltip";
import FormLabel from "../FormLabel";
import { RESIZE_OPTIONS } from "./consts";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import getFieldDataState from "../common/getFieldDataState";
import useRandomId from "../hooks/useRandomId";
import { getSpaceAfterClasses } from "../common/tailwind";
import type { Props } from "./types";

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Textarea
 *
 * To implement Textarea component into your project you'll need to add the import:
 *
 * ```jsx
 * import Textarea from "@kiwicom/orbit-components/lib/Textarea";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Textarea />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in Textarea component.
 *
 * | Name           | Type                       | Default      | Description                                                                          |
 * | :------------- | :------------------------- | :----------- | :----------------------------------------------------------------------------------- |
 * | dataAttrs      | `Object`                   |              | Optional prop for passing `data-*` attributes to the `textarea` DOM element.         |
 * | dataTest       | `string`                   |              | Optional prop for testing purposes.                                                  |
 * | id             | `string`                   |              | Sets the `id` for the `Textarea`.                                                    |
 * | defaultValue   | `string`                   |              | Specifies the default value of the Textarea. To be used with uncontrolled usage.     |
 * | disabled       | `boolean`                  |              | If `true`, the Textarea will be disabled.                                            |
 * | error          | `React.Node`               |              | The error to display beneath the Textarea. [See Functional specs](#functional-specs) |
 * | fullHeight     | `boolean`                  | `false`      | If `true`, the Textarea will take 100% of parent's height.                           |
 * | help           | `React.Node`               |              | The help to display beneath the Textarea.                                            |
 * | label          | `Translation`              |              | The label for the Textarea.                                                          |
 * | maxLength      | `number`                   |              | Specifies the maximum number of characters allowed.                                  |
 * | name           | `string`                   |              | The name for the Textarea.                                                           |
 * | onChange       | `event => void \| Promise` |              | Function for handling onChange event.                                                |
 * | onFocus        | `event => void \| Promise` |              | Function for handling onFocus event.                                                 |
 * | onBlur         | `event => void \| Promise` |              | Function for handling onBlur event.                                                  |
 * | placeholder    | `TranslationString`        |              | The placeholder text for the Textarea.                                               |
 * | ref            | `func`                     |              | Prop for forwarded ref of the Textarea. [See Functional specs](#functional-specs)    |
 * | resize         | [`enum`](#enum)            | `"vertical"` | The resize option for Textarea.                                                      |
 * | rows           | `number`                   |              | Specifies the height of the text area (in lines).                                    |
 * | readOnly       | `boolean`                  |              | Adds the readOnly attribute to the HTML textarea element.                            |
 * | required       | `boolean`                  |              | If `true`, the label is displayed as required.                                       |
 * | spaceAfter     | [`enum`](#enum)            |              | Additional `margin-bottom` after component.                                          |
 * | tabIndex       | `string \| number`         |              | Specifies the tab order of an element.                                               |
 * | value          | `string`                   |              | Specifies the value of the Textarea. To be used with controlled usage.               |
 * | ariaLabel      | `string`                   |              | Optional prop to set the `aria-label` attribute value.                               |
 * | ariaLabelledby | `string`                   |              | Optional prop to set the `aria-labelledby` attribute value.                          |
 *
 * ### enum
 *
 * | resize       | spaceAfter   |
 * | :----------- | :----------- |
 * | `"vertical"` | `"none"`     |
 * | `"none"`     | `"smallest"` |
 * |              | `"small"`    |
 * |              | `"normal"`   |
 * |              | `"medium"`   |
 * |              | `"large"`    |
 * |              | `"largest"`  |
 *
 * ## Functional specs
 *
 * - The `error` prop overwrites the `help` prop, due to higher priority.
 *
 * - `ref` can be used for example auto-focus the elements immediately after render.
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Textarea component has been designed with accessibility in mind.
 *
 * It includes the following properties that provide additional information to screen readers:
 *
 * | Name           | Type     | Description                                                            |
 * | :------------- | :------- | :--------------------------------------------------------------------- |
 * | ariaLabel      | `string` | Allows you to specify an `aria-label` attribute of the component.      |
 * | ariaLabelledby | `string` | Allows you to specify an `aria-labelledby` attribute of the component. |
 *
 * These attributes help users better understand the component's purpose and context when using assistive technologies. However, it's important to follow best practices when using them:
 *
 * 1. **Always prefer visible labels** - Use the `label` prop whenever possible as visible labels benefit all users.
 * 2. Use `ariaLabel` **only** when a visible label cannot be provided.
 * 3. Use `ariaLabelledby` to associate the textarea with an existing visible label elsewhere in the DOM.
 *
 * The `ariaLabelledby` prop works by referencing the `id` attribute of one or more other elements:
 *
 * 1. Assign a unique `id` to the element that serves as the label
 * 2. Pass that `id` value to the `ariaLabelledby` prop of the Textarea component
 * 3. For multiple labels, provide space-separated ids (e.g., `"id1 id2 id3"`)
 *
 * When a screen reader encounters the Textarea, it will use the content of the referenced element(s) as the label, reading them in the order specified.
 *
 * Note that if both `ariaLabel` and `ariaLabelledby` props are provided, `ariaLabelledby` takes precedence.
 *
 * ### Examples
 *
 * The following code snippets show different ways to provide accessible labels:
 *
 * ```jsx
 * // PREFERRED: Using the built-in label prop
 * <Textarea label="Feedback" placeholder="Please share your thoughts with us" />
 * ```
 *
 * Screen reader would announce: "Feedback"
 *
 * ```jsx
 * // Use ariaLabel ONLY when a visible label cannot be provided
 * <Textarea
 *   placeholder="Please share your thoughts with us"
 *   ariaLabel="Feedback form for customer comments"
 * />
 * ```
 *
 * Screen reader would announce: "Feedback form for customer comments"
 *
 * ```jsx
 * // Use ariaLabelledby to reference an existing visible label elsewhere in the DOM
 * <div>
 *   <h3 id="feedback-heading">Share Your Feedback</h3>
 *   <p>We value your opinion about our services.</p>
 *
 *   <Textarea placeholder="Please share your thoughts with us" ariaLabelledby="feedback-heading" />
 * </div>
 * ```
 *
 * Screen reader would announce: "Share Your Feedback"
 *
 * ```jsx
 * // Multiple label references
 * <span id="form-context">Flight #KI2807</span>
 * <h3 id="feedback-section">Passenger Feedback</h3>
 * <Textarea ariaLabelledby="form-context feedback-section" placeholder="Tell us about your experience" />
 * ```
 *
 * Screen reader would announce: "Flight #KI2807 Passenger Feedback"
 *
 * ```jsx
 * // Using both ariaLabelledby and ariaLabel (ariaLabelledby takes precedence)
 * <div>
 *   <h3 id="feedback-title">Customer Feedback</h3>
 *   <Textarea
 *     ariaLabelledby="feedback-title"
 *     ariaLabel="Share your thoughts about our service"
 *     placeholder="Tell us what you think"
 *   />
 * </div>
 * ```
 *
 * Screen reader would announce: "Customer Feedback" (ignoring the ariaLabel)
 *
 * ### Help and Error Messages
 *
 * When using the `help` or `error` props, their content is automatically set as `aria-describedby` on the element.
 *
 * Screen readers will announce this additional information after reading the component's label.
 *
 * ```jsx
 * <Textarea
 *   label="Feedback"
 *   placeholder="Please share your thoughts with us"
 *   error="This field is required"
 * />
 * ```
 *
 * Screen reader would announce: "Feedback. This field is required."
 *
 * ### Detached Label
 *
 * For special cases you can use your own, detached `label`. This approach can be useful when you need more control over the label's styling or position:
 *
 * ```jsx
 * <label htmlFor="feedback-textarea">Your feedback</label>
 * <Textarea
 *   id="feedback-textarea"
 *   placeholder="Please share your thoughts with us"
 * />
 * ```
 *
 * Screen reader would announce: "Your feedback"
 *
 * This method maintains the necessary association between the label and the textarea element for screen readers.
 *
 * ### Best Practices
 *
 * 1. Always use a visible label when possible. The `label` prop is preferred over `ariaLabel`.
 *
 * 2. Only use `ariaLabel` when a visible label is absolutely not possible in your user interface.
 *
 * 3. Use `ariaLabelledby` to associate the textarea with existing visible labels that appear elsewhere in the interface.
 *
 * 4. Use clear, descriptive labels that explain what information is expected in the textarea.
 *
 * 5. Ensure that error messages are specific and helpful, guiding users on how to correct their input.
 *
 * 6. Consider that users with screen readers will interact with your textareas differently than sighted users. Test your forms with assistive technologies to ensure a smooth experience.
 *
 *
 * @orbit-doc-end
 */
const Textarea = (props: Props) => {
  const {
    disabled,
    resize = RESIZE_OPTIONS.VERTICAL,
    dataTest,
    id,
    spaceAfter,
    fullHeight,
    defaultValue,
    value,
    label,
    name,
    error,
    placeholder,
    maxLength,
    onChange,
    onFocus,
    onBlur,
    tabIndex,
    help,
    rows,
    readOnly,
    required,
    dataAttrs,
    ariaLabel,
    ariaLabelledby,
    ref,
  } = props;

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
  } = useErrorTooltip({ onFocus, hasTooltip });

  const shown = tooltipShown || tooltipShownHover;

  return (
    <div
      className={cx(
        "orbit-textarea",
        "font-base relative flex w-full flex-col",
        fullHeight && "h-full flex-1",
        spaceAfter && getSpaceAfterClasses(spaceAfter),
      )}
    >
      <label ref={labelRef}>
        {label && (
          <FormLabel
            error={!!error}
            help={!!help}
            required={required}
            iconRef={iconRef}
            onMouseEnter={() => (hasTooltip ? setTooltipShownHover(true) : undefined)}
            onMouseLeave={() => (hasTooltip ? setTooltipShownHover(false) : undefined)}
          >
            {label}
          </FormLabel>
        )}

        <textarea
          className={cx(
            "w-full appearance-none",
            "font-base text-large p-300 leading-normal",
            "rounded-200 relative box-border block overflow-auto",
            "min-h-form-box-normal",
            "duration-fast transition-shadow ease-in-out",
            "border border-transparent",
            // TODO: remove when will be migrated from tmp-folder
            resize === RESIZE_OPTIONS.VERTICAL ? "resize-y" : "resize-none",
            error ? "shadow-form-element-error" : "shadow-form-element",
            disabled ? "cursor-not-allowed" : "cursor-text",
            fullHeight && "h-full flex-1",
            disabled || readOnly
              ? "bg-form-element-disabled-background"
              : [
                  "bg-form-element-background",
                  error
                    ? "hover:shadow-form-element-error-hover"
                    : "hover:shadow-form-element-hover",
                ],
            "[&::placeholder]:text-form-element-foreground",
          )}
          data-state={getFieldDataState(!!error)}
          data-test={dataTest}
          aria-required={!!required}
          id={inputId}
          name={name}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          placeholder={String(placeholder)}
          maxLength={maxLength}
          onChange={onChange}
          rows={rows}
          onFocus={handleFocus}
          onBlur={onBlur}
          tabIndex={tabIndex ? Number(tabIndex) : undefined}
          readOnly={readOnly}
          ref={ref}
          aria-describedby={shown ? `${inputId}-feedback` : undefined}
          aria-invalid={error ? true : undefined}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          {...dataAttrs}
        />
      </label>
      {hasTooltip && (
        <ErrorFormTooltip
          id={`${inputId}-feedback`}
          help={help}
          error={error}
          onShown={setTooltipShown}
          shown={shown}
          referenceElement={labelRef}
        />
      )}
    </div>
  );
};

export default Textarea;

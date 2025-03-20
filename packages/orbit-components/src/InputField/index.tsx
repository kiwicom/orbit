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
      "h-form-box-normal text-form-element-normal z-default",
      "absolute left-0 top-0",
      "duration-fast transition-all ease-in-out",
      "rounded-150 tb:rounded-100 box-border w-full",
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

const InputField = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
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
          "h-form-box-normal text-form-element-normal",
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
                  <InformationCircle color="info" size="small" />
                </span>
              )}
              {error && (
                <span className="flex" ref={iconRef}>
                  <AlertCircle color="critical" size="small" />
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
                "[&>.orbit-form-label]:text-form-element-normal [&>.orbit-form-label]:whitespace-nowrap [&>.orbit-form-label]:leading-normal",
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
            "peer",
            insideInputGroup
              ? "focus:outline-blue-normal focus:rounded-150 focus:tb:rounded-100 duration-fast transition-all ease-in-out focus:outline-2 focus:-outline-offset-1"
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
});

InputField.displayName = "InputField";

export default InputField;

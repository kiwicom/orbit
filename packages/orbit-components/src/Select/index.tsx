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
import { spaceAfterClasses } from "../common/tailwind/spaceAfter";

const Select = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
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
    helpClosable = true,
    dataTest,
    prefix,
    spaceAfter,
    customValueText,
    insideInputGroup,
    dataAttrs,
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

  return (
    <label
      className={cx("relative block", spaceAfter && spaceAfterClasses[spaceAfter])}
      ref={inputRef}
      style={{ width }}
    >
      {label && !inlineLabel && (
        <FormLabel
          error={!!error}
          help={!!help}
          labelRef={labelRef}
          iconRef={iconRef}
          onMouseEnter={() => setTooltipShownHover(true)}
          onMouseLeave={() => setTooltipShownHover(false)}
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
                <InformationCircle color="info" size="small" />
              </span>
            )}
            {error && (
              <span className="flex" ref={iconRef}>
                <AlertCircle color="critical" size="small" />
              </span>
            )}
            <FormLabel required={required} error={!!error} help={!!help} inlineLabel={inlineLabel}>
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
                "text-form-element-normal font-base pointer-events-none absolute inset-y-0 z-[3] flex items-center",
                prefix ? "ps-1200" : "ps-300",
              )}
            >
              {customValueText}
            </div>
          )}
          <select
            className={cx(
              "cursor-pointer appearance-none bg-transparent outline-none",
              filled ? "text-form-element-filled-foreground" : "text-form-element-foreground",
              "font-base text-form-element-normal",
              "pe-1000",
              prefix ? "ps-1200" : "ps-300",
              "shrink grow basis-1/5",
              "size-full",
              "border-0",
              customValueText && "!text-transparent",
              "duration-fast transition-shadow ease-in-out",
              "rounded-150 tb:rounded-100",
              "[&>option]:text-form-element-filled-foreground",
              "disabled:text-form-element-disabled-foreground disabled:cursor-not-allowed",
            )}
            data-test={dataTest}
            data-state={getFieldDataState(!!error)}
            disabled={disabled}
            value={value == null ? "" : value}
            name={name}
            onFocus={handleFocus}
            onBlur={onBlur}
            onChange={onChange}
            tabIndex={tabIndex ? Number(tabIndex) : undefined}
            id={selectId}
            required={required}
            ref={ref}
            aria-describedby={shown ? `${selectId}-feedback` : undefined}
            aria-invalid={error ? true : undefined}
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
          <ChevronDown color="secondary" />
        </div>
        <FakeInput disabled={disabled} error={error} />
      </div>
      {!insideInputGroup && hasTooltip && (
        <ErrorFormTooltip
          id={`${selectId}-feedback`}
          help={help}
          error={error}
          helpClosable={helpClosable}
          shown={shown}
          onShown={setTooltipShown}
          inlineLabel={inlineLabel}
          referenceElement={inlineLabel ? iconRef : inputRef}
        />
      )}
    </label>
  );
});

// otherwise Unknown in storybook
Select.displayName = "Select";

export default Select;

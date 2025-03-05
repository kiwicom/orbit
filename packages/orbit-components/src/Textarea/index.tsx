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

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
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
    helpClosable = true,
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
            onMouseEnter={() => setTooltipShownHover(true)}
            onMouseLeave={() => setTooltipShownHover(false)}
          >
            {label}
          </FormLabel>
        )}

        <textarea
          className={cx(
            "w-full appearance-none",
            "font-base text-normal p-300 leading-normal",
            "rounded-100 relative box-border block overflow-auto",
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
          helpClosable={helpClosable}
          error={error}
          onShown={setTooltipShown}
          shown={shown}
          referenceElement={labelRef}
        />
      )}
    </div>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;

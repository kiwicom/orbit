"use client";

import * as React from "react";
import cx from "clsx";

import ErrorFormTooltip from "../../ErrorFormTooltip";
import FormLabel from "../../FormLabel";
import { SIZE_OPTIONS, RESIZE_OPTIONS } from "../../Textarea/consts";
import useErrorTooltip from "../../ErrorFormTooltip/hooks/useErrorTooltip";
import getFieldDataState from "../../common/getFieldDataState";
import type { Props } from "../../Textarea/types";
import useRandomId from "../../hooks/useRandomId";
import { getSpaceAfterClasses } from "../../common/tailwind";

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const {
    size = SIZE_OPTIONS.NORMAL,
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
    <label
      className={cx(
        "font-base relative flex w-full flex-col",
        fullHeight && "h-full flex-1",
        spaceAfter && getSpaceAfterClasses(spaceAfter),
      )}
      ref={labelRef}
    >
      {label && (
        <FormLabel
          filled={!!value}
          error={!!error}
          help={!!help}
          required={required}
          disabled={disabled}
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
          "font-base",
          "rounded-normal relative box-border block overflow-auto",
          "min-h-form-box-normal",
          "duration-fast transition-shadow ease-in-out",
          "border border-transparent",
          // TODO: remove when will be migrated from tmp-folder
          size === SIZE_OPTIONS.SMALL && "text-normal px-sm py-xs leading-normal",
          resize === RESIZE_OPTIONS.VERTICAL ? "resize-y" : "resize-none",
          size === SIZE_OPTIONS.NORMAL && "text-normal p-sm leading-normal",
          error ? "shadow-form-element-error" : "shadow-form-element",
          disabled ? "cursor-not-allowed" : "cursor-text",
          fullHeight && "h-full flex-1",
          disabled || readOnly
            ? "bg-form-element-disabled-background"
            : [
                "bg-form-element-background",
                error ? "hover:shadow-form-element-error-hover" : "hover:bg-form-element-hover",
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
        {...dataAttrs}
      />
      {hasTooltip && (
        <ErrorFormTooltip
          id={`${inputId}-feedback`}
          help={help}
          inputSize={size}
          helpClosable={helpClosable}
          error={error}
          onShown={setTooltipShown}
          shown={shown}
          referenceElement={labelRef}
        />
      )}
    </label>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;

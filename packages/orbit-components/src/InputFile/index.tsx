"use client";

import * as React from "react";
import cx from "clsx";

import Button from "../Button";
import ButtonLink from "../ButtonLink";
import FormLabel from "../FormLabel";
import ErrorFormTooltip from "../ErrorFormTooltip";
import Attachment from "../icons/Attachment";
import CloseCircle from "../icons/CloseCircle";
import getFieldDataState from "../common/getFieldDataState";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import type { Props } from "./types";
import { spaceAfterClasses } from "../common/tailwind";

const InputFile = (props: Props) => {
  const {
    placeholder = "No file selected",
    buttonLabel = "Select file",
    required,
    onRemoveFile,
    dataTest,
    id,
    spaceAfter,
    width = "100%",
    help,
    error,
    onFocus,
    onBlur,
    name,
    label,
    multiple,
    onChange,
    disabled = false,
    allowedFileTypes,
    tabIndex,
    fileName,
    insideInputGroup,
    labelRemove,
    ref,
  } = props;

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

  const onClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (iconRef && iconRef.current && iconRef.current.contains(e.target as Node)) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    // Disabling because the onClick exists just to stop propagation of events
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <label
      onClick={onClick}
      ref={labelRef}
      className={cx("font-base relative block w-full", spaceAfter && spaceAfterClasses[spaceAfter])}
      style={{ width }}
    >
      <input
        data-test={dataTest}
        id={id}
        disabled={disabled}
        aria-required={required}
        multiple={multiple}
        data-state={
          insideInputGroup && typeof error === "undefined"
            ? undefined
            : getFieldDataState(!!props.error)
        }
        type="file"
        name={name}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={onBlur}
        accept={Array.isArray(allowedFileTypes) ? allowedFileTypes.join(",") : allowedFileTypes}
        tabIndex={tabIndex ? Number(tabIndex) : undefined}
        className="peer pointer-events-none absolute h-0 opacity-0"
      />
      {label && (
        <FormLabel
          required={required}
          error={!!error}
          help={!!help}
          labelRef={labelRef}
          iconRef={iconRef}
          onMouseEnter={() => setTooltipShownHover(true)}
          onMouseLeave={() => setTooltipShownHover(false)}
        >
          {label}
        </FormLabel>
      )}
      <div
        className={cx(
          "peer-focus:outline-blue-normal peer-focus:outline peer-focus:outline-2",
          "box-border flex items-center",
          "h-form-box-normal ps-150",
          error ? "shadow-form-element-error" : "shadow-form-element",
          !disabled &&
            (error ? "hover:shadow-form-element-error-hover" : "hover:shadow-form-element-hover"),
          "duration-fast transition-shadow ease-in-out",
          "rounded-100",
          disabled
            ? "bg-form-element-disabled-background cursor-not-allowed"
            : "bg-form-element-background cursor-pointer",
        )}
      >
        <Button
          type="secondary"
          disabled={disabled}
          size="small"
          iconLeft={<Attachment ariaHidden />}
          asComponent="div"
          role="button"
        >
          {buttonLabel}
        </Button>
        <div
          className={cx(
            "font-base ps-300 w-full truncate",
            error ? "text-red-normal" : "text-ink-normal",
          )}
          ref={ref}
        >
          {fileName || placeholder}
        </div>
        {fileName && (
          <ButtonLink
            type="primary"
            disabled={disabled}
            compact
            iconLeft={<CloseCircle ariaLabel={labelRemove} color="secondary" />}
            onClick={ev => {
              ev.preventDefault();
              if (onRemoveFile) {
                onRemoveFile();
              }
            }}
          />
        )}
      </div>
      {!insideInputGroup && hasTooltip && (
        <ErrorFormTooltip
          help={help}
          error={error}
          referenceElement={labelRef}
          shown={shown}
          onShown={setTooltipShown}
        />
      )}
    </label>
  );
};

export default InputFile;

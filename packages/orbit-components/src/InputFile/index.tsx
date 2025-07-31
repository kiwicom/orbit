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

/**
 * @orbit-doc-start
 * README
 * ----------
 * # InputFile
 *
 * To implement InputFile component into your project you'll need to add the import:
 *
 * ```jsx
 * import InputFile from "@kiwicom/orbit-components/lib/InputFile";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <InputFile labelRemove="Remove file" />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the InputFile component.
 *
 * | Name             | Type                       | Default              | Description                                                                                                                                   |
 * | :--------------- | :------------------------- | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
 * | allowedFileTypes | `string \| string[]`       |                      | You can specify allow file types. [See MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers) |
 * | buttonLabel      | `Translation`              | `"Select file"`      | The label for the Button inside InputFile. [See Functional specs](#functional-specs)                                                          |
 * | dataTest         | `string`                   |                      | Optional prop for testing purposes.                                                                                                           |
 * | id               | `string`                   |                      | Set `id` for `InputFile`                                                                                                                      |
 * | error            | `React.Node`               |                      | The error message for the Select. [See Functional specs](#functional-specs)                                                                   |
 * | fileName         | `string`                   |                      | The name of selected file.                                                                                                                    |
 * | help             | `React.Node`               |                      | The help message for the InputFile.                                                                                                           |
 * | label            | `Translation`              |                      | The label for the InputFile.                                                                                                                  |
 * | name             | `string`                   |                      | The name for the InputFile.                                                                                                                   |
 * | onBlur           | `event => void \| Promise` |                      | Function for handling onBlur event.                                                                                                           |
 * | onChange         | `event => void \| Promise` |                      | Function for handling onChange event.                                                                                                         |
 * | required         | `boolean`                  |                      | If true, the label is displayed as required.                                                                                                  |
 * | onFocus          | `event => void \| Promise` |                      | Function for handling onFocus event.                                                                                                          |
 * | onRemoveFile     | `() => void \| Promise`    |                      | Function for handling file name removing.                                                                                                     |
 * | placeholder      | `TranslationString`        | `"No file selected"` | The placeholder for the InputFile. [See Functional specs](#functional-specs)                                                                  |
 * | ref              | `func`                     |                      | Prop for forwarded ref of the InputFile. [See Functional specs](#functional-specs)                                                            |
 * | spaceAfter       | `enum`                     |                      | Additional `margin-bottom` after component.                                                                                                   |
 * | tabIndex         | `string \| number`         |                      | Specifies the tab order of an element                                                                                                         |
 * | width            | `string`                   | `100%`               | Specifies width of InputFile                                                                                                                  |
 * | insideInputGroup | `boolean`                  | `false`              | Set to `true` if InputFile is inside InputGroup                                                                                               |
 * | multiple         | `boolean`                  |                      | If set to `true` will allow to upload multiple files                                                                                          |
 * | disabled         | `boolean`                  |                      | If set to `true` will allow to upload multiple files                                                                                          |
 * | labelRemove      | `string`                   |                      | Required label for the remove file button.                                                                                                    |
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
 * - The `error` prop overwrites the `help` prop, due to higher priority.
 *
 * - If you pass some `string` into **placeholder** it will be used as its placeholder.
 *
 * - If you pass some `string` into **buttonLabel** it will be used for button content.
 *
 * - `ref` can be used for example auto-focus the elements immediately after render.
 *
 *
 * @orbit-doc-end
 */
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

import * as React from "react";
import styled, { css } from "styled-components";

import type * as Common from "../common/types";
import defaultTheme from "../defaultTheme";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import FormLabel from "../FormLabel";
import ErrorFormTooltip from "../ErrorFormTooltip";
import Attachment from "../icons/Attachment";
import CloseCircle from "../icons/CloseCircle";
import { rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import getFieldDataState from "../common/getFieldDataState";
import formElementFocus from "../InputField/helpers/formElementFocus";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import mq from "../utils/mediaQuery";
import type { Props } from "./types";

const Field = styled.label<{ $width: Props["width"]; spaceAfter?: Common.SpaceAfterSizes }>`
  ${({ theme, $width }) => css`
    font-family: ${theme.orbit.fontFamily};
    display: block;
    position: relative;
    width: ${$width};
    margin-bottom: ${getSpacingToken};
  `}
`;

Field.defaultProps = {
  theme: defaultTheme,
};

const FakeInput = styled(({ children, className }) => <div className={className}>{children}</div>)`
  ${({ theme, $disabled, error }) => css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: ${rtlSpacing(theme.orbit.paddingInputFile)};
    height: ${theme.orbit.heightInputNormal};
    box-shadow: inset 0 0 0
      ${`${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};
    background-color: $ ${theme.backgroundInput};
    transition: box-shadow ${theme.orbit.durationFast} ease-in-out;
    border-radius: ${theme.orbit.borderRadiusNormal};
    ${mq.tablet(css`
      border-radius: ${theme.orbit.borderRadiusNormal};
    `)};

    ${$disabled &&
    css`
      cursor: not-allowed;
      background-color: ${theme.orbit.backgroundInputDisabled};
    `};

    &:hover {
      box-shadow: inset 0 0 0
        ${`${theme.orbit.borderWidthInput} ${
          error ? theme.orbit.paletteRedNormalHover : theme.orbit.borderColorInputHover
        }`};
    }
  `}
`;

FakeInput.defaultProps = {
  theme: defaultTheme,
};

// we need to hide the input, but not with display or visibility so we can trigger the focus
const Input = styled.input<{ error?: Props["error"] }>`
  opacity: 0;
  position: absolute;
  height: 0;
  pointer-events: none;

  &:focus ~ ${FakeInput} {
    ${formElementFocus}
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};

const getFileInputColor = ({ error, fileName }, theme) => {
  if (error) {
    return theme.orbit.paletteRedNormal;
  }
  if (fileName) {
    return theme.orbit.colorTextInput;
  }
  return theme.orbit.paletteInkNormal;
};

const StyledFileInput = styled.div<Pick<Props, "error" | "fileName">>`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  color: ${({ error, fileName, theme }) => getFileInputColor({ error, fileName }, theme)};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
`;

StyledFileInput.defaultProps = {
  theme: defaultTheme,
};

const InputFile = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    placeholder = "No file selected",
    buttonLabel = "Select file",
    required,
    onRemoveFile,
    dataTest,
    id,
    helpClosable = true,
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

  return (
    <Field
      spaceAfter={spaceAfter}
      ref={labelRef}
      $width={width}
      onClick={e => {
        if (iconRef && iconRef.current && iconRef.current.contains(e.target as Node)) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      <Input
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
        error={error}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={onBlur}
        accept={Array.isArray(allowedFileTypes) ? allowedFileTypes.join(",") : allowedFileTypes}
        tabIndex={tabIndex ? Number(tabIndex) : undefined}
      />
      {label && (
        <FormLabel
          filled={!!fileName}
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
      <FakeInput error={error} $disabled={disabled}>
        <Button
          type="secondary"
          disabled={disabled}
          size="small"
          iconLeft={<Attachment />}
          asComponent="div"
          role="button"
        >
          {buttonLabel}
        </Button>
        <StyledFileInput fileName={fileName} error={error} ref={ref}>
          {fileName || placeholder}
        </StyledFileInput>
        {fileName && (
          <ButtonLink
            type="primary"
            disabled={disabled}
            compact
            iconLeft={<CloseCircle ariaLabel="remove" color="secondary" />}
            onClick={ev => {
              ev.preventDefault();
              if (onRemoveFile) {
                onRemoveFile();
              }
            }}
          />
        )}
      </FakeInput>
      {!insideInputGroup && hasTooltip && (
        <ErrorFormTooltip
          help={help}
          error={error}
          helpClosable={helpClosable}
          inputSize="normal"
          referenceElement={labelRef}
          shown={shown}
          onShown={setTooltipShown}
        />
      )}
    </Field>
  );
});

InputFile.displayName = "InputFile";

export default InputFile;

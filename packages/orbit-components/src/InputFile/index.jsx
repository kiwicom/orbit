// @flow
import * as React from "react";
import styled, { css } from "styled-components";

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

import type { Props } from ".";

const Field = styled.label`
  ${({ theme, $width }) => css`
    font-family: ${theme.orbit.fontFamily};
    display: block;
    position: relative;
    width: ${$width};
    margin-bottom: ${getSpacingToken};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Field.defaultProps = {
  theme: defaultTheme,
};

const FakeInput = styled(({ children, className }) => <div className={className}>{children}</div>)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => rtlSpacing(theme.orbit.paddingInputFile)};
  height: ${({ theme }) => theme.orbit.heightInputNormal};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};
  background-color: ${({ theme }) => theme.backgroundInput};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  border-radius: 6px;
  ${mq.tablet(css`
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  `)};

  &:hover {
    box-shadow: inset 0 0 0
      ${({ theme, error }) =>
        `${theme.orbit.borderWidthInput} ${
          error ? theme.orbit.paletteRedNormalHover : theme.orbit.borderColorInputHover
        }`};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
FakeInput.defaultProps = {
  theme: defaultTheme,
};

const Input = styled.input`
  // we need to hide the input, but not with display or visibility so we can trigger the focus
  opacity: 0;
  position: absolute;
  height: 0;

  &:focus ~ ${FakeInput} {
    ${formElementFocus}
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
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
  return theme.orbit.paletteInkLight;
};

const StyledFileInput = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  color: ${({ error, fileName, theme }) => getFileInputColor({ error, fileName }, theme)};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledFileInput.defaultProps = {
  theme: defaultTheme,
};

const InputFile: React.AbstractComponent<Props, HTMLDivElement> = React.forwardRef<
  Props,
  HTMLDivElement,
>((props, ref) => {
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
    onChange,
    allowedFileTypes,
    tabIndex,
    fileName,
    insideInputGroup,
  } = props;

  const {
    tooltipShown,
    tooltipShownHover,
    setTooltipShown,
    setTooltipShownHover,
    labelRef,
    iconRef,
    handleFocus,
  } = useErrorTooltip({ onFocus });

  const shown = tooltipShown || tooltipShownHover;

  return (
    <Field spaceAfter={spaceAfter} ref={label ? null : labelRef} $width={width}>
      <Input
        data-test={dataTest}
        id={id}
        aria-required={required}
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
        accept={allowedFileTypes}
        tabIndex={tabIndex}
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
      <FakeInput error={error}>
        <Button
          type="secondary"
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
      {!insideInputGroup && (
        <ErrorFormTooltip
          help={help}
          error={error}
          helpClosable={helpClosable}
          inputSize="normal"
          referenceElement={label ? iconRef : labelRef}
          shown={shown}
          onShown={setTooltipShown}
        />
      )}
    </Field>
  );
});

InputFile.displayName = "InputFile";

export default InputFile;

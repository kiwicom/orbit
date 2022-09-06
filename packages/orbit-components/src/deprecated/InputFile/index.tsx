import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import Button from "../../Button";
import ButtonLink from "../../ButtonLink";
import FormLabel from "../../FormLabel";
import FormFeedback from "../FormFeedback";
import Attachment from "../../icons/Attachment";
import CloseCircle from "../../icons/CloseCircle";
import { rtlSpacing } from "../../utils/rtl";
import getSpacingToken from "../../common/getSpacingToken";
import getFieldDataState from "../../common/getFieldDataState";
import formElementFocus from "../../InputField/helpers/formElementFocus";
import mq from "../../utils/mediaQuery";
import { Props } from "./index.d";

const Field = styled.label<{ $width?: string; spaceAfter?: Props["spaceAfter"] }>`
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

FakeInput.defaultProps = {
  theme: defaultTheme,
};

const Input = styled.input<{ error?: Props["error"] }>`
  // we need to hide the input, but not with display or visibility so we can trigger the focus
  opacity: 0;
  position: absolute;
  height: 0;

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
  return theme.orbit.paletteInkLight;
};

const StyledFileInput = styled.div<{ error: Props["error"]; fileName: Props["fileName"] }>`
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

const InputFile = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      placeholder = "No file selected",
      buttonLabel = "Select file",
      onRemoveFile,
      dataTest,
      spaceAfter,
      name,
      error,
      help,
      onChange,
      onFocus,
      onBlur,
      allowedFileTypes,
      tabIndex,
      label,
      fileName,
    },
    ref,
  ) => {
    return (
      <Field spaceAfter={spaceAfter}>
        <Input
          data-test={dataTest}
          data-state={getFieldDataState(Boolean(error))}
          type="file"
          name={name}
          error={error}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          accept={Array.isArray(allowedFileTypes) ? allowedFileTypes.join(",") : allowedFileTypes}
          ref={ref}
          tabIndex={Number(tabIndex)}
        />
        {label && <FormLabel filled={Boolean(fileName)}>{label}</FormLabel>}
        <FakeInput error={error}>
          <Button
            type="secondary"
            role="button"
            size="small"
            iconLeft={<Attachment />}
            asComponent="div"
          >
            {buttonLabel}
          </Button>
          <StyledFileInput fileName={fileName} error={error}>
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
        <FormFeedback error={error} help={help} />
      </Field>
    );
  },
);

InputFile.displayName = "InputFile";

export default InputFile;

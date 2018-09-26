// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import FormLabel from "../FormLabel";
import FormFeedback from "../FormFeedback";
import Attachment from "../icons/Attachment";
import CloseCircle from "../icons/CloseCircle";

import type { Props } from "./index";

const Field = styled.label`
  font-family: ${({ theme }) => theme.orbit.fontfamily};
  display: block;
`;

Field.defaultProps = {
  theme: defaultTokens,
};

const FakeInput = styled(({ children, className }) => <div className={className}>{children}</div>)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 6px; // TODO create token (paddingLeftInputFile)
  height: ${({ theme }) => theme.orbit.heightInputNormal};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};
  background-color: ${({ theme }) => theme.backgroundInput};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &:hover {
    box-shadow: inset 0 0 0
      ${({ theme, error }) =>
        `${theme.orbit.borderWidthInput} ${
          error ? theme.orbit.paletteRedNormalHover : theme.orbit.borderColorInputHover
        }`};
  }
`;

FakeInput.defaultProps = {
  theme: defaultTokens,
};

const Input = styled.input`
  // we need to hide the input, but not with display or visibility so we can trigger the focus
  opacity: 0;
  position: absolute;
  height: 0;

  &:focus ~ ${FakeInput} {
    box-shadow: ${({ theme }) =>
      `inset 0 0 0 ${theme.orbit.borderWidthInputFocus} ${theme.orbit.borderColorInputFocus}`};
  }
`;

Input.defaultProps = {
  theme: defaultTokens,
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
  color: ${({ error, fileName, theme }) => getFileInputColor({ error, fileName }, theme)};
  width: 100%;
  white-space: nowrap;
  padding-left: ${({ theme }) => theme.orbit.spaceSmall};
`;

StyledFileInput.defaultProps = {
  theme: defaultTokens,
};

const InputButton = styled(Button)`
  flex-shrink: 0;
`;

const CloseButton = styled(ButtonLink)`
  flex-shrink: 0;

  & svg {
    color: ${({ theme }) => theme.orbit.paletteInkLight};
  }
`;

CloseButton.defaultProps = {
  theme: defaultTokens,
};

const InputFile = (props: Props) => {
  const { placeholder = "No file selected", title = "Select file", dataTest } = props;

  return (
    <Field data-test={dataTest}>
      <Input
        type="file"
        name={props.name}
        error={props.error}
        onChange={props.onChange}
        onFocus={props.onChange}
        onBlur={props.onBlur}
        accept={props.allowedFileTypes}
      />
      {props.label && <FormLabel filled={!!props.fileName}>{props.label}</FormLabel>}
      <FakeInput error={props.error}>
        <InputButton type="secondary" size="small" icon={<Attachment />} component="div">
          {title}
        </InputButton>
        <StyledFileInput fileName={props.fileName} error={props.error}>
          {props.fileName || placeholder}
        </StyledFileInput>
        {props.fileName && (
          <CloseButton
            type="secondary"
            transparent
            icon={<CloseCircle />}
            onClick={props.onRemoveFile}
          />
        )}
      </FakeInput>
      {props.help && !props.error && <FormFeedback type="help">{props.help}</FormFeedback>}
      {props.error && <FormFeedback type="error">{props.error}</FormFeedback>}
    </Field>
  );
};

export default InputFile;

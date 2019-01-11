// @flow
import * as React from "react";
import styled from "styled-components";

import Stack from "../Stack";
import FormFeedback, { StyledFormFeedback } from "../FormFeedback";

import type { Props } from "./index";

// TODO: we want to support InputFile, InputStepper and InputGroup (can be painful)
const getFeedbacks = children =>
  React.Children.map(children, child => child).map(child => ({
    help: child.props.help,
    error: child.props.error,
  }));

const StyledFormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledFormControlChildren = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  ${StyledFormFeedback} {
    display: none;
  }
`;

const StyledFeedback = styled.div`
  display: flex;
  flex-grow: 0;
  width: 100%;
`;

const FeedbackChild = ({ help, error }: { help: React.Node, error: React.Node }) => (
  <React.Fragment>
    {help && !error && (
      <FormFeedback type="help" stationary>
        {help}
      </FormFeedback>
    )}
    {error && (
      <FormFeedback type="error" stationary>
        {error}
      </FormFeedback>
    )}
    {!help && !error && "&nbsp;"}
  </React.Fragment>
);

const FormControl = ({ children }: Props) => (
  <StyledFormControl>
    <StyledFormControlChildren>
      <Stack direction="row" align="end">
        {children}
      </Stack>
    </StyledFormControlChildren>
    <Stack direction="row">
      {getFeedbacks(children).map(({ help, error }) => (
        <StyledFeedback>
          <FeedbackChild help={help} error={error} />
        </StyledFeedback>
      ))}
    </Stack>
  </StyledFormControl>
);

export default FormControl;

// @flow
import React from "react";
import styled from "styled-components";

const StyledFormFeedbackTooltip = styled.div`
  width: 100px;
  background-color: red;
  position: absolute;
  left: 0;
  top: 0;
`;

const FormFeedbackTooltip = ({ bounding, children }) => {
  console.log(bounding);
  return <StyledFormFeedbackTooltip>{children}</StyledFormFeedbackTooltip>;
};

export default FormFeedbackTooltip;

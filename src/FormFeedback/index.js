// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import TYPE_OPTIONS from "./consts";

import type { Props } from "./index";

export const StyledFormFeedback = styled(({ theme, type, ...props }) => <div {...props} />)`
  color: ${({ theme, type }) =>
    type === TYPE_OPTIONS.ERROR ? theme.orbit.colorTextError : theme.orbit.colorTextSecondary};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeFormFeedback};
  font-weight: ${({ theme, type }) =>
    type === TYPE_OPTIONS.ERROR ? theme.orbit.fontWeightMedium : theme.orbit.fontWeightNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextSmall};
  width: 100%;
  margin-top: 2px;
  position: absolute;
  top: 100%;
  max-height: ${({ theme }) => theme.orbit.lineHeightTextSmall};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & a {
    color: ${({ theme, type }) =>
      type === TYPE_OPTIONS.ERROR ? theme.orbit.colorTextError : theme.orbit.colorTextPrimary};
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    text-decoration: underline;
    cursor: pointer;
  }

  strong,
  b {
    font-weight: ${({ theme }) => theme.fontWeightMedium};
    color: ${({ theme }) => theme.paletteInkNormal};
  }
`;

StyledFormFeedback.defaultProps = {
  theme: defaultTheme,
};

const FormFeedback = (props: Props) => {
  const { children, type = TYPE_OPTIONS.HELP, dataTest } = props;
  return (
    <StyledFormFeedback type={type} data-test={dataTest}>
      {children}
    </StyledFormFeedback>
  );
};

export default FormFeedback;

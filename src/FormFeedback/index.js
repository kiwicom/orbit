// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import TYPE_OPTIONS from "./consts";

import type { Props } from "./index";

const StyledFormFeedback = styled(({ theme, type, ...props }) => <div {...props} />)`
  color: ${({ theme, type }) =>
    type === TYPE_OPTIONS.ERROR ? theme.orbit.colorTextError : theme.orbit.colorTextSecondary};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeMessageForm}; // TODO: rename token
  font-weight: ${({ theme, type }) =>
    type === TYPE_OPTIONS.ERROR ? theme.orbit.fontWeightMedium : theme.orbit.fontWeightNormal};
  margin-top: 2px; // TODO: create token for 2px
  line-height: ${({ theme }) => theme.orbit.lineHeightText};

  & a {
    color: ${({ theme, type }) =>
      type === TYPE_OPTIONS.ERROR ? theme.orbit.colorTextError : theme.orbit.colorTextAttention};
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    text-decoration: underline;
    cursor: pointer;
  }
`;

StyledFormFeedback.defaultProps = {
  theme: defaultTokens,
};

const FormFeedback = (props: Props) => {
  const { children, type = TYPE_OPTIONS.HELP } = props;
  return <StyledFormFeedback type={type}>{children}</StyledFormFeedback>;
};

export default FormFeedback;

// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";

import TYPE_OPTIONS from "./consts";
import type { Props } from "./FormFeedback";

const StyledFormFeedback = styled(({ theme, type, ...props }) => <div {...props} />)`
  color: ${({ theme, type }) =>
    type === TYPE_OPTIONS.ERROR ? theme.colorTextError : theme.colorTextSecondary};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeMessageForm}; // TODO: rename token
  font-weight: ${({ theme, type }) =>
    type === TYPE_OPTIONS.ERROR ? theme.fontWeightMedium : theme.fontWeightNormal};
  margin-top: 2px; // TODO: create token for 2px
  line-height: ${({ theme }) => theme.lineHeightText};

  & a {
    color: ${({ theme, type }) =>
      type === TYPE_OPTIONS.ERROR ? theme.colorTextError : theme.colorTextAttention};
    font-weight: ${({ theme }) => theme.fontWeightMedium};
    text-decoration: underline;
    cursor: pointer;
  }
`;

const FormFeedback = (props: Props) => {
  const { children, type = TYPE_OPTIONS.HELP, theme = defaultTokens } = props;
  return (
    <StyledFormFeedback theme={theme} type={type}>
      {children}
    </StyledFormFeedback>
  );
};

export default FormFeedback;

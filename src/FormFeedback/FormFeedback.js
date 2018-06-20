// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";

export const TYPE_OPTIONS = {
  HELP: "help",
  ERROR: "error",
};

type Props = {
  children: React.Node,
  type: $Values<typeof TYPE_OPTIONS>,
  theme: typeof defaultTokens,
};

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
  const { children, type, theme } = props;
  return (
    <StyledFormFeedback theme={theme} type={type}>
      {children}
    </StyledFormFeedback>
  );
};

FormFeedback.defaultProps = {
  type: "help",
  theme: defaultTokens,
};

export default FormFeedback;

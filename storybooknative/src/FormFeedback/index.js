// @flow
import * as React from "react";
import { Text } from "react-native";

import styled from "../styled";
import defaultTokens from "../defaultTokens";
import TYPE_OPTIONS from "./consts";

import type { Props } from "./index";

const StyledFormFeedback = styled(Text, props => {
  const { theme, type } = props;
  return {
    color:
      type === TYPE_OPTIONS.ERROR ? theme.orbit.colorTextError : theme.orbit.colorTextSecondary,
    fontSize: theme.orbit.fontSizeFormFeedback,
    fontWeight:
      type === TYPE_OPTIONS.ERROR ? theme.orbit.fontWeightMedium : theme.orbit.fontWeightNormal,
    marginTop: theme.orbit.marginTopFormFeedback,
    lineHeight: theme.orbit.lineHeightText,
  };
});

StyledFormFeedback.defaultProps = {
  theme: defaultTokens,
};

const FormFeedback = (props: Props) => {
  const { children, type = TYPE_OPTIONS.HELP } = props;
  return <StyledFormFeedback type={type}>{children}</StyledFormFeedback>;
};

export default FormFeedback;

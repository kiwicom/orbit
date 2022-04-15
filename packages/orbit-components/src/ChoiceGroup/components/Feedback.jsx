// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import type { Props } from "./Feedback";

export const StyledFormFeedback: any = styled(({ theme, type, ...props }) => <div {...props} />)`
  ${({ theme }) => css`
    color: ${theme.orbit.textCriticalForeground};
    font-family: ${theme.orbit.fontFamily};
    font-size: 12px;
    font-weight: ${theme.orbit.fontWeightMedium};
    line-height: 1.4;
    width: 100%;
    margin-top: 2px;
    position: absolute;
    top: 100%;
    max-height: ${Math.floor(1.4 * 12)}px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    & a {
      color: ${theme.orbit.textCriticalForeground};
      font-weight: ${theme.orbit.fontWeightMedium};
      text-decoration: underline;
      cursor: pointer;
    }
    strong,
    b {
      font-weight: ${theme.fontWeightMedium};
      color: ${theme.paletteInkNormal};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledFormFeedback.defaultProps = {
  theme: defaultTheme,
};

const FormFeedback = (props: Props): React.Node => {
  const { children, dataTest } = props;
  return <StyledFormFeedback data-test={dataTest}>{children}</StyledFormFeedback>;
};

export default FormFeedback;

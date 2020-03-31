// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import getViewportHideStyles from "./helpers/getViewportHideStyles";
import getDisplay from "./helpers/getDisplay";

import type { Props } from "./index";

const StyledHide = styled(({ on, block, theme, ...props }) => <span {...props} />)`
  ${({ on }) => getViewportHideStyles(on, getDisplay)};
`;

StyledHide.defaultProps = {
  theme: defaultTheme,
};

const Hide = ({ on = [], block, children }: Props) => (
  <StyledHide on={on} block={block}>
    {children}
  </StyledHide>
);

export default Hide;

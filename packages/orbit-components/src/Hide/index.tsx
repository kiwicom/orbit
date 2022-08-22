import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import getViewportHideStyles from "./helpers/getViewportHideStyles";
import getDisplay from "./helpers/getDisplay";
import { Props } from "./index.d";
import { Devices } from "../utils/mediaQuery/index.d";

const StyledHide = styled.div<{ on: Devices[]; $block?: boolean }>`
  ${({ on }) => getViewportHideStyles(on, getDisplay)};
`;

StyledHide.defaultProps = {
  theme: defaultTheme,
};

const Hide = ({ on = [], block, children }: Props) => (
  <StyledHide on={on} $block={block}>
    {children}
  </StyledHide>
);

export default Hide;

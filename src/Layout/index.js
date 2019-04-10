// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import Grid from "../utils/Grid";
import LAYOUT_SETTINGS from "./consts";
import mq from "../utils/mediaQuery";

import type { Props } from "./index";

const StyledLayout = styled(Grid)`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;

  ${mq.desktop(css`
    padding: 24px;
  `)};
`;

StyledLayout.defaultProps = {
  theme: defaultTheme,
};

const Layout = ({ children, type }: Props) => (
  <StyledLayout {...LAYOUT_SETTINGS[type]}>
    {React.Children.map(children, (item, key) =>
      React.cloneElement(item, {
        hideOn: LAYOUT_SETTINGS[type].hideOn ? LAYOUT_SETTINGS[type].hideOn[key] : undefined,
      }),
    )}
  </StyledLayout>
);

export default Layout;

export { default as LayoutColumn } from "./LayoutColumn";

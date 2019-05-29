// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import Grid from "../utils/Grid";
import { LAYOUT_SETTINGS } from "./consts";
import mq from "../utils/mediaQuery";

import type { Props } from "./index";

const getChildrenProps = (type, key) => {
  if (LAYOUT_SETTINGS[type].layoutColumns) {
    if (LAYOUT_SETTINGS[type].layoutColumns[key]) {
      return LAYOUT_SETTINGS[type].layoutColumns[key];
    }
  }
  return null;
};

const StyledLayout = styled(Grid)`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  padding: 0 ${({ theme }) => theme.orbit.spaceMedium};

  ${mq.desktop(css`
    padding: ${({ theme }) => theme.orbit.spaceLarge};
  `)};
`;

StyledLayout.defaultProps = {
  theme: defaultTheme,
};

const Layout = ({ children, type, dataTest }: Props) => (
  <StyledLayout {...LAYOUT_SETTINGS[type]} dataTest={dataTest}>
    {React.Children.map(children, (item, key) =>
      React.cloneElement(item, {
        ...getChildrenProps(type, key),
      }),
    )}
  </StyledLayout>
);

export default Layout;

export { default as LayoutColumn } from "./LayoutColumn";

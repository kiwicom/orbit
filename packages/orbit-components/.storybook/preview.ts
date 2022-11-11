import { addDecorator } from "@storybook/react";

import "loki/configure-react";
import { QUERIES } from "../src/utils/mediaQuery/consts";
import orbitDecorator from "./orbitDecorator";
import theme from "../src/defaultTheme";

const tokens = {
  smallMobile: 320,
  [QUERIES.mediumMobile]: theme.orbit.widthBreakpointMediumMobile,
  [QUERIES.largeMobile]: theme.orbit.widthBreakpointLargeMobile,
  [QUERIES.tablet]: theme.orbit.widthBreakpointTablet,
  [QUERIES.desktop]: theme.orbit.widthBreakpointDesktop,
  [QUERIES.largeDesktop]: theme.orbit.widthBreakpointLargeDesktop,
};

const viewports = Object.entries(tokens).reduce((acc, [viewport, width]) => {
  acc[viewport] = {
    name: viewport,
    styles: {
      width: `${String(width)}px`,
      height: `100vh`,
    },
  };
  return acc;
}, {});

export const parameters = {
  viewport: {
    viewports,
  },
};

addDecorator(orbitDecorator);

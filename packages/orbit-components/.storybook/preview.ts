import { addDecorator } from "@storybook/react";

import "loki/configure-react";
import { QUERIES } from "../src/utils/mediaQuery/consts";
import orbitDecorator from "./orbitDecorator";
import theme from "../src/defaultTheme";

const tokens = {
  smallMobile: 320,
  [QUERIES.MEDIUMMOBILE]: theme.orbit.widthBreakpointMediumMobile,
  [QUERIES.LARGEMOBILE]: theme.orbit.widthBreakpointLargeMobile,
  [QUERIES.TABLET]: theme.orbit.widthBreakpointTablet,
  [QUERIES.DESKTOP]: theme.orbit.widthBreakpointDesktop,
  [QUERIES.LARGEDESKTOP]: theme.orbit.widthBreakpointLargeDesktop,
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

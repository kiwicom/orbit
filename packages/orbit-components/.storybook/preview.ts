import { Preview } from "@storybook/react";

import "../src/tailwind.css";
import { QUERIES } from "../src/utils/mediaQuery";
import orbitDecorator from "./orbitDecorator";
import theme from "../src/defaultTheme";

const tokens = {
  smallMobile: 320,
  [QUERIES.MEDIUMMOBILE]: theme.orbit.breakpointMediumMobile,
  [QUERIES.LARGEMOBILE]: theme.orbit.breakpointLargeMobile,
  [QUERIES.TABLET]: theme.orbit.breakpointTablet,
  [QUERIES.DESKTOP]: theme.orbit.breakpointDesktop,
  [QUERIES.LARGEDESKTOP]: theme.orbit.breakpointLargeDesktop,
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

const preview: Preview = {
  decorators: [orbitDecorator],
  parameters: {
    viewport: { viewports },
    a11y: {
      element: ".story-content",
    },
  },
};

export default preview;

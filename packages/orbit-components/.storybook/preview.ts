import { Preview } from "@storybook/react";

import "../src/tailwind.css";
import { QUERIES } from "../src/utils/mediaQuery";
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

const preview: Preview = {
  decorators: [orbitDecorator],
  parameters: {
    viewport: { viewports },
    a11y: {
      element: "#storybook-root",
      config: {
        rules: [
          {
            id: "aria-required-attr",
            selector: '*:not(div.text-heading-title0[role="heading"])',
          },
          {
            id: "color-contrast",
            selector: "*:not(pre .attr-name.tag.token)",
          },
          {
            id: "color-contrast-enhanced",
            selector: "*:not(pre .attr-name.tag.token)",
          },
          {
            id: "scrollable-region-focusable",
            selector: "*not(pre.overflow-x-auto)",
          },
        ],
      },
    },
  },
};

export default preview;

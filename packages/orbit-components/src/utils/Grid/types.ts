// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/types";

export interface BasicProps extends Common.SpaceAfter {
  readonly inline?: boolean;
  readonly rows?: string;
  readonly columns?: string;
  readonly gap?: string;
  readonly rowGap?: string;
  readonly columnGap?: string;
  readonly maxWidth?: string;
  readonly width?: string;
}

export interface Props extends Common.Globals, Common.SpaceAfter, BasicProps {
  readonly as?: string;
  readonly mediumMobile?: BasicProps;
  readonly largeMobile?: BasicProps;
  readonly tablet?: BasicProps;
  readonly desktop?: BasicProps;
  readonly largeDesktop?: BasicProps;
  readonly children: React.ReactNode;
}

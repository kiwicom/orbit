// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly goBackTitle?: Common.Translation;
  readonly onGoBack?: Common.Event<React.SyntheticEvent<HTMLAnchorElement>>;
  readonly backHref?: string;
}

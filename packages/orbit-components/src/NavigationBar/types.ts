// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import * as Common from "../common/types";

export interface Props extends Common.Globals {
  readonly onMenuOpen?: Common.Event<React.SyntheticEvent<HTMLAnchorElement | HTMLButtonElement>>;
  readonly onShow?: Common.Callback;
  readonly onHide?: Common.Callback;
  readonly children: React.ReactNode;
  readonly hideOnScroll?: boolean;
}

// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";
import type { As } from "../Heading/types";

// TODO: remove spaceAfter in the next major version
/** spaceAfter is deprecated, use margin instead */
export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly children?: React.ReactNode;
  readonly title?: React.ReactNode;
  readonly titleAs?: As;
  readonly margin?: React.CSSProperties["margin"] | Common.ObjectProperty;
  readonly description?: React.ReactNode;
  readonly icon?: React.ReactNode;
  readonly actions?: React.ReactNode;
  readonly onClose?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  readonly loading?: boolean;
  readonly header?: React.ReactNode;
  readonly dataA11ySection?: string;
}

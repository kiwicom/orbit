// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";
import type { As } from "../Heading/types";

type LoadingProps =
  | {
      loading?: false;
      loadingTitle?: never;
      loadingHidden?: never;
    }
  | {
      loading: true;
      loadingTitle: string;
      loadingHidden?: false;
    }
  | {
      loading: true;
      loadingTitle?: never;
      loadingHidden: true;
    };

// TODO: remove spaceAfter in the next major version
/** spaceAfter is deprecated, use margin instead */
interface BaseProps extends Common.Globals, Common.SpaceAfter {
  readonly children?: React.ReactNode;
  readonly title?: React.ReactNode;
  readonly titleAs?: As;
  readonly margin?: React.CSSProperties["margin"] | Common.ObjectProperty;
  readonly description?: React.ReactNode;
  readonly labelClose?: string;
  readonly actions?: React.ReactNode;
  readonly onClose?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  readonly header?: React.ReactNode;
  readonly dataA11ySection?: string;
}

export type Props = BaseProps & LoadingProps;

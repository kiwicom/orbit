// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../../common/types";
import type { As } from "../../Heading/types";

type ExpandableConditionalProps =
  | {
      readonly expandable?: false;
      readonly expanded?: never;
      readonly initialExpanded?: never;
    }
  | {
      readonly expandable: true;
      readonly expanded?: boolean;
      readonly initialExpanded?: boolean;
    };

interface CardProps extends Common.Globals {
  readonly title?: React.ReactNode;
  readonly titleAs?: As;
  readonly icon?: React.ReactNode;
  readonly description?: React.ReactNode;
  readonly children?: React.ReactNode;
  readonly actions?: React.ReactNode;
  readonly noSeparator?: boolean;
  readonly onClose?: Common.Callback;
  readonly onExpand?: Common.Callback;
  readonly onClick?: Common.Callback;
  readonly header?: React.ReactNode;
}

export type Props = CardProps & ExpandableConditionalProps;

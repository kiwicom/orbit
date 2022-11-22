import type * as React from "react";

import type * as Common from "../../../common/types";
import type { As } from "../../../Heading/types";

export interface Props {
  description?: React.ReactNode;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  onClose?: Common.Event<React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>>;
  title?: React.ReactNode;
  titleAs?: As;
  isSection?: boolean;
  dataA11ySection?: string;
  expandable?: boolean;
  expanded?: boolean;
  header?: React.ReactNode;
}

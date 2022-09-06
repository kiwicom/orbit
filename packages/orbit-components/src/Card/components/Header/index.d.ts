import * as React from "react";

import * as Common from "../../../common/common";
import { As } from "../../../Heading/index.d";

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

declare const Header: React.FunctionComponent<Props>;

export default Header;

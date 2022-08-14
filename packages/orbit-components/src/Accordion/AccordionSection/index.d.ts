// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import React from "react";

import * as Common from "../../common/common";

export interface Props extends Common.Globals {
  readonly children?: React.ReactNode;
  readonly actions?: React.ReactNode;
  readonly expanded?: boolean;
  readonly expandable?: boolean;
  readonly onExpand?: Common.Callback;
  readonly header?: React.ReactNode;
  readonly footer?: React.ReactNode;
}

declare const AccordionSection: React.FunctionComponent<Props>;
export { AccordionSection, AccordionSection as default };

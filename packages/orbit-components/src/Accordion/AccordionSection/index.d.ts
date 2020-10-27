// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/Accordion/AccordionSection";

export interface Props extends Common.Global {
  readonly id?: string | number;
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

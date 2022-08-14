// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface Props {
  readonly onClickOutside?: Common.Event<MouseEvent<HTMLDivElement>>;
  readonly children: React.ReactNode | React.ReactNode[];
}

declare const ClickOutside: React.FunctionComponent<Props>;
export { ClickOutside, ClickOutside as default };

// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/ClickOutside";

export interface Props {
  readonly onClickOutside?: Common.Event<React.MouseEvent>;
  readonly children: React.ReactNode | React.ReactNode[];
}

const ClickOutside: React.FunctionComponent<Props>;
export { ClickOutside, ClickOutside as default };

// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";
import Illustration from "../Illustration/index.d.ts";

declare module "@kiwicom/orbit-components/lib/CallOutBanner";

export interface Props {
  readonly tabIndex?: string;
  readonly onClick?: Common.Callback;
  readonly title: Common.Translation;
  readonly description?: Common.Translation;
  readonly illustration?: React.ElementType<typeof Illustration>;
  readonly actions?: React.ReactNode;
  readonly children?: React.ReactNode;
}

const CallOutBanner: React.FunctionComponent<Props>;
export { CallOutBanner, CallOutBanner as default };

// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/ServiceLogo";

type Size = "small" | "medium" | "large";
type Name =%NAMES%

interface Props extends Common.Global {
  readonly name: Name;
  readonly size?: Size;
  readonly grayScale?: boolean;
}

const ServiceLogo: React.FunctionComponent<Props>;
export { ServiceLogo, ServiceLogo as default };

// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";
import { SharedProps } from "../index.d.ts";

declare module "@kiwicom/orbit-components/lib/StepperStateless";

export type Props = SharedProps;

const StepperStateless: React.FunctionComponent<Props>;
export { StepperStateless, StepperStateless as default };

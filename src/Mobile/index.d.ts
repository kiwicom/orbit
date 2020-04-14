// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Mobile"

export interface Props = {|
  readonly children: React.ReactNode,
|};

const Mobile: React.FunctionComponent<Props>;
export { Mobile, Mobile as default };

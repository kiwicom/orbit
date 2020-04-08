// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Dictionary";

export interface Props {
  readonly values: Common.Translations;
  readonly children: React.ReactNode;
}

const Dictionary: React.FunctionComponent<Props>;
export { Dictionary, Dictionary as default };

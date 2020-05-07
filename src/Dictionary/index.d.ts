// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Dictionary";

export interface Props {
  readonly values: Common.Translations;
  readonly children: React.ReactNode;
}

declare const Dictionary: React.FunctionComponent<Props>;
export { Dictionary, Dictionary as default };

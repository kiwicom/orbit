// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { Translations } from "../Dictionary/index.d";

export type PureTranslate = (
  dictionary: Translations,
  key: string,
  values?: Record<string, string | number>,
) => string;

export interface Props {
  readonly tKey: string;
  readonly values?: Record<string, string | number>;
}

declare const Translate: React.FunctionComponent<Props>;
export { Translate, Translate as default };

// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { Translations } from "../Dictionary/index.d";

export type Values = Record<string, string | number>;

export type PureTranslate = (
  dictionary: Translations,
  key: string,
  values?: Values,
) => React.ReactElement<string>;

export interface Props {
  readonly tKey: string;
  readonly values?: Values;
}

declare const Translate: React.FunctionComponent<Props>;
export { Translate, Translate as default };

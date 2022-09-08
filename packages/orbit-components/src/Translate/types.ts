// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { Translations } from "../Dictionary/types";

export type Values = Record<string, string | number>;

export type PureTranslate = (dictionary: Translations, key: string, values?: Values) => string;

export interface Props {
  readonly tKey: string;
  readonly values?: Values;
}

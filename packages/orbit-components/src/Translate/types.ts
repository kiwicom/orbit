// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type { Translations } from "../Dictionary/types";

export type Values = Record<string, string | number>;

export type PureTranslate = (dictionary: Translations, key: string, values?: Values) => string;

export interface Props {
  readonly tKey: string;
  readonly values?: Values;
}

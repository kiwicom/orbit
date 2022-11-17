// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type { Translations } from "../Dictionary/types";
import type { Theme } from "../defaultTheme";

export interface Props {
  readonly theme: Theme;
  readonly dictionary?: Translations;
  readonly children: React.ReactNode;
}

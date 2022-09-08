// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { Translations } from "../Dictionary/types";
import { Theme } from "../defaultTheme";

export interface Props {
  readonly theme: Theme;
  readonly dictionary?: Translations;
  readonly children: React.ReactNode;
}

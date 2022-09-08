// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

export type Translations = Record<string, string>;

export interface Props {
  readonly values: Translations;
  readonly children: React.ReactNode;
}

// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/Translate";

interface Values {
  [key: string]: string | number;
}

interface Props {
  readonly tKey: string;
  readonly values?: Values;
}

const Translate: React.FunctionComponent<Props>;
export { Translate, Translate as default };

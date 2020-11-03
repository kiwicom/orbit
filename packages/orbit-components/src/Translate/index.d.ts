// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/Translate";

type Values = {
  [key: string]: string | number;
};

interface Props {
  readonly tKey: string;
  readonly values?: Values;
}

declare const Translate: React.FunctionComponent<Props>;
export { Translate, Translate as default };

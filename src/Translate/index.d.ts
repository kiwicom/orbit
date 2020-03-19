// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Translate";

export { Translate, Translate as default };

declare namespace Translate {
  interface Values {
    [key: string]: string | number;
  }

  interface Props {
    readonly tKey: string;
    readonly values?: Values;
  }
}

declare class Translate extends React.Component<Translate.Props> {}

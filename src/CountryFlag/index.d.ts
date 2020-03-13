// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/CountryFlag";

export { CountryFlag, CountryFlag as default };

declare namespace CountryFlag {
  interface Props extends Common.Global {
    readonly code?: string | null;
    readonly name?: string;
  }
}

declare class CountryFlag extends React.Component<CountryFlag.Props> {}

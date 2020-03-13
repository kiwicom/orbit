// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/Separator";

export { Separator, Separator as default };

declare namespace Separator {
  type Props = Common.SpaceAfter;
}

declare class Separator extends React.Component<Separator.Props> {}

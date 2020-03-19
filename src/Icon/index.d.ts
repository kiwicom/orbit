// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";
import IconBase from "./IconBase";

declare module "@kiwicom/orbit-components/lib/Icon";

export { Icon, Icon as default };

declare namespace Icon {
  interface Props extends IconBase.Props {
    readonly children: React.ReactNode;
    readonly viewBox: string;
  }
}

declare class Icon extends React.Component<Icon.Props> {}

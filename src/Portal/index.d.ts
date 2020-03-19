// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Portal";

export { Portal, Portal as default };

declare namespace Portal {
  interface Props {
    readonly element?: string;
    readonly children: React.ReactNode;
  }
}

declare class Portal extends React.Component<Portal.Props> {}

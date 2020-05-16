// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/Modal";

export interface Props {
  readonly setDimensions?: () => void;
  readonly decideFixedFooter?: () => void;
  readonly setHasModalSection?: () => void;
  readonly removeHasModalSection?: () => void;
  readonly manageFocus?: () => void;
  readonly hasModalSection?: boolean;
  readonly isMobileFullPage?: boolean;
  readonly isInsideModal?: boolean;
  readonly closable?: boolean;
}

export const ModalContext: React.Context<Props>;
export type WithModalContextType = <Config extends {}>(
  arg0: React.Component<Config>,
) => React.Component<Config>;

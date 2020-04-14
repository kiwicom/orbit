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

export type ModalContextType = React.Context<Props>;

export type WithModalContextType = (
  component: React.Component<infer U>,
) => (props: Partial<U>) => any;

const ModalContext: ModalContextType;
const withModalContext: WithModalContextType;
export { ModalContext, ModalContextType, withModalContext, WithModalContextType };

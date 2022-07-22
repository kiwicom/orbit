// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

export interface Props {
  readonly setDimensions?: () => void;
  readonly decideFixedFooter?: () => void;
  readonly setHasModalTitle?: React.Dispatch<React.SetStateAction<boolean>>;
  readonly setHasModalSection?: () => void;
  readonly removeHasModalSection?: () => void;
  readonly setFooterHeight?: React.Dispatch<React.SetStateAction<number>>;
  readonly manageFocus?: () => void;
  readonly hasModalSection?: boolean;
  readonly hasMobileHeader?: boolean;
  readonly isMobileFullPage?: boolean;
  readonly isInsideModal?: boolean;
  readonly closable?: boolean;
  readonly titleID?: string;
}

export const ModalContext: React.Context<Props>;
// eslint-disable-next-line @typescript-eslint/ban-types
export type WithModalContextType = <Config extends {}>(
  arg0: React.Component<Config>,
) => React.Component<Config>;

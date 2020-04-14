// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components
import * as React from "react";

import { Props as IllustrationProps } from "../../Illustration/index.d.ts";
import * as Common from "../../common/common.d.ts";
import { Props as ModalContextProps } from "../ModalContext.d.ts";

declare module "@kiwicom/orbit-components/lib/Modal/ModalHeader";

export interface Props extends Common.Global, ModalContextProps {
  readonly children?: React.ReactNode;
  readonly illustration?: React.ReactElement<IllustrationProps>;
  readonly title?: React.ReactNode;
  readonly description?: React.ReactNode;
  readonly suppressed?: boolean;
}

declare class ModalHeader extends React.Component<Props> {}
export { ModalHeader, ModalHeader as default };

// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

export interface Image {
  readonly original?: string;
  readonly placeholder?: string;
  readonly name: string;
  readonly src?: string;
  readonly code?: string;
}

export interface Props extends Common.Globals {
  readonly actions?: React.ReactNode;
  readonly children?: React.ReactNode;
  readonly label?: React.ReactNode;
  readonly title?: React.ReactNode;
  readonly subTitle?: React.ReactNode;
  readonly image: Image;
  readonly height?: string;
  readonly width?: string;
  readonly href?: string;
  readonly external?: boolean;
  readonly tabIndex?: string | number;
  readonly onClick?: Common.Callback;
}

declare const PictureCard: React.FunctionComponent<Props>;
export { PictureCard, PictureCard as default };

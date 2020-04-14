// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/PictureCard";

type Image = {
  readonly original: string;
  readonly placeholder?: string;
  readonly name: string;
  readonly code: string;
};

interface Props extends Common.Global {
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
  readonly tabIndex?: string;
  readonly onClick?: Common.Callback;
}

const PictureCard: React.FunctionComponent<Props>;
export { PictureCard, PictureCard as default };

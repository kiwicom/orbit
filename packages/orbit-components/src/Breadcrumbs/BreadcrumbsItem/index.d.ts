// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/BreadcrumbsItem";

export interface Props extends Common.Global {
  readonly active?: boolean;
  readonly component?: Common.Component;
  readonly children: React.ReactNode;
  readonly href?: string;
  readonly id?: string;
  readonly contentKey?: number;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLLinkElement>>;
}

declare const BreadcrumbsItem: React.FunctionComponent<Props>;
export { BreadcrumbsItem, BreadcrumbsItem as default };

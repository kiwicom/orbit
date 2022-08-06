// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";
import { Props as BreadcrumbsItemProps } from "./BreadcrumbsItem";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly goBackTitle?: Common.Translation;
  readonly onGoBack?: Common.Event<React.SyntheticEvent<HTMLAnchorElement>>;
  readonly backHref?: string;
}

declare const Breadcrumbs: React.FunctionComponent<Props>;
declare const BreadcrumbsItem: React.FunctionComponent<BreadcrumbsItemProps>;

export { Breadcrumbs, BreadcrumbsItem, Breadcrumbs as default };

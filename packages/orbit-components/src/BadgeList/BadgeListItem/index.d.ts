// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";
import { AnyStyledComponent } from "styled-components";

import * as Common from "../../common/common";

export type Type = "neutral" | "info" | "success" | "warning" | "critical";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly type?: Type;
  readonly strikeThrough?: boolean;
  readonly icon: React.ReactNode;
}

declare const getIconColor: (type: Type) => string;
declare const BadgeListItem: React.FunctionComponent<Props>;
declare const StyledBadgeListItem: AnyStyledComponent;
declare const StyledVerticalBadge: AnyStyledComponent;
declare const StyledBadgeContent: AnyStyledComponent;

export {
  BadgeListItem,
  StyledBadgeListItem,
  StyledVerticalBadge,
  getIconColor,
  StyledBadgeContent,
  BadgeListItem as default,
};

// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";
import { AnyStyledComponent } from "styled-components";

import * as Common from "../../common/common";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly label?: Common.Translation;
  readonly icon?: React.ReactNode;
}

declare const ListItem: React.FunctionComponent<Props>;
declare const IconContainer: AnyStyledComponent;
declare const Item: AnyStyledComponent;
export { ListItem, ListItem as default, IconContainer, Item };

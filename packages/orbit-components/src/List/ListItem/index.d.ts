// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly label?: Common.Translation;
  readonly icon?: React.ReactNode;
}

declare const ListItem: React.FunctionComponent<Props>;
export { ListItem, ListItem as default };

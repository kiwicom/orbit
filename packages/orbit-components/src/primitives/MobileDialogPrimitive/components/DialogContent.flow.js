// @flow
import * as React from "react";

import type { Globals } from "../../../common/common.js.flow";

export type Props = {|
  shown: boolean,
  dialogId: ?string,
  children: React.Node,
  onClose: (ev: SyntheticEvent<HTMLElement>) => void,
  ...Globals,
|};

export type MobileDialogPrimitive = React.ComponentType<Props>;

declare export default MobileDialogPrimitive;

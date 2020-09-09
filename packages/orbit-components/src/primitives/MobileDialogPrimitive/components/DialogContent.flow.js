// @flow
import type { Globals } from "../../../common/common.js.flow";

export type Props = {|
  shown: boolean,
  dialogId: ?string,
  children: React$Node,
  parent: ?React$Node,
  onClose: () => void,
  ...Globals,
|};

declare export default React.ComponentType<Props>;

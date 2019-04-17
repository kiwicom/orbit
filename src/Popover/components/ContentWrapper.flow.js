// @flow
import type { Globals, Translation } from "../../common/common.js.flow";
import type { Positions } from "../index.flow";

export type Props = {|
  ...Globals,
  +content: React$Node,
  +closeText?: Translation,
  +preferredPosition?: Positions,
  +containerRef: any | HTMLDivElement,
  +handleClose: () => void,
|};

export type State = {|
  position: string,
  anchor: string,
|};

declare export default React$ComponentType<Props>;

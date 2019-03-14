// @flow
import type { Globals, Translation } from "../common/common.js.flow";

export type Positions = "top" | "bottom";
export type Anchors = "start" | "end";

export type Anchor = {|
  anchor: Anchors,
|};

export type Position = {|
  position: Positions,
|};

export type Props = {|
  ...Globals,
  +children: React$Node,
  +content: React$Node,
  +closeText?: Translation,
  +preferredPosition?: Positions,
  +prefferedAnchorPosition?: Anchors,
|};

export type State = {|
  shown: boolean,
|};

declare export default React$ComponentType<Props>;

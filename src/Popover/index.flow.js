// @flow
import type { Globals, Translation } from "../common/common.js.flow";

export type Positions = "top" | "bottom";
export type Anchors = "start" | "end";

export type Dimensions = {|
  containerTop: number,
  containerLeft: number,
  containerHeight: number,
  containerWidth: number,
  popoverHeight: number,
  popoverWidth: number,
  contentHeight: number,
|};

export type Position = {|
  position: Positions,
|};

export type Anchor = {|
  anchor: Anchors,
|};

export type Props = {|
  ...Globals,
  +children: React$Node,
  +content: React$Node,
  +closeText?: Translation,
  +preferredPosition?: Positions,
|};

export type State = {|
  shown: boolean,
|};

declare export default React$ComponentType<Props>;

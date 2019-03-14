// @flow
import type { Globals, Translation } from "../../common/common.js.flow";

export type Dimensions = {|
  containerTop: number,
  containerLeft: number,
  containerHeight: number,
  containerWidth: number,
  popoverHeight: number,
  popoverWidth: number,
  contentHeight: number,
|};

export type Positions = "top" | "bottom";
export type Anchors = "start" | "end";

export type Anchor = {|
  anchor: Anchors,
|};

export type Position = {|
  position: Positions,
|};

export type StyledAnchor = {|
  ...Anchor,
  ...Dimensions,
|};

export type StyledPosition = {|
  ...Position,
  ...Dimensions,
|};

export type Props = {|
  ...Globals,
  +content: React$Node,
  +closeText?: Translation,
  +preferredPosition?: Positions,
  +prefferedAnchorPosition?: Anchors,
  +containerRef: any | HTMLDivElement,
  +handleClickContent: () => void,
  +handleClose: () => void,
|};

export type State = {|
  position: string,
  anchor: string,
|};

declare export default React$ComponentType<Props>;

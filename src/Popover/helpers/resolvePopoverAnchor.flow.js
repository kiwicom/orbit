// @flow
import type { Anchor, Dimensions } from "../index.flow";

export type StyledAnchor = {|
  ...Anchor,
  ...Dimensions,
|};

declare export default StyledAnchor;

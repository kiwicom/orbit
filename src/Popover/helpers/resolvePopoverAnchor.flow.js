// @flow
import type { Anchor, Dimensions } from "../index.flow";

export type StyledAnchor = {|
  ...Anchor,
  ...Dimensions,
  theme: { rtl: boolean },
|};

declare export default StyledAnchor;

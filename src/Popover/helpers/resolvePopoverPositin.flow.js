// @flow
import type { Position, Dimensions } from "../index.flow";

export type StyledPosition = {|
  ...Position,
  ...Dimensions,
|};

declare export default StyledPosition;

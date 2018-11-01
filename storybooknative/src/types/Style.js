// @flow

/* eslint-disable camelcase */

/**
 * Styles are only reexported here to avoid importing internal RN libraries
 * everywhere (types are not exported directly).
 */

import { type ____DangerouslyImpreciseStyle_Internal } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import AnimatedNode from "react-native/Libraries/Animated/src/nodes/AnimatedNode";

type ExactStyles = $Exact<____DangerouslyImpreciseStyle_Internal>;
type ShapedStyles = $Shape<ExactStyles>;

export type Style = {|
  ...ShapedStyles,
  +borderWidth?: number | AnimatedNode | string,
  +lineHeight?: number | string,
|};

// @flow

/* eslint-disable camelcase */

/**
 * Styles are only reexported here to avoid importing internal RN libraries
 * everywhere (types are not exported directly).
 */

import { type ____DangerouslyImpreciseStyle_Internal } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import AnimatedNode from "react-native/Libraries/Animated/src/nodes/AnimatedNode";

// The fontSize style property should be a string for the react-native-web
type ExactStyles = $Exact<{
  ...____DangerouslyImpreciseStyle_Internal,
  +fontSize?: string,
  +borderWidth?: number | AnimatedNode | string,
  +lineHeight?: number | string,
}>;

export type Style = {|
  ...ExactStyles,
  +ios?: ExactStyles,
  +android?: ExactStyles,
  +web?: ExactStyles,
|};

export type OutputStyle = {|
  ...ExactStyles,
|};

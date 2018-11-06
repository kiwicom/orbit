// @flow

import * as React from "react";
import { Platform } from "react-native";
import styled from "styled-components";

import type { Style, OutputStyle } from "../types/Style";

type PlatformStyles = Style | ((props: Object) => Style);

const reduceStyles = (styles: PlatformStyles): OutputStyle => {
  const { ios, android, web, ...commonStyles } = styles;
  if (ios && Platform.OS === "ios") {
    return { ...commonStyles, ...ios };
  }
  if (android && Platform.OS === "android") {
    return { ...commonStyles, ...android };
  }
  if (web && Platform.OS === "web") {
    return { ...commonStyles, ...web };
  }
  return commonStyles;
};

export const createPlatformStyles = (styles: PlatformStyles) => {
  if (typeof styles !== "function") {
    return reduceStyles(styles);
  }
  const fn = (styles: (props: Object) => Style);
  return (props: Object) => reduceStyles(fn(props));
};

export { default as lineHeight } from "./lineheight";

/**
 * Now we can use styled like:
 * const Pinky = styled(View, {
 *  backgroundColor: 'pink'
 * });
 *
 * const ColoredView = styled(View, (props) => ({ backgroundColor: props.color}))
 *
 * and we get flow validating our styles.
 *
 * Also you can define platform differences easily:
 *
 *  const Component = styled(View, {
 *     fontSize: "23px",
 *     ios: {
 *      backgroundColor: "red",
 *     },
 *     android: {
 *       backgroundColor: "blue",
 *     },
 *    web: {
 *      backgroundColor: "white",
 *     },
 *  });
 *
 */

export default (Component: React.ElementType, styles: PlatformStyles) =>
  styled(Component)([], createPlatformStyles(styles));

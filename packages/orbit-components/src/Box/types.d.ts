// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type * as React from "react";

import type * as Common from "../common/types";

export type Elevation =
  | "action"
  | "fixed"
  | "raised"
  | "overlay"
  | "fixedReverse"
  | "raisedReverse"
  | "level1"
  | "level2"
  | "level3"
  | "level3Reverse"
  | "level4";

export type ColorTokens =
  | "blueLight"
  | "blueLightHover"
  | "blueLightActive"
  | "blueNormal"
  | "blueNormalHover"
  | "blueNormalActive"
  | "blueDark"
  | "blueDarkHover"
  | "blueDarkActive"
  | "blueDarker"
  | "bundleBasic"
  | "bundleMedium"
  | "cloudLight"
  | "cloudLightHover"
  | "cloudLightActive"
  | "cloudNormal"
  | "cloudNormalHover"
  | "cloudNormalActive"
  | "cloudDark"
  | "cloudDarkHover"
  | "cloudDarkActive"
  | "greenLight"
  | "greenLightHover"
  | "greenLightActive"
  | "greenNormal"
  | "greenNormalHover"
  | "greenNormalActive"
  | "greenDark"
  | "greenDarkHover"
  | "greenDarkActive"
  | "greenDarker"
  | "inkDark"
  | "inkDarkHover"
  | "inkDarkActive"
  | "inkLight"
  | "inkLightHover"
  | "inkLightActive"
  | "inkNormal"
  | "inkNormalHover"
  | "inkNormalActive"
  | "orangeLight"
  | "orangeLightHover"
  | "orangeLightActive"
  | "orangeNormal"
  | "orangeNormalHover"
  | "orangeNormalActive"
  | "orangeDark"
  | "orangeDarkHover"
  | "orangeDarkActive"
  | "orangeDarker"
  | "productLight"
  | "productLightHover"
  | "productLightActive"
  | "productNormal"
  | "productNormalHover"
  | "productNormalActive"
  | "productDark"
  | "productDarkHover"
  | "productDarkActive"
  | "productDarker"
  | "redLight"
  | "redLightHover"
  | "redLightActive"
  | "redNormal"
  | "redNormalHover"
  | "redNormalActive"
  | "redDark"
  | "redDarkHover"
  | "redDarkActive"
  | "redDarker"
  | "socialFacebook"
  | "socialFacebookHover"
  | "socialFacebookActive"
  | "white"
  | "whiteNormal"
  | "whiteHover"
  | "whiteActive";

export type SpacingToken =
  | "none"
  | "50"
  | "100"
  | "150"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "800"
  | "1000"
  | "1200"
  | "1600"
  | "XXXSmall"
  | "XXSmall"
  | "XSmall"
  | "small"
  | "medium"
  | "large"
  | "XLarge"
  | "XXLarge"
  | "XXXLarge";

export interface SpacingObject {
  left?: SpacingToken;
  top?: SpacingToken;
  right?: SpacingToken;
  bottom?: SpacingToken;
}

export type MediaQueryObject = Omit<
  Props,
  | "mediumMobile"
  | "largeMobile"
  | "tablet"
  | "desktop"
  | "largeDesktop"
  | "as"
  | "children"
  | "className"
>;

export interface Props extends Common.Globals {
  readonly as?: string;
  readonly padding?: SpacingObject | SpacingToken;
  readonly margin?: SpacingObject | SpacingToken;
  readonly display?:
    | "none"
    | "flex"
    | "inline-flex"
    | "block"
    | "inline"
    | "inline-block"
    | "list-item";
  readonly wrap?: "wrap" | "nowrap";
  readonly shrink?: number;
  readonly grow?: number;
  readonly direction?: "row" | "column" | "row-reverse" | "column-reverse";
  readonly width?: string;
  readonly zIndex?: number;
  readonly minWidth?: string;
  readonly maxWidth?: string;
  readonly height?: string;
  readonly maxHeight?: string;
  readonly position?: "absolute" | "relative" | "fixed";
  readonly left?: string;
  readonly top?: string;
  readonly right?: string;
  readonly bottom?: string;
  readonly align?: "start" | "end" | "center" | "stretch";
  readonly justify?: "center" | "start" | "end" | "between" | "around";
  readonly textAlign?: "start" | "end" | "left" | "right" | "center";
  readonly elevation?: Elevation;
  readonly color?: ColorTokens;
  readonly background?: ColorTokens;
  readonly borderRadius?:
    | "small"
    | "normal"
    | "large"
    | "circle"
    | "full"
    | "50"
    | "100"
    | "150"
    | "300"
    | "400";
  readonly overflow?: "auto" | "hidden" | "scroll" | "visible";
  readonly mediumMobile?: MediaQueryObject;
  readonly largeMobile?: MediaQueryObject;
  readonly tablet?: MediaQueryObject;
  readonly desktop?: MediaQueryObject;
  readonly largeDesktop?: MediaQueryObject;
  readonly children?: React.ReactNode;
  readonly className?: string; // Box is a only component where extending make sense
}

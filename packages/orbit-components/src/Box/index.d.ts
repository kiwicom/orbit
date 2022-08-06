/*
  DOCUMENTATION: https://orbit.kiwi/components/Box/
*/
import * as React from "react";

import * as Common from "../common/common";

// TODO: extend to suppressed and flat
export type Elevation =
  | "action"
  | "fixed"
  | "raised"
  | "overlay"
  | "fixedReverse"
  | "raisedReverse";

export type ColorTokens =
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
  | "white"
  | "whiteHover"
  | "whiteActive"
  | "cloudLight"
  | "cloudLightHover"
  | "cloudLightActive"
  | "cloudNormal"
  | "cloudNormalHover"
  | "cloudNormalActive"
  | "cloudDark"
  | "inkLighter"
  | "inkLighterHover"
  | "inkLighterActive"
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
  | "socialFacebook"
  | "socialFacebookHover"
  | "socialFacebookActive";

export type SpacingToken =
  | "none"
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
  readonly textAlign?: "left" | "right" | "center";
  readonly elevation?: Elevation;
  readonly color?: ColorTokens;
  readonly background?: ColorTokens;
  readonly borderRadius?: "small" | "normal" | "large" | "circle";
  readonly overflow?: "auto" | "hidden" | "scroll" | "visible";
  readonly mediumMobile?: MediaQueryObject;
  readonly largeMobile?: MediaQueryObject;
  readonly tablet?: MediaQueryObject;
  readonly desktop?: MediaQueryObject;
  readonly largeDesktop?: MediaQueryObject;
  readonly children?: React.ReactNode;
  readonly className?: string; // Box is a only component where extending make sense
}

declare const Box: React.FunctionComponent<Props>;
export { Box, Box as default };

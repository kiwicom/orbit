// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type * as Common from "../common/types";

export type Indent = "none" | "small" | "medium" | "large" | "XLarge" | "XXLarge";
export type Align = "left" | "center" | "right";

export type PaletteTokens =
  | "paletteProductLight"
  | "paletteProductLightHover"
  | "paletteProductLightActive"
  | "paletteProductNormal"
  | "paletteProductNormalHover"
  | "paletteProductNormalActive"
  | "paletteProductDark"
  | "paletteProductDarkHover"
  | "paletteProductDarkActive"
  | "paletteProductDarker"
  | "paletteWhite"
  | "paletteWhiteHover"
  | "paletteWhiteActive"
  | "paletteCloudLight"
  | "paletteCloudLightHover"
  | "paletteCloudLightActive"
  | "paletteCloudNormal"
  | "paletteCloudNormalHover"
  | "paletteCloudNormalActive"
  | "paletteCloudDark"
  | "paletteCloudDarkHover"
  | "paletteCloudDarkActive"
  | "paletteInkLight"
  | "paletteInkLightHover"
  | "paletteInkLightActive"
  | "paletteInkDark"
  | "paletteInkDarkHover"
  | "paletteInkDarkActive"
  | "paletteInkNormal"
  | "paletteInkNormalHover"
  | "paletteInkNormalActive"
  | "paletteOrangeLight"
  | "paletteOrangeLightHover"
  | "paletteOrangeLightActive"
  | "paletteOrangeNormal"
  | "paletteOrangeNormalHover"
  | "paletteOrangeNormalActive"
  | "paletteOrangeDark"
  | "paletteOrangeDarkHover"
  | "paletteOrangeDarkActive"
  | "paletteOrangeDarker"
  | "paletteRedLight"
  | "paletteRedLightHover"
  | "paletteRedLightActive"
  | "paletteRedNormal"
  | "paletteRedNormalHover"
  | "paletteRedNormalActive"
  | "paletteRedDark"
  | "paletteRedDarkHover"
  | "paletteRedDarkActive"
  | "paletteRedDarker"
  | "paletteGreenLight"
  | "paletteGreenLightHover"
  | "paletteGreenLightActive"
  | "paletteGreenNormal"
  | "paletteGreenNormalHover"
  | "paletteGreenNormalActive"
  | "paletteGreenDark"
  | "paletteGreenDarkHover"
  | "paletteGreenDarkActive"
  | "paletteGreenDarker"
  | "paletteBlueLight"
  | "paletteBlueLightHover"
  | "paletteBundleBasic"
  | "paletteBundleMedium"
  | "paletteBlueLightActive"
  | "paletteBlueNormal"
  | "paletteBlueNormalHover"
  | "paletteBlueNormalActive"
  | "paletteBlueDark"
  | "paletteBlueDarkHover"
  | "paletteBlueDarkActive"
  | "paletteBlueDarker"
  | "paletteSocialFacebook"
  | "paletteSocialFacebookHover"
  | "paletteSocialFacebookActive";

export interface CommonProps extends Common.SpaceAfter {
  indent?: Indent;
  align?: Align;
}

type ConditionalSeparatorType =
  | {
      readonly color?: PaletteTokens;
      readonly type: "solid" | "dashed" | "dotted" | "double" | "none";
    }
  | {
      readonly color?: false;
      readonly type?: never;
    };

export type Props = CommonProps & ConditionalSeparatorType;

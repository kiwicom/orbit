// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type * as Common from "../common/types";

export type Indent = "none" | "small" | "medium" | "large" | "XLarge" | "XXLarge";
export type Align = "left" | "center" | "right";

export type PaletteTokens =
  | "paletteBlueLight"
  | "paletteBundleBasic"
  | "paletteBundleMedium"
  | "paletteBlueLightHover"
  | "paletteBlueLightActive"
  | "paletteBlueNormal"
  | "paletteBlueNormalHover"
  | "paletteBlueNormalActive"
  | "paletteBlueDark"
  | "paletteBlueDarkHover"
  | "paletteBlueDarkActive"
  | "paletteBlueDarker"
  | "paletteCloudLight"
  | "paletteCloudLightHover"
  | "paletteCloudLightActive"
  | "paletteCloudNormal"
  | "paletteCloudNormalHover"
  | "paletteCloudNormalActive"
  | "paletteCloudDark"
  | "paletteCloudDarkHover"
  | "paletteCloudDarkActive"
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
  | "paletteInkDark"
  | "paletteInkDarkHover"
  | "paletteInkDarkActive"
  | "paletteInkLight"
  | "paletteInkLightHover"
  | "paletteInkLightActive"
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
  | "paletteSocialFacebook"
  | "paletteSocialFacebookHover"
  | "paletteSocialFacebookActive"
  | "paletteWhite"
  | "paletteWhiteNormal"
  | "paletteWhiteHover"
  | "paletteWhiteActive";

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

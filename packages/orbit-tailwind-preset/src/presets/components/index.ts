import plugin from "tailwindcss/plugin";
import {
  convertHexToRgba,
  defaultFoundation,
  defaultTokens,
  getTokens,
} from "@kiwicom/orbit-design-tokens";
import type { Config } from "tailwindcss";
import type { CustomFoundation } from "@kiwicom/orbit-design-tokens/src/js/defaultFoundation";

import orbitFoundationPreset from "../foundation";
import { kebabCase } from "../utils";
import { getComponentLevelToken, ExportedComponentLevelTokens } from "./getComponentLevelToken";

const COLORS: Partial<ExportedComponentLevelTokens>[] = [
  "button",
  "buttonLink",
  "drawer",
  "socialButton",
  "alert",
  "icon",
  "formElement",
  "badge",
  "tag",
  "textLink",
  "text",
  "loading",
  "heading",
  "countryFlag",
];

const px = (n: number) => `${n}px`;

interface Options {
  /** default: true e.g. does not include default normalize styles */
  disablePreflight?: boolean;
  /** default: [] */
  content?: Config["content"];
  /** default: Orbit default theme */
  foundation?: CustomFoundation;
}

const getForegroundColors = (theme: typeof defaultTokens) => {
  const getComponentToken = getComponentLevelToken(theme);

  return COLORS.reduce((acc, name) => {
    // eslint-disable-next-line no-param-reassign
    acc = {
      ...acc,
      ...getComponentToken(name, "foreground"),
      ...getComponentToken(name, "foregroundInverted"),
      ...getComponentToken(name, "foregroundHover"),
      ...getComponentToken(name, "foregroundActive"),
    };

    return acc;
  }, {});
};

const getBackgroundColors = (theme: typeof defaultTokens) => {
  const getComponentToken = getComponentLevelToken(theme);

  return COLORS.reduce((acc, name) => {
    // eslint-disable-next-line no-param-reassign
    acc = {
      ...acc,
      ...getComponentToken(name, "background"),
      ...getComponentToken(name, "backgroundHover"),
      ...getComponentToken(name, "backgroundActive"),
    };

    return acc;
  }, {});
};

const cfg = (options?: Options): Config => {
  const { disablePreflight = true, foundation = defaultFoundation } = options || {};
  const theme = getTokens(foundation);
  const getComponentToken = getComponentLevelToken(theme);

  return {
    content: ["auto"],
    presets: [orbitFoundationPreset({ foundation })],
    corePlugins: {
      preflight: disablePreflight ? false : undefined,
    },
    theme: {
      extend: {
        screens: {
          "sm-mm": { max: px(defaultTokens.breakpointMediumMobile - 1) },
          "mm-lm": {
            min: px(defaultTokens.breakpointMediumMobile),
            max: px(defaultTokens.breakpointLargeMobile - 1),
          },
          "lm-tb": {
            min: px(defaultTokens.breakpointLargeMobile),
            max: px(defaultTokens.breakpointTablet - 1),
          },
          "tb-de": {
            min: px(defaultTokens.breakpointTablet),
            max: px(defaultTokens.breakpointDesktop - 1),
          },
          "de-ld": {
            min: px(defaultTokens.breakpointDesktop),
            max: px(defaultTokens.breakpointLargeDesktop - 1),
          },
        },
        fontSize: {
          "heading-display": theme.headingDisplayFontSize,
          "heading-display-subtitle": theme.headingDisplaySubtitleFontSize,
          "heading-title1": theme.headingTitle1FontSize,
          "heading-title2": theme.headingTitle2FontSize,
          "heading-title3": theme.headingTitle3FontSize,
          "heading-title4": theme.headingTitle4FontSize,
          "heading-title5": theme.headingTitle5FontSize,
          "heading-title6": theme.headingTitle6FontSize,
          "button-large": theme.buttonLargeFontSize,
          "button-normal": theme.buttonNormalFontSize,
          "button-small": theme.buttonSmallFontSize,
          "form-element-normal": theme.formElementNormalFontSize,
        },
        fontWeight: {
          "heading-display": theme.headingDisplayFontWeight,
          "heading-display-subtitle": theme.headingDisplaySubtitleFontWeight,
          "heading-title1": theme.headingTitle1FontWeight,
          "heading-title2": theme.headingTitle2FontWeight,
          "heading-title3": theme.headingTitle3FontWeight,
          "heading-title4": theme.headingTitle4FontWeight,
          "heading-title5": theme.headingTitle5FontWeight,
          "heading-title6": theme.headingTitle6FontWeight,
          "table-head": String(theme.fontWeightTableHead),
        },
        lineHeight: {
          none: "1",
          text: theme.lineHeightText,
          heading: theme.lineHeightHeading,
          "heading-display": theme.headingDisplayLineHeight,
          "heading-display-subtitle": theme.headingDisplaySubtitleLineHeight,
          "heading-title1": theme.headingTitle1LineHeight,
          "heading-title2": theme.headingTitle2LineHeight,
          "heading-title3": theme.headingTitle3LineHeight,
          "heading-title4": theme.headingTitle4LineHeight,
          "heading-title5": theme.headingTitle5LineHeight,
          "heading-title6": theme.headingTitle6LineHeight,
        },
        height: {
          "icon-small": theme.iconSmallSize,
          "icon-medium": theme.iconMediumSize,
          "icon-large": theme.iconLargeSize,
          separator: theme.heightSeparator,
          "form-box-small": theme.formBoxSmallHeight,
          "form-box-normal": theme.formBoxNormalHeight,
          "form-box-large": theme.formBoxLargeHeight,
          "country-flag-small": theme.countryFlagSmallHeight,
          "country-flag-medium": theme.countryFlagMediumHeight,
        },
        minHeight: {
          "icon-small": theme.iconSmallSize,
          "icon-medium": theme.iconMediumSize,
          "icon-large": theme.iconLargeSize,
          "form-box-small": theme.formBoxSmallHeight,
          "form-box-normal": theme.formBoxNormalHeight,
          "form-box-large": theme.formBoxLargeHeight,
        },
        maxHeight: {
          "illustration-extra-small": theme.illustrationExtraSmallHeight,
          "illustration-small": theme.illustrationSmallHeight,
          "illustration-medium": theme.illustrationMediumHeight,
          "illustration-large": theme.illustrationLargeHeight,
          "illustration-display": theme.illustrationDisplayHeight,
        },
        width: {
          "icon-small": theme.iconSmallSize,
          "icon-medium": theme.iconMediumSize,
          "icon-large": theme.iconLargeSize,
          "modal-extra-small-width": theme.modalExtraSmallWidth,
          "modal-small-width": theme.modalSmallWidth,
          "modal-normal-width": theme.modalNormalWidth,
          "modal-large-width": theme.modalLargeWidth,
          "modal-extra-large-width": theme.modalExtraLargeWidth,
          "form-box-small": theme.formBoxSmallHeight,
          "form-box-normal": theme.formBoxNormalHeight,
          "form-box-large": theme.formBoxLargeHeight,
          "country-flag-small": theme.countryFlagSmallWidth,
          "country-flag-medium": theme.countryFlagMediumWidth,
        },
        minWidth: {
          "icon-small": theme.iconSmallSize,
          "icon-medium": theme.iconMediumSize,
          "icon-large": theme.iconLargeSize,
          "dialog-width": theme.dialogWidth,
        },
        padding: {
          ...getComponentToken("button", "padding"),
          ...getComponentToken("formElement", "padding"),
          table: theme.paddingTable,
          "button-padding-xs": theme.buttonPaddingXSmall,
          "button-padding-sm": theme.buttonPaddingSmall,
          "button-padding-md": theme.buttonPaddingNormal,
          "button-padding-lg": theme.buttonPaddingLarge,
        },
        borderRadius: {
          "dialog-desktop": theme.dialogBorderRadiusDesktop,
          "dialog-mobile": theme.dialogBorderRadiusMobile,
          "form-box-small": theme.formBoxSmallHeight,
          "form-box-normal": theme.formBoxNormalHeight,
          "form-box-large": theme.formBoxLargeHeight,
          badge: theme.badgeBorderRadius,
        },
        borderColor: {
          ...Object.keys(theme).reduce((acc, token) => {
            if (token.startsWith("borderColor")) {
              const name = kebabCase(token).replace("border-color-", "");
              return { ...acc, [name]: theme[token] };
            }
            // eslint-disable-next-line no-param-reassign
            acc = {
              ...acc,
              ...getComponentToken(token as ExportedComponentLevelTokens, "borderColor"),
            };

            return acc;
          }, {}),
          white: theme.paletteWhite,
          "form-element": theme.formElementBorderColor,
          "form-element-disabled": theme.formElementBorderColorDisabled,
          "form-element-hover": theme.formElementBorderColorHover,
          "form-element-active": theme.formElementBorderColorActive,
          "form-element-focus": theme.formElementBorderColorFocus,
          "form-element-error": theme.formElementBorderColorError,
          "form-element-error-hover": theme.formElementBorderColorErrorHover,
        },
        backgroundImage: {
          "button-bundle-basic-background": theme.buttonBundleBasicBackground,
          "button-bundle-basic-background-hover": theme.buttonBundleBasicBackgroundHover,
          "button-bundle-basic-background-active": theme.buttonBundleBasicBackgroundActive,
          "button-bundle-medium-background": theme.buttonBundleMediumBackground,
          "button-bundle-medium-background-hover": theme.buttonBundleMediumBackgroundHover,
          "button-bundle-medium-background-active": theme.buttonBundleMediumBackgroundActive,
          "button-bundle-top-background": theme.buttonBundleTopBackground,
          "button-bundle-top-background-hover": theme.buttonBundleTopBackgroundHover,
          "button-bundle-top-background-active": theme.buttonBundleTopBackgroundActive,
          "badge-bundle-basic-background": theme.badgeBundleBasicBackground,
          "badge-bundle-medium-background": theme.badgeBundleMediumBackground,
          "badge-bundle-top-background": theme.badgeBundleTopBackground,
        },
        boxShadow: {
          "button-focus": theme.boxShadowButtonFocus,
          "button-active": `inset 0 0 6px 3px ${convertHexToRgba(theme.paletteInkDark, 15)}`,
          "button-active-pale": `inset 0 0 6px 3px ${convertHexToRgba(theme.paletteInkDark, 8)}`,
          "country-flag": theme.countryFlagShadow,
          "form-element": theme.formElementBoxShadow,
          "form-element-error": theme.formElementBoxShadowError,
          "form-element-error-hover": theme.formElementBoxShadowErrorHover,
          "form-element-hover": theme.formElementBoxShadowHover,
          "form-element-focus": theme.formElementFocusBoxShadow,
          switch: `inset 0 0 1px 0 rgba(7, 64, 92, 0.1),${theme.boxShadowAction}`,
        },
        keyframes: {
          "slow-pulse": {
            "0%": { opacity: "1" },
            "50%": { opacity: "0.3" },
            "100%": { opacity: "1" },
          },
          spinner: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
          loader: {
            "0%": { opacity: "0.3", transform: "translateY(0px)" },
            "20%": { opacity: "1", transform: "translateY(-3px)" },
            "40%": { opacity: "0.3", transform: "translateY(0px)" },
            "100%": { opacity: "0.3", transform: "translateY(0px)" },
          },
          pulse: {
            "0%": { transform: "scale(1)" },
            "50%": { transform: "scale(2)" },
            "100%": { transform: "scale(1)" },
          },
        },
        animation: {
          "pulse-slow": "slow-pulse 2s ease-in-out 0.5s infinite",
          spinner: "spinner 0.75s linear infinite",
          loader: "loader 1.25s infinite ease-in-out",
          pulse: "pulse 1.5s infinite",
        },
        textColor: Object.entries(getForegroundColors(theme)).reduce((acc, [key, value]) => {
          const name = key.replace("text-", "");
          return { ...acc, [name]: value };
        }, {}),
        backgroundColor: getBackgroundColors(theme),
      },
    },
    plugins: [
      plugin(({ addVariant, addUtilities }) => {
        return (
          addVariant("not-last", "&:not(:last-child)"),
          addVariant("not-first", "&:not(:first-child)"),
          addVariant("type-even", "&:nth-of-type(even)"),
          addVariant("type-odd", "&:nth-of-type(odd)"),
          addVariant("target-blank", "&[target='_blank']"),
          addVariant(
            "safari",
            "@supports (-webkit-touch-callout: none) and (not (translate: none))",
          ),
          addUtilities({
            ".scrollbar-none": {
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            },
          })
        );
      }),
    ],
  };
};

export default cfg;

import plugin from "tailwindcss/plugin";
import { convertHexToRgba, defaultTokens, getTokens } from "@kiwicom/orbit-design-tokens";
import type { Config } from "tailwindcss";

import orbitFoundationPreset from "./foundation";
import kebabCase from "./utils/kebabCase";
import getComponentLevelTokens, { ExportedComponentLevelTokens } from "./getComponentLevelTokens";
import cssVarsFoundation, { generateRgba } from "./foundation/cssVarsFoundation";

const COLORS: Partial<ExportedComponentLevelTokens>[] = [
  "alert",
  "badge",
  "button",
  "buttonLink",
  "countryFlag",
  "drawer",
  "formElement",
  "heading",
  "icon",
  "tab",
  "tag",
  "text",
  "textLink",
];

interface Options {
  /** default: true e.g. does not include default normalize styles */
  disablePreflight?: boolean;
}

const getForegroundColors = (tokens: typeof defaultTokens) => {
  const componentTokens = getComponentLevelTokens(tokens);

  return COLORS.reduce((acc, name) => {
    if (name === "tab") return acc;

    return {
      ...acc,
      ...componentTokens(name, "foreground"),
      ...componentTokens(name, "foregroundInverted"),
      ...componentTokens(name, "foregroundHover"),
      ...componentTokens(name, "foregroundActive"),
    };
  }, {});
};

const getBackgroundColors = (tokens: typeof defaultTokens) => {
  const componentTokens = getComponentLevelTokens(tokens);

  return COLORS.reduce(
    (acc, name) => {
      return {
        ...acc,
        ...componentTokens(name, "background"),
        ...componentTokens(name, "backgroundHover"),
        ...componentTokens(name, "backgroundActive"),
      };
    },
    {
      "elevation-flat": tokens.elevationFlatBackground,
      "elevation-suppressed": tokens.elevationSuppressedBackground,
      "elevation-fixed": tokens.elevationFixedBackground,
      "elevation-fixed-reverse": tokens.elevationFixedReverseBackground,
      "elevation-flat-border-color": tokens.elevationFlatBorderColor,
    },
  );
};

export default function orbitTailwindPreset(options?: Options): Config {
  const { disablePreflight = false } = options || {};
  // make palette colors (foundation colors) defined as css vars and make components tokens inherit it
  const tokens = getTokens(cssVarsFoundation);
  const componentTokens = getComponentLevelTokens(tokens);

  const sizeTokens = {
    "icon-small": tokens.iconSmallSize,
    "icon-medium": tokens.iconMediumSize,
    "icon-large": tokens.iconLargeSize,
    "icon-extra-large": tokens.iconExtraLargeSize,
    "form-box-small": tokens.formBoxSmallHeight,
    "form-box-normal": tokens.formBoxNormalHeight,
    "form-box-large": tokens.formBoxLargeHeight,
    "country-flag-small": tokens.countryFlagSmallHeight,
    "country-flag-medium": tokens.countryFlagMediumHeight,
  };

  return {
    content: ["auto"],
    presets: [orbitFoundationPreset(tokens)],
    corePlugins: {
      preflight: !disablePreflight,
    },
    theme: {
      extend: {
        fontSize: {
          "heading-display": tokens.headingDisplayFontSize,
          "heading-display-subtitle": tokens.headingDisplaySubtitleFontSize,
          "heading-title0": tokens.headingTitle0FontSize,
          "heading-title1": tokens.headingTitle1FontSize,
          "heading-title2": tokens.headingTitle2FontSize,
          "heading-title3": tokens.headingTitle3FontSize,
          "heading-title4": tokens.headingTitle4FontSize,
          "heading-title5": tokens.headingTitle5FontSize,
          "heading-title6": tokens.headingTitle6FontSize,
          "button-large": tokens.buttonLargeFontSize,
          "button-normal": tokens.buttonNormalFontSize,
          "button-small": tokens.buttonSmallFontSize,
          "form-element-normal": tokens.formElementNormalFontSize,
          "form-element-large": tokens.formElementLargeFontSize,
        },
        fontWeight: {
          "heading-display": tokens.headingDisplayFontWeight,
          "heading-display-subtitle": tokens.headingDisplaySubtitleFontWeight,
          "heading-title0": tokens.headingTitle0FontWeight,
          "heading-title1": tokens.headingTitle1FontWeight,
          "heading-title2": tokens.headingTitle2FontWeight,
          "heading-title3": tokens.headingTitle3FontWeight,
          "heading-title4": tokens.headingTitle4FontWeight,
          "heading-title5": tokens.headingTitle5FontWeight,
          "heading-title6": tokens.headingTitle6FontWeight,
        },
        lineHeight: {
          none: "1",
          text: tokens.lineHeightText,
          "heading-display": tokens.headingDisplayLineHeight,
          "heading-display-subtitle": tokens.headingDisplaySubtitleLineHeight,
          "heading-title0": tokens.headingTitle0LineHeight,
          "heading-title1": tokens.headingTitle1LineHeight,
          "heading-title2": tokens.headingTitle2LineHeight,
          "heading-title3": tokens.headingTitle3LineHeight,
          "heading-title4": tokens.headingTitle4LineHeight,
          "heading-title5": tokens.headingTitle5LineHeight,
          "heading-title6": tokens.headingTitle6LineHeight,
        },
        size: {
          ...sizeTokens,
        },
        height: {
          ...sizeTokens,
        },
        minHeight: {
          "icon-small": tokens.iconSmallSize,
          "icon-medium": tokens.iconMediumSize,
          "icon-large": tokens.iconLargeSize,
          "icon-extra-large": tokens.iconExtraLargeSize,
          "form-box-small": tokens.formBoxSmallHeight,
          "form-box-normal": tokens.formBoxNormalHeight,
          "form-box-large": tokens.formBoxLargeHeight,
        },
        maxHeight: {
          "illustration-extra-small": tokens.illustrationExtraSmallHeight,
          "illustration-small": tokens.illustrationSmallHeight,
          "illustration-medium": tokens.illustrationMediumHeight,
          "illustration-large": tokens.illustrationLargeHeight,
          "illustration-display": tokens.illustrationDisplayHeight,
        },
        width: {
          ...sizeTokens,
          "country-flag-small": tokens.countryFlagSmallWidth,
          "country-flag-medium": tokens.countryFlagMediumWidth,
        },
        minWidth: {
          "icon-small": tokens.iconSmallSize,
          "icon-medium": tokens.iconMediumSize,
          "icon-large": tokens.iconLargeSize,
          "icon-extra-large": tokens.iconExtraLargeSize,
          "dialog-width": tokens.dialogWidth,
        },
        maxWidth: {
          "modal-extra-small": defaultTokens.modalExtraSmallWidth,
          "modal-small": defaultTokens.modalSmallWidth,
          "modal-normal": defaultTokens.modalNormalWidth,
          "modal-large": defaultTokens.modalLargeWidth,
          "modal-extra-large": defaultTokens.modalExtraLargeWidth,
        },
        padding: {
          ...componentTokens("button", "padding"),
          ...componentTokens("formElement", "padding"),
          table: `${tokens.space300} ${tokens.space400}`,
          "button-padding-xs": tokens.buttonPaddingXSmall,
          "button-padding-sm": tokens.buttonPaddingSmall,
          "button-padding-md": tokens.buttonPaddingNormal,
          "button-padding-lg": tokens.buttonPaddingLarge,
        },
        borderRadius: {
          "dialog-desktop": tokens.dialogBorderRadiusDesktop,
          "dialog-mobile": tokens.dialogBorderRadiusMobile,
          "form-box-small": tokens.formBoxSmallHeight,
          "form-box-normal": tokens.formBoxNormalHeight,
          "form-box-large": tokens.formBoxLargeHeight,
          badge: tokens.badgeBorderRadius,
          modal: tokens.modalBorderRadius,
          "100": `var(--border-radius-100, ${tokens.borderRadius100})`, // Needed because it is customizable in brands
        },
        borderColor: {
          ...Object.keys(tokens).reduce((acc, token) => {
            if (token.startsWith("borderColor")) {
              const name = kebabCase(token).replace("border-color-", "");
              return { ...acc, [name]: tokens[token] };
            }
            // eslint-disable-next-line no-param-reassign
            acc = {
              ...acc,
              ...componentTokens(token as ExportedComponentLevelTokens, "borderColor"),
            };

            return acc;
          }, {}),
          white: tokens.paletteWhite,
          "form-element": tokens.formElementBorderColor,
          "form-element-disabled": tokens.formElementBorderColorDisabled,
          "form-element-hover": tokens.formElementBorderColorHover,
          "form-element-active": tokens.formElementBorderColorActive,
          "form-element-focus": tokens.formElementBorderColorFocus,
          "form-element-error": tokens.formElementBorderColorError,
          "form-element-error-hover": tokens.formElementBorderColorErrorHover,
        },
        backgroundImage: {
          // TODO: remove component prefix and left only bundle-*
          "button-bundle-basic-background": tokens.buttonBundleBasicBackground,
          "button-bundle-basic-background-hover": tokens.buttonBundleBasicBackgroundHover,
          "button-bundle-basic-background-active": tokens.buttonBundleBasicBackgroundActive,
          "button-bundle-medium-background": tokens.buttonBundleMediumBackground,
          "button-bundle-medium-background-hover": tokens.buttonBundleMediumBackgroundHover,
          "button-bundle-medium-background-active": tokens.buttonBundleMediumBackgroundActive,
          "button-bundle-top-background": tokens.buttonBundleTopBackground,
          "button-bundle-top-background-hover": tokens.buttonBundleTopBackgroundHover,
          "button-bundle-top-background-active": tokens.buttonBundleTopBackgroundActive,
          "badge-bundle-basic-background": tokens.badgeBundleBasicBackground,
          "badge-bundle-medium-background": tokens.badgeBundleMediumBackground,
          "badge-bundle-top-background": tokens.badgeBundleTopBackground,
          "table-shadow-right": tokens.backgroundTableShadowRight,
          "table-shadow-left": tokens.backgroundTableShadowLeft,
          "tab-bundle-basic-foreground": tokens.tabBundleBasicForeground,
          "tab-bundle-medium-foreground": tokens.tabBundleMediumForeground,
          "tab-bundle-top-foreground": tokens.tabBundleTopForeground,
        },
        boxShadow: {
          "button-active": `inset 0 0 6px 3px ${convertHexToRgba(tokens.paletteInkDark, 15)}`,
          "button-active-pale": `inset 0 0 6px 3px ${convertHexToRgba(tokens.paletteInkDark, 8)}`,
          "country-flag": tokens.countryFlagShadow,
          "form-element": tokens.formElementBoxShadow,
          "form-element-error": tokens.formElementBoxShadowError,
          "form-element-error-hover": tokens.formElementBoxShadowErrorHover,
          "form-element-hover": tokens.formElementBoxShadowHover,
          "form-element-focus": tokens.formElementFocusBoxShadow,
          switch: `inset 0 0 1px 0 rgba(7, 64, 92, 0.1),${tokens.elevationLevel1BoxShadow}`,
          "modal-scrolled": `inset 0 1px 0 ${tokens.paletteCloudNormal}, ${tokens.elevationFixedReverseBoxShadow}`,
          modal: `inset 0 0 0 transparent, ${tokens.elevationFixedReverseBoxShadow}`,
          "wizard-step-icon-hover": `0 0 0 6px ${convertHexToRgba(
            tokens.paletteProductNormal,
            20,
          )}`,
          "wizard-step-icon-active": `0 0 0 4px ${convertHexToRgba(
            tokens.paletteProductNormal,
            20,
          )}`,
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
          "pulse-zero": {
            "0%": { transform: "scale(0.01)" },
            "50%": { transform: "scale(1)" },
            "100%": { transform: "scale(0.01)" },
          },
          "toast-fade-in": {
            "0%": { opacity: "0", transform: "translateY(-20px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          "toast-fade-out": {
            "0%": { opacity: "1", transform: "translateY(0)" },
            "100%": { opacity: "0", transform: "translateY(-20px)" },
          },
          "toast-light": {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(0%)" },
          },
          "toast-light-rtl": {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(0%)" },
          },
        },
        animation: {
          "pulse-slow": "slow-pulse 2s ease-in-out 0.5s infinite",
          spinner: "spinner 0.75s linear infinite",
          loader: "loader 1.25s infinite ease-in-out",
          pulse: "pulse 1.5s infinite",
        },
        textColor: {
          ...Object.entries(getForegroundColors(tokens)).reduce((acc, [key, value]) => {
            const name = key.replace("text-", "");
            return { ...acc, [name]: value };
          }, {}),
          // overrides for specific WL
          "button-primary-foreground": generateRgba(
            "button-primary-foreground",
            defaultTokens.buttonPrimaryForeground,
          ),
          "button-primary-foreground-hover": generateRgba(
            "button-primary-foreground-hover",
            defaultTokens.buttonPrimaryForegroundHover,
          ),
          "button-primary-foreground-active": generateRgba(
            "button-primary-foreground-active",
            defaultTokens.buttonPrimaryForegroundActive,
          ),
          "button-primary-subtle-foreground": generateRgba(
            "button-primary-subtle-foreground",
            defaultTokens.buttonPrimarySubtleForeground,
          ),
          "button-primary-subtle-foreground-hover": generateRgba(
            "button-primary-subtle-foreground-hover",
            defaultTokens.buttonPrimarySubtleForegroundHover,
          ),
          "button-primary-subtle-foreground-active": generateRgba(
            "button-primary-subtle-foreground-active",
            defaultTokens.buttonPrimarySubtleForegroundActive,
          ),
        },
        backgroundColor: {
          ...getBackgroundColors(tokens),
          // overrides for specific WL
          "button-primary-background": generateRgba(
            "button-primary-background",
            defaultTokens.buttonPrimaryBackground,
          ),
          "button-primary-background-hover": generateRgba(
            "button-primary-background-hover",
            defaultTokens.buttonPrimaryBackgroundHover,
          ),
          "button-primary-background-active": generateRgba(
            "button-primary-background-active",
            defaultTokens.buttonPrimaryBackgroundActive,
          ),
        },
        spacing: {
          "safe-top": "var(--safe-area-inset-top, env(safe-area-inset-top))",
          "safe-right": "var(--safe-area-inset-right, env(safe-area-inset-right))",
          "safe-bottom": "var(--safe-area-inset-bottom, env(safe-area-inset-bottom))",
          "safe-left": "var(--safe-area-inset-left, env(safe-area-inset-left))",
        },
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
          addUtilities({
            ".scrollbar-none": {
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            },
            ".tap-color-none": {
              "-webkit-tap-highlight-color": "transparent",
              "-webkit-touch-callout": "none",
            },
          })
        );
      }),
    ],
  };
}

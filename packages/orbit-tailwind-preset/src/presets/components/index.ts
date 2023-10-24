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
import {
  kebabCase,
  getComponentLevelTokens,
  ExportedComponentLevelTokens,
} from "../foundation/helpers";
import getCssVarsFoundation from "../foundation/getCssVarsFoundation";

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

interface Options {
  /** default: true e.g. does not include default normalize styles */
  disablePreflight?: boolean;
  foundation?: CustomFoundation;
}

const getForegroundColors = (tokens: typeof defaultTokens) => {
  const componentTokens = getComponentLevelTokens(tokens);

  return COLORS.reduce((acc, name) => {
    // eslint-disable-next-line no-param-reassign
    acc = {
      ...acc,
      ...componentTokens(name, "foreground"),
      ...componentTokens(name, "foregroundInverted"),
      ...componentTokens(name, "foregroundHover"),
      ...componentTokens(name, "foregroundActive"),
    };

    return acc;
  }, {});
};

const getBackgroundColors = (tokens: typeof defaultTokens) => {
  const componentTokens = getComponentLevelTokens(tokens);

  return COLORS.reduce((acc, name) => {
    // eslint-disable-next-line no-param-reassign
    acc = {
      ...acc,
      ...componentTokens(name, "background"),
      ...componentTokens(name, "backgroundHover"),
      ...componentTokens(name, "backgroundActive"),
    };

    return acc;
  }, {});
};

const cfg = (options?: Options): Config => {
  const { disablePreflight = true, foundation = defaultFoundation } = options || {};
  // make palette colors (foundation colors) defined as css vars and make components tokens inherit it
  const cssVarsFoundation = getCssVarsFoundation(foundation);
  // @ts-expect-error TODO fix breakpoint types in tokens package
  const tokens = getTokens(cssVarsFoundation) as Tokens;
  const componentTokens = getComponentLevelTokens(tokens);

  return {
    content: ["auto"],
    presets: [orbitFoundationPreset(tokens, cssVarsFoundation)],
    corePlugins: {
      preflight: disablePreflight ? false : undefined,
    },
    theme: {
      extend: {
        screens: {
          "sm-mm": { max: `calc(${tokens.breakpointMediumMobile} - 1px)` },
          "mm-lm": {
            min: tokens.breakpointMediumMobile,
            max: `calc(${tokens.breakpointLargeMobile} - 1px)`,
          },
          "lm-tb": {
            min: tokens.breakpointLargeMobile,
            max: `calc(${tokens.breakpointTablet} - 1px)`,
          },
          "tb-de": {
            min: tokens.breakpointTablet,
            max: `calc(${tokens.breakpointDesktop} - 1px)`,
          },
          "de-ld": {
            min: tokens.breakpointDesktop,
            max: `calc(${tokens.breakpointLargeDesktop} - 1px)`,
          },
        },
        fontSize: {
          "heading-display": tokens.headingDisplayFontSize,
          "heading-display-subtitle": tokens.headingDisplaySubtitleFontSize,
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
        },
        fontWeight: {
          "heading-display": tokens.headingDisplayFontWeight,
          "heading-display-subtitle": tokens.headingDisplaySubtitleFontWeight,
          "heading-title1": tokens.headingTitle1FontWeight,
          "heading-title2": tokens.headingTitle2FontWeight,
          "heading-title3": tokens.headingTitle3FontWeight,
          "heading-title4": tokens.headingTitle4FontWeight,
          "heading-title5": tokens.headingTitle5FontWeight,
          "heading-title6": tokens.headingTitle6FontWeight,
          "table-head": String(tokens.fontWeightTableHead),
        },
        lineHeight: {
          none: "1",
          text: tokens.lineHeightText,
          heading: tokens.lineHeightHeading,
          "heading-display": tokens.headingDisplayLineHeight,
          "heading-display-subtitle": tokens.headingDisplaySubtitleLineHeight,
          "heading-title1": tokens.headingTitle1LineHeight,
          "heading-title2": tokens.headingTitle2LineHeight,
          "heading-title3": tokens.headingTitle3LineHeight,
          "heading-title4": tokens.headingTitle4LineHeight,
          "heading-title5": tokens.headingTitle5LineHeight,
          "heading-title6": tokens.headingTitle6LineHeight,
        },
        height: {
          "icon-small": tokens.iconSmallSize,
          "icon-medium": tokens.iconMediumSize,
          "icon-large": tokens.iconLargeSize,
          separator: tokens.heightSeparator,
          "form-box-small": tokens.formBoxSmallHeight,
          "form-box-normal": tokens.formBoxNormalHeight,
          "form-box-large": tokens.formBoxLargeHeight,
          "country-flag-small": tokens.countryFlagSmallHeight,
          "country-flag-medium": tokens.countryFlagMediumHeight,
        },
        minHeight: {
          "icon-small": tokens.iconSmallSize,
          "icon-medium": tokens.iconMediumSize,
          "icon-large": tokens.iconLargeSize,
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
          "icon-small": tokens.iconSmallSize,
          "icon-medium": tokens.iconMediumSize,
          "icon-large": tokens.iconLargeSize,
          "modal-extra-small-width": tokens.modalExtraSmallWidth,
          "modal-small-width": tokens.modalSmallWidth,
          "modal-normal-width": tokens.modalNormalWidth,
          "modal-large-width": tokens.modalLargeWidth,
          "modal-extra-large-width": tokens.modalExtraLargeWidth,
          "form-box-small": tokens.formBoxSmallHeight,
          "form-box-normal": tokens.formBoxNormalHeight,
          "form-box-large": tokens.formBoxLargeHeight,
          "country-flag-small": tokens.countryFlagSmallWidth,
          "country-flag-medium": tokens.countryFlagMediumWidth,
        },
        minWidth: {
          "icon-small": tokens.iconSmallSize,
          "icon-medium": tokens.iconMediumSize,
          "icon-large": tokens.iconLargeSize,
          "dialog-width": tokens.dialogWidth,
        },
        padding: {
          ...componentTokens("button", "padding"),
          ...componentTokens("formElement", "padding"),
          table: tokens.paddingTable,
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
        },
        boxShadow: {
          "button-focus": tokens.boxShadowButtonFocus,
          "button-active": `inset 0 0 6px 3px ${convertHexToRgba(tokens.paletteInkDark, 15)}`,
          "button-active-pale": `inset 0 0 6px 3px ${convertHexToRgba(tokens.paletteInkDark, 8)}`,
          "country-flag": tokens.countryFlagShadow,
          "form-element": tokens.formElementBoxShadow,
          "form-element-error": tokens.formElementBoxShadowError,
          "form-element-error-hover": tokens.formElementBoxShadowErrorHover,
          "form-element-hover": tokens.formElementBoxShadowHover,
          "form-element-focus": tokens.formElementFocusBoxShadow,
          switch: `inset 0 0 1px 0 rgba(7, 64, 92, 0.1),${tokens.boxShadowAction}`,
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
        textColor: {
          ...Object.entries(getForegroundColors(tokens)).reduce((acc, [key, value]) => {
            const name = key.replace("text-", "");
            return { ...acc, [name]: value };
          }, {}),
          // overrides for specific WL
          "button-primary-foreground": `var(--button-primary-foreground, ${tokens.buttonPrimaryForeground})`,
          "button-primary-foreground-hover": `var(--button-primary-foreground-hover, ${tokens.buttonPrimaryForegroundHover})`,
          "button-primary-foreground-active": `var(--button-primary-foreground-active, ${tokens.buttonPrimaryForegroundActive})`,
          "button-primary-subtle-foreground": `var(--button-primary-subtle-foreground, ${tokens.buttonPrimarySubtleForeground})`,
          "button-primary-subtle-foreground-hover": `var(--button-primary-subtle-foreground-hover, ${tokens.buttonPrimarySubtleForegroundHover})`,
          "button-primary-subtle-foreground-active": `var(--button-primary-subtle-foreground-active, ${tokens.buttonPrimarySubtleForegroundActive})`,
        },
        backgroundColor: {
          ...getBackgroundColors(tokens),
          // overrides for specific WL
          "button-primary-background": `var(--button-primary-background, ${tokens.buttonPrimaryBackground})`,
          "button-primary-background-hover": `var(--button-primary-background-hover, ${tokens.buttonPrimaryBackgroundHover})`,
          "button-primary-background-active": `var(--button-primary-background-active, ${tokens.buttonPrimaryBackgroundActive})`,
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

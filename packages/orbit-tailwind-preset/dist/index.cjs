'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var orbitDesignTokens = require('@kiwicom/orbit-design-tokens');
var plugin = require('tailwindcss/plugin');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var plugin__default = /*#__PURE__*/_interopDefault(plugin);

// src/presets/foundation/index.ts
var kebabCase = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
var transformToKebabCase = (tokens) => {
  if (typeof tokens !== "object")
    return tokens;
  return Object.keys(tokens).reduce((acc, key) => {
    const kebabKey = kebabCase(key);
    const value = tokens[key];
    if (typeof value === "object") {
      acc[kebabKey] = transformToKebabCase(value);
    } else {
      acc[kebabKey] = value;
    }
    return acc;
  }, {});
};
var getComponentLevelToken = (component, type) => {
  return Object.keys(orbitDesignTokens.defaultTokens).reduce((acc, key) => {
    const k = key.toLowerCase();
    const c = component.toLowerCase();
    const t = type.toLowerCase();
    if (k.startsWith(c) && k.endsWith(t)) {
      if (orbitDesignTokens.defaultTokens[key]) {
        acc[kebabCase(key)] = orbitDesignTokens.defaultTokens[key];
      }
    }
    return acc;
  }, {});
};

// src/presets/foundation/theme/defaultFoundation.ts
var transformedFoundation = transformToKebabCase(orbitDesignTokens.defaultFoundation);
var defaultFoundation_default = transformedFoundation;

// src/presets/foundation/theme/spacing.ts
var spacings = {
  none: "0px",
  0: "0px",
  xxxs: defaultFoundation_default.space.xxxsmall,
  xxs: defaultFoundation_default.space.xxsmall,
  xs: defaultFoundation_default.space.xsmall,
  sm: defaultFoundation_default.space.small,
  md: defaultFoundation_default.space.medium,
  lg: defaultFoundation_default.space.large,
  xl: defaultFoundation_default.space.xlarge,
  xxl: defaultFoundation_default.space.xxlarge,
  xxxl: defaultFoundation_default.space.xxxlarge
};
var spacing_default = spacings;

// src/presets/foundation/theme/screens.ts
var screens = {
  sm: `${defaultFoundation_default.breakpoint["small-mobile"]}px`,
  mm: `${defaultFoundation_default.breakpoint["medium-mobile"]}px`,
  lm: `${defaultFoundation_default.breakpoint["large-mobile"]}px`,
  tb: `${defaultFoundation_default.breakpoint.tablet}px`,
  de: `${defaultFoundation_default.breakpoint.desktop}px`,
  ld: `${defaultFoundation_default.breakpoint["large-desktop"]}px`
};
var screens_default = screens;
var elevations = {
  none: "none",
  fixed: orbitDesignTokens.defaultTokens.elevationFixedBoxShadow,
  "fixed-reverse": orbitDesignTokens.defaultTokens.elevationFixedReverseBoxShadow,
  raised: orbitDesignTokens.defaultTokens.elevationRaisedBoxShadow,
  "raised-reverse": orbitDesignTokens.defaultTokens.elevationRaisedReverseBoxShadow,
  action: orbitDesignTokens.defaultTokens.elevationActionBoxShadow,
  "action-active": orbitDesignTokens.defaultTokens.elevationActionActiveBoxShadow,
  overlay: orbitDesignTokens.defaultTokens.elevationOverlayBoxShadow
};
var boxShadow_default = elevations;

// src/presets/foundation/theme/font.ts
var fonts = {
  fontSize: defaultFoundation_default["font-size"],
  fontWeight: defaultFoundation_default["font-weight"],
  fontFamily: defaultFoundation_default["font-family"]
};
var font_default = fonts;
var durations = {
  fast: orbitDesignTokens.defaultTokens.durationFast,
  normal: orbitDesignTokens.defaultTokens.durationNormal,
  slow: orbitDesignTokens.defaultTokens.durationSlow
};
var duration_default = durations;

// src/presets/foundation/index.ts
var config = {
  content: ["auto"],
  corePlugins: {
    preflight: false
  },
  theme: {
    colors: defaultFoundation_default.palette,
    borderRadius: defaultFoundation_default["border-radius"],
    screens: screens_default,
    lineHeight: defaultFoundation_default["line-height"],
    boxShadow: boxShadow_default,
    transitionDuration: duration_default,
    spacing: spacing_default,
    ...font_default,
    extend: {
      zIndex: {
        default: String(orbitDesignTokens.defaultTokens.zIndexDefault),
        sticky: String(orbitDesignTokens.defaultTokens.zIndexSticky),
        modal: String(orbitDesignTokens.defaultTokens.zIndexModal),
        overlay: String(orbitDesignTokens.defaultTokens.zIndexModalOverlay),
        drawer: String(orbitDesignTokens.defaultTokens.zIndexDrawer),
        onTop: String(orbitDesignTokens.defaultTokens.zIndexOnTheTop)
      }
    }
  }
};
var foundation_default = config;
var COLORS = [
  "button",
  "buttonLink",
  "socialButton",
  "alert",
  "icon",
  "formElement",
  "badge",
  "tag",
  "textLink",
  "text",
  "loading",
  "heading"
];
var getForegroundColors = () => {
  return COLORS.reduce((acc, name) => {
    acc = {
      ...acc,
      ...getComponentLevelToken(name, "foreground"),
      ...getComponentLevelToken(name, "foregroundInverted"),
      ...getComponentLevelToken(name, "foregroundHover"),
      ...getComponentLevelToken(name, "foregroundActive")
    };
    return acc;
  }, {});
};
var getBackgroundColors = () => {
  return COLORS.reduce((acc, name) => {
    acc = {
      ...acc,
      ...getComponentLevelToken(name, "background"),
      ...getComponentLevelToken(name, "backgroundHover"),
      ...getComponentLevelToken(name, "backgroundActive")
    };
    return acc;
  }, {});
};
var cfg = (options) => {
  const { disablePreflight = true } = options || {};
  return {
    content: ["auto"],
    presets: [src_default],
    corePlugins: {
      preflight: disablePreflight ? false : void 0
    },
    theme: {
      extend: {
        fontSize: {
          "heading-display": orbitDesignTokens.defaultTokens.headingDisplayFontSize,
          "heading-display-subtitle": orbitDesignTokens.defaultTokens.headingDisplaySubtitleFontSize,
          "heading-title1": orbitDesignTokens.defaultTokens.headingTitle1FontSize,
          "heading-title2": orbitDesignTokens.defaultTokens.headingTitle2FontSize,
          "heading-title3": orbitDesignTokens.defaultTokens.headingTitle3FontSize,
          "heading-title4": orbitDesignTokens.defaultTokens.headingTitle4FontSize,
          "heading-title5": orbitDesignTokens.defaultTokens.headingTitle5FontSize,
          "heading-title6": orbitDesignTokens.defaultTokens.headingTitle6FontSize,
          "button-large": orbitDesignTokens.defaultTokens.buttonLargeFontSize,
          "button-normal": orbitDesignTokens.defaultTokens.buttonNormalFontSize,
          "button-small": orbitDesignTokens.defaultTokens.buttonSmallFontSize,
          "form-element-normal": orbitDesignTokens.defaultTokens.formElementNormalFontSize,
          "form-element-small": orbitDesignTokens.defaultTokens.formElementSmallFontSize
        },
        fontWeight: {
          "heading-display": orbitDesignTokens.defaultTokens.headingDisplayFontWeight,
          "heading-display-subtitle": orbitDesignTokens.defaultTokens.headingDisplaySubtitleFontWeight,
          "heading-title1": orbitDesignTokens.defaultTokens.headingTitle1FontWeight,
          "heading-title2": orbitDesignTokens.defaultTokens.headingTitle2FontWeight,
          "heading-title3": orbitDesignTokens.defaultTokens.headingTitle3FontWeight,
          "heading-title4": orbitDesignTokens.defaultTokens.headingTitle4FontWeight,
          "heading-title5": orbitDesignTokens.defaultTokens.headingTitle5FontWeight,
          "heading-title6": orbitDesignTokens.defaultTokens.headingTitle6FontWeight,
          "table-head": String(orbitDesignTokens.defaultTokens.fontWeightTableHead)
        },
        lineHeight: {
          heading: orbitDesignTokens.defaultTokens.lineHeightHeading,
          "heading-display": orbitDesignTokens.defaultTokens.headingDisplayLineHeight,
          "heading-display-subtitle": orbitDesignTokens.defaultTokens.headingDisplaySubtitleLineHeight,
          "heading-title1": orbitDesignTokens.defaultTokens.headingTitle1LineHeight,
          "heading-title2": orbitDesignTokens.defaultTokens.headingTitle2LineHeight,
          "heading-title3": orbitDesignTokens.defaultTokens.headingTitle3LineHeight,
          "heading-title4": orbitDesignTokens.defaultTokens.headingTitle4LineHeight,
          "heading-title5": orbitDesignTokens.defaultTokens.headingTitle5LineHeight,
          "heading-title6": orbitDesignTokens.defaultTokens.headingTitle6LineHeight,
          checkbox: orbitDesignTokens.defaultTokens.heightCheckbox
        },
        height: {
          "icon-small": orbitDesignTokens.defaultTokens.heightIconSmall,
          "icon-medium": orbitDesignTokens.defaultTokens.heightIconMedium,
          "icon-large": orbitDesignTokens.defaultTokens.heightIconLarge,
          "input-normal": orbitDesignTokens.defaultTokens.heightInputNormal,
          separator: orbitDesignTokens.defaultTokens.heightSeparator,
          "button-small": orbitDesignTokens.defaultTokens.heightButtonSmall,
          "button-normal": orbitDesignTokens.defaultTokens.heightButtonNormal,
          "button-large": orbitDesignTokens.defaultTokens.heightButtonLarge,
          checkbox: orbitDesignTokens.defaultTokens.heightCheckbox
        },
        width: {
          "icon-small": orbitDesignTokens.defaultTokens.widthIconSmall,
          "icon-medium": orbitDesignTokens.defaultTokens.widthIconMedium,
          "icon-large": orbitDesignTokens.defaultTokens.widthIconLarge,
          checkbox: orbitDesignTokens.defaultTokens.widthCheckbox
        },
        padding: {
          ...getComponentLevelToken("button", "padding"),
          ...getComponentLevelToken("formElement", "padding"),
          table: orbitDesignTokens.defaultTokens.paddingTable
        },
        borderColor: {
          ...Object.keys(orbitDesignTokens.defaultTokens).reduce((acc, token) => {
            if (token.startsWith("borderColor")) {
              const name = kebabCase(token).replace("border-color-", "");
              return { ...acc, [name]: orbitDesignTokens.defaultTokens[token] };
            }
            acc = {
              ...acc,
              ...getComponentLevelToken(token, "borderColor")
            };
            return acc;
          }, {}),
          "radio-disabled": orbitDesignTokens.defaultTokens.paletteCloudNormal,
          white: orbitDesignTokens.defaultTokens.paletteWhite,
          "radio-hover": orbitDesignTokens.defaultTokens.paletteBlueLightActive,
          "radio-active": orbitDesignTokens.defaultTokens.paletteBlueNormal,
          "form-element": orbitDesignTokens.defaultTokens.formElementBorderColor,
          "form-element-hover": orbitDesignTokens.defaultTokens.formElementBorderColorHover,
          "form-element-active": orbitDesignTokens.defaultTokens.formElementBorderColorActive,
          "form-element-focus": orbitDesignTokens.defaultTokens.formElementBorderColorFocus,
          "form-element-error": orbitDesignTokens.defaultTokens.formElementBorderColorError
        },
        keyframes: {
          "slow-pulse": {
            "0%": { opacity: "1" },
            "50%": { opacity: "0.3" },
            "100%": { opacity: "1" }
          },
          spinner: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" }
          },
          loader: {
            "0%": { opacity: "0.3", transform: "translateY(0px)" },
            "20%": { opacity: "1", transform: "translateY(-3px)" },
            "40%": { opacity: "0.3", transform: "translateY(0px)" },
            "100%": { opacity: "0.3", transform: "translateY(0px)" }
          },
          pulse: {
            "0%": { transform: "scale(1)" },
            "50%": { transform: "scale(2)" },
            "100%": { transform: "scale(1)" }
          }
        },
        animation: {
          "pulse-slow": "slow-pulse 2s ease-in-out 0.5s infinite",
          spinner: "spinner 0.75s linear infinite",
          loader: "loader 1s 1.25s infinite ease-in-out",
          pulse: "pulse 1.5s infinite"
        },
        textColor: Object.entries(getForegroundColors()).reduce((acc, [key, value]) => {
          const name = key.replace("text-", "");
          return { ...acc, [name]: value };
        }, {}),
        backgroundColor: getBackgroundColors()
      }
    },
    plugins: [
      plugin__default.default(({ addVariant }) => {
        return addVariant("not-last", "&:not(:last-child)"), addVariant("not-first", "&:not(:first-child)"), addVariant("type-even", "&:nth-of-type(even)"), addVariant("type-odd", "&:nth-of-type(odd)"), addVariant("target-blank", "&[target='_blank']");
      })
    ]
  };
};
var components_default = cfg;

// src/index.ts
var src_default = foundation_default;

exports.default = src_default;
exports.defaultFoundation = defaultFoundation_default;
exports.orbitComponentsPreset = components_default;

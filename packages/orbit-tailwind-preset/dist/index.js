import { defaultTokens, defaultFoundation } from '@kiwicom/orbit-design-tokens';
import plugin from 'tailwindcss/plugin';

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
  return Object.keys(defaultTokens).reduce((acc, key) => {
    const k = key.toLowerCase();
    const c = component.toLowerCase();
    const t = type.toLowerCase();
    if (k.startsWith(c) && k.endsWith(t)) {
      if (defaultTokens[key]) {
        acc[kebabCase(key)] = defaultTokens[key];
      }
    }
    return acc;
  }, {});
};

// src/presets/foundation/theme/defaultFoundation.ts
var transformedFoundation = transformToKebabCase(defaultFoundation);
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
  fixed: defaultTokens.elevationFixedBoxShadow,
  "fixed-reverse": defaultTokens.elevationFixedReverseBoxShadow,
  raised: defaultTokens.elevationRaisedBoxShadow,
  "raised-reverse": defaultTokens.elevationRaisedReverseBoxShadow,
  action: defaultTokens.elevationActionBoxShadow,
  "action-active": defaultTokens.elevationActionActiveBoxShadow,
  overlay: defaultTokens.elevationOverlayBoxShadow
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
  fast: defaultTokens.durationFast,
  normal: defaultTokens.durationNormal,
  slow: defaultTokens.durationSlow
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
        default: String(defaultTokens.zIndexDefault),
        sticky: String(defaultTokens.zIndexSticky),
        modal: String(defaultTokens.zIndexModal),
        overlay: String(defaultTokens.zIndexModalOverlay),
        drawer: String(defaultTokens.zIndexDrawer),
        onTop: String(defaultTokens.zIndexOnTheTop)
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
          "heading-display": defaultTokens.headingDisplayFontSize,
          "heading-display-subtitle": defaultTokens.headingDisplaySubtitleFontSize,
          "heading-title1": defaultTokens.headingTitle1FontSize,
          "heading-title2": defaultTokens.headingTitle2FontSize,
          "heading-title3": defaultTokens.headingTitle3FontSize,
          "heading-title4": defaultTokens.headingTitle4FontSize,
          "heading-title5": defaultTokens.headingTitle5FontSize,
          "heading-title6": defaultTokens.headingTitle6FontSize,
          "button-large": defaultTokens.buttonLargeFontSize,
          "button-normal": defaultTokens.buttonNormalFontSize,
          "button-small": defaultTokens.buttonSmallFontSize,
          "form-element-normal": defaultTokens.formElementNormalFontSize,
          "form-element-small": defaultTokens.formElementSmallFontSize
        },
        fontWeight: {
          "heading-display": defaultTokens.headingDisplayFontWeight,
          "heading-display-subtitle": defaultTokens.headingDisplaySubtitleFontWeight,
          "heading-title1": defaultTokens.headingTitle1FontWeight,
          "heading-title2": defaultTokens.headingTitle2FontWeight,
          "heading-title3": defaultTokens.headingTitle3FontWeight,
          "heading-title4": defaultTokens.headingTitle4FontWeight,
          "heading-title5": defaultTokens.headingTitle5FontWeight,
          "heading-title6": defaultTokens.headingTitle6FontWeight,
          "table-head": String(defaultTokens.fontWeightTableHead)
        },
        lineHeight: {
          heading: defaultTokens.lineHeightHeading,
          "heading-display": defaultTokens.headingDisplayLineHeight,
          "heading-display-subtitle": defaultTokens.headingDisplaySubtitleLineHeight,
          "heading-title1": defaultTokens.headingTitle1LineHeight,
          "heading-title2": defaultTokens.headingTitle2LineHeight,
          "heading-title3": defaultTokens.headingTitle3LineHeight,
          "heading-title4": defaultTokens.headingTitle4LineHeight,
          "heading-title5": defaultTokens.headingTitle5LineHeight,
          "heading-title6": defaultTokens.headingTitle6LineHeight,
          checkbox: defaultTokens.heightCheckbox
        },
        height: {
          "icon-small": defaultTokens.heightIconSmall,
          "icon-medium": defaultTokens.heightIconMedium,
          "icon-large": defaultTokens.heightIconLarge,
          "input-normal": defaultTokens.heightInputNormal,
          separator: defaultTokens.heightSeparator,
          "button-small": defaultTokens.heightButtonSmall,
          "button-normal": defaultTokens.heightButtonNormal,
          "button-large": defaultTokens.heightButtonLarge,
          checkbox: defaultTokens.heightCheckbox
        },
        width: {
          "icon-small": defaultTokens.widthIconSmall,
          "icon-medium": defaultTokens.widthIconMedium,
          "icon-large": defaultTokens.widthIconLarge,
          checkbox: defaultTokens.widthCheckbox
        },
        padding: {
          ...getComponentLevelToken("button", "padding"),
          ...getComponentLevelToken("formElement", "padding"),
          table: defaultTokens.paddingTable
        },
        borderColor: {
          ...Object.keys(defaultTokens).reduce((acc, token) => {
            if (token.startsWith("borderColor")) {
              const name = kebabCase(token).replace("border-color-", "");
              return { ...acc, [name]: defaultTokens[token] };
            }
            acc = {
              ...acc,
              ...getComponentLevelToken(token, "borderColor")
            };
            return acc;
          }, {}),
          "radio-disabled": defaultTokens.paletteCloudNormal,
          white: defaultTokens.paletteWhite,
          "radio-hover": defaultTokens.paletteBlueLightActive,
          "radio-active": defaultTokens.paletteBlueNormal,
          "form-element": defaultTokens.formElementBorderColor,
          "form-element-hover": defaultTokens.formElementBorderColorHover,
          "form-element-active": defaultTokens.formElementBorderColorActive,
          "form-element-focus": defaultTokens.formElementBorderColorFocus,
          "form-element-error": defaultTokens.formElementBorderColorError
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
      plugin(({ addVariant }) => {
        return addVariant("not-last", "&:not(:last-child)"), addVariant("not-first", "&:not(:first-child)"), addVariant("type-even", "&:nth-of-type(even)"), addVariant("type-odd", "&:nth-of-type(odd)"), addVariant("target-blank", "&[target='_blank']");
      })
    ]
  };
};
var components_default = cfg;

// src/index.ts
var src_default = foundation_default;

export { src_default as default, defaultFoundation_default as defaultFoundation, components_default as orbitComponentsPreset };

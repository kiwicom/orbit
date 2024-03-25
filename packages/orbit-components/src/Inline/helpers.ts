import { SPACINGS } from "../utils/layout/consts";
import type { MediaQuery } from "./types";
import { getJustifyClasses, getAlignItemsClasses } from "../common/tailwind";
import { QUERIES } from "../utils/mediaQuery";

// TODO refactor to gap once we no longer support iOS Safari < 14.5
const spacingClasses: {
  [K in QUERIES | SPACINGS]: K extends QUERIES ? Record<SPACINGS, string> : string;
} = {
  [SPACINGS.NONE]: "",
  [SPACINGS.XXXSMALL]: "-mt-xxxs -ms-xxxs [&>*]:mt-xxxs [&>*]:ms-xxxs",
  [SPACINGS.XXSMALL]: "-mt-xxs -ms-xxs [&>*]:mt-xxs [&>*]:ms-xxs",
  [SPACINGS.XSMALL]: "-mt-xs -ms-xs [&>*]:mt-xs [&>*]:ms-xs",
  [SPACINGS.SMALL]: "-mt-sm -ms-sm [&>*]:mt-sm [&>*]:ms-sm",
  [SPACINGS.MEDIUM]: "-mt-md -ms-md [&>*]:mt-md [&>*]:ms-md",
  [SPACINGS.LARGE]: "-mt-lg -ms-lg [&>*]:mt-lg [&>*]:ms-lg",
  [SPACINGS.XLARGE]: "-mt-xl -ms-xl [&>*]:mt-xl [&>*]:ms-xl",
  [SPACINGS.XXLARGE]: "-mt-xxl -ms-xxl [&>*]:mt-xxl [&>*]:ms-xxl",
  [SPACINGS.XXXLARGE]: "-mt-xxxl -ms-xxxl [&>*]:mt-xxxl [&>*]:ms-xxxl",
  [QUERIES.LARGEDESKTOP]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.XXXSMALL]: "ld:-mt-xxxs ld:-ms-xxxs ld:[&>*]:mt-xxxs ld:[&>*]:ms-xxxs",
    [SPACINGS.XXSMALL]: "ld:-mt-xxs ld:-ms-xxs ld:[&>*]:mt-xxs ld:[&>*]:ms-xxs",
    [SPACINGS.XSMALL]: "ld:-mt-xs ld:-ms-xs ld:[&>*]:mt-xs ld:[&>*]:ms-xs",
    [SPACINGS.SMALL]: "ld:-mt-sm ld:-ms-sm ld:[&>*]:mt-sm ld:[&>*]:ms-sm",
    [SPACINGS.MEDIUM]: "ld:-mt-md ld:-ms-md ld:[&>*]:mt-md ld:[&>*]:ms-md",
    [SPACINGS.LARGE]: "ld:-mt-lg ld:-ms-lg ld:[&>*]:mt-lg ld:[&>*]:ms-lg",
    [SPACINGS.XLARGE]: "ld:-mt-xl ld:-ms-xl ld:[&>*]:mt-xl ld:[&>*]:ms-xl",
    [SPACINGS.XXLARGE]: "ld:-mt-xxl ld:-ms-xxl ld:[&>*]:mt-xxl ld:[&>*]:ms-xxl",
    [SPACINGS.XXXLARGE]: "ld:-mt-xxxl ld:-ms-xxxl ld:[&>*]:mt-xxxl ld:[&>*]:ms-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.XXXSMALL]: "de:-mt-xxxs de:-ms-xxxs de:[&>*]:mt-xxxs de:[&>*]:ms-xxxs",
    [SPACINGS.XXSMALL]: "de:-mt-xxs de:-ms-xxs de:[&>*]:mt-xxs de:[&>*]:ms-xxs",
    [SPACINGS.XSMALL]: "de:-mt-xs de:-ms-xs de:[&>*]:mt-xs de:[&>*]:ms-xs",
    [SPACINGS.SMALL]: "de:-mt-sm de:-ms-sm de:[&>*]:mt-sm de:[&>*]:ms-sm",
    [SPACINGS.MEDIUM]: "de:-mt-md de:-ms-md de:[&>*]:mt-md de:[&>*]:ms-md",
    [SPACINGS.LARGE]: "de:-mt-lg de:-ms-lg de:[&>*]:mt-lg de:[&>*]:ms-lg",
    [SPACINGS.XLARGE]: "de:-mt-xl de:-ms-xl de:[&>*]:mt-xl de:[&>*]:ms-xl",
    [SPACINGS.XXLARGE]: "de:-mt-xxl de:-ms-xxl de:[&>*]:mt-xxl de:[&>*]:ms-xxl",
    [SPACINGS.XXXLARGE]: "de:-mt-xxxl de:-ms-xxxl de:[&>*]:mt-xxxl de:[&>*]:ms-xxxl",
  },
  [QUERIES.TABLET]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.XXXSMALL]: "tb:-mt-xxxs tb:-ms-xxxs tb:[&>*]:mt-xxxs tb:[&>*]:ms-xxxs",
    [SPACINGS.XXSMALL]: "tb:-mt-xxs tb:-ms-xxs tb:[&>*]:mt-xxs tb:[&>*]:ms-xxs",
    [SPACINGS.XSMALL]: "tb:-mt-xs tb:-ms-xs tb:[&>*]:mt-xs tb:[&>*]:ms-xs",
    [SPACINGS.SMALL]: "tb:-mt-sm tb:-ms-sm tb:[&>*]:mt-sm tb:[&>*]:ms-sm",
    [SPACINGS.MEDIUM]: "tb:-mt-md tb:-ms-md tb:[&>*]:mt-md tb:[&>*]:ms-md",
    [SPACINGS.LARGE]: "tb:-mt-lg tb:-ms-lg tb:[&>*]:mt-lg tb:[&>*]:ms-lg",
    [SPACINGS.XLARGE]: "tb:-mt-xl tb:-ms-xl tb:[&>*]:mt-xl tb:[&>*]:ms-xl",
    [SPACINGS.XXLARGE]: "tb:-mt-xxl tb:-ms-xxl tb:[&>*]:mt-xxl tb:[&>*]:ms-xxl",
    [SPACINGS.XXXLARGE]: "tb:-mt-xxxl tb:-ms-xxxl tb:[&>*]:mt-xxxl tb:[&>*]:ms-xxxl",
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.XXXSMALL]: "lm:-mt-xxxs lm:-ms-xxxs lm:[&>*]:mt-xxxs lm:[&>*]:ms-xxxs",
    [SPACINGS.XXSMALL]: "lm:-mt-xxs lm:-ms-xxs lm:[&>*]:mt-xxs lm:[&>*]:ms-xxs",
    [SPACINGS.XSMALL]: "lm:-mt-xs lm:-ms-xs lm:[&>*]:mt-xs lm:[&>*]:ms-xs",
    [SPACINGS.SMALL]: "lm:-mt-sm lm:-ms-sm lm:[&>*]:mt-sm lm:[&>*]:ms-sm",
    [SPACINGS.MEDIUM]: "lm:-mt-md lm:-ms-md lm:[&>*]:mt-md lm:[&>*]:ms-md",
    [SPACINGS.LARGE]: "lm:-mt-lg lm:-ms-lg lm:[&>*]:mt-lg lm:[&>*]:ms-lg",
    [SPACINGS.XLARGE]: "lm:-mt-xl lm:-ms-xl lm:[&>*]:mt-xl lm:[&>*]:ms-xl",
    [SPACINGS.XXLARGE]: "lm:-mt-xxl lm:-ms-xxl lm:[&>*]:mt-xxl lm:[&>*]:ms-xxl",
    [SPACINGS.XXXLARGE]: "lm:-mt-xxxl lm:-ms-xxxl lm:[&>*]:mt-xxxl lm:[&>*]:ms-xxxl",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SPACINGS.NONE]: "",
    [SPACINGS.XXXSMALL]: "mm:-mt-xxxs mm:-ms-xxxs mm:[&>*]:mt-xxxs mm:[&>*]:ms-xxxs",
    [SPACINGS.XXSMALL]: "mm:-mt-xxs mm:-ms-xxs mm:[&>*]:mt-xxs mm:[&>*]:ms-xxs",
    [SPACINGS.XSMALL]: "mm:-mt-xs mm:-ms-xs mm:[&>*]:mt-xs mm:[&>*]:ms-xs",
    [SPACINGS.SMALL]: "mm:-mt-sm mm:-ms-sm mm:[&>*]:mt-sm mm:[&>*]:ms-sm",
    [SPACINGS.MEDIUM]: "mm:-mt-md mm:-ms-md mm:[&>*]:mt-md mm:[&>*]:ms-md",
    [SPACINGS.LARGE]: "mm:-mt-lg mm:-ms-lg mm:[&>*]:mt-lg mm:[&>*]:ms-lg",
    [SPACINGS.XLARGE]: "mm:-mt-xl mm:-ms-xl mm:[&>*]:mt-xl mm:[&>*]:ms-xl",
    [SPACINGS.XXLARGE]: "mm:-mt-xxl mm:-ms-xxl mm:[&>*]:mt-xxl mm:[&>*]:ms-xxl",
    [SPACINGS.XXXLARGE]: "mm:-mt-xxxl mm:-ms-xxxl mm:[&>*]:mt-xxxl mm:[&>*]:ms-xxxl",
  },
};

const getSpacingClasses = (spacing: `${SPACINGS}`, viewport?: QUERIES): string => {
  return viewport ? spacingClasses[viewport][spacing] : spacingClasses[spacing];
};

export const getTailwindClasses = (
  props: MediaQuery,
  viewport?: QUERIES,
): (string | null | undefined | (string | boolean)[])[] => {
  const { align, justify, spacing } = props;

  return [
    align && getAlignItemsClasses(align, viewport),
    justify && getJustifyClasses(justify, viewport),
    spacing && getSpacingClasses(spacing, viewport),
  ];
};

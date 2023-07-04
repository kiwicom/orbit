import { TYPE_OPTIONS } from "./consts";
import { QUERIES } from "../utils/mediaQuery/consts";

export const typeClasses: {
  [K in QUERIES | TYPE_OPTIONS]: K extends QUERIES ? Record<TYPE_OPTIONS, string> : string;
} = {
  [TYPE_OPTIONS.DISPLAY]: "text-heading-display leading-heading-display font-heading-display",
  [TYPE_OPTIONS.DISPLAYSUBTITLE]:
    "text-heading-display-subtitle leading-heading-display-subtitle font-heading-display-subtitle",
  [TYPE_OPTIONS.TITLE1]: "text-heading-title1 leading-heading-title1 font-heading-title1",
  [TYPE_OPTIONS.TITLE2]: "text-heading-title2 leading-heading-title2 font-heading-title2",
  [TYPE_OPTIONS.TITLE3]: "text-heading-title3 leading-heading-title3 font-heading-title3",
  [TYPE_OPTIONS.TITLE4]: "text-heading-title4 leading-heading-title4 font-heading-title4",
  [TYPE_OPTIONS.TITLE5]: "text-heading-title5 leading-heading-title5 font-heading-title5 uppercase",
  [TYPE_OPTIONS.TITLE6]: "text-heading-title6 leading-heading-title6 font-heading-title6",
  [QUERIES.MEDIUMMOBILE]: {
    [TYPE_OPTIONS.DISPLAY]:
      "mm:text-heading-display mm:leading-heading-display mm:font-heading-display",
    [TYPE_OPTIONS.DISPLAYSUBTITLE]:
      "mm:text-heading-display-subtitle mm:leading-heading-display-subtitle mm:font-heading-display-subtitle",
    [TYPE_OPTIONS.TITLE1]:
      "mm:text-heading-title1 mm:leading-heading-title1 mm:font-heading-title1",
    [TYPE_OPTIONS.TITLE2]:
      "mm:text-heading-title2 mm:leading-heading-title2 mm:font-heading-title2",
    [TYPE_OPTIONS.TITLE3]:
      "mm:text-heading-title3 mm:leading-heading-title3 mm:font-heading-title3",
    [TYPE_OPTIONS.TITLE4]:
      "mm:text-heading-title4 mm:leading-heading-title4 mm:font-heading-title4",
    [TYPE_OPTIONS.TITLE5]:
      "mm:text-heading-title5 mm:leading-heading-title5 mm:font-heading-title5 mm:uppercase",
    [TYPE_OPTIONS.TITLE6]:
      "mm:text-heading-title6 mm:leading-heading-title6 mm:font-heading-title6",
  },
  [QUERIES.LARGEMOBILE]: {
    [TYPE_OPTIONS.DISPLAY]:
      "lm:text-heading-display lm:leading-heading-display lm:font-heading-display",
    [TYPE_OPTIONS.DISPLAYSUBTITLE]:
      "lm:text-heading-display-subtitle lm:leading-heading-display-subtitle lm:font-heading-display-subtitle",
    [TYPE_OPTIONS.TITLE1]:
      "lm:text-heading-title1 lm:leading-heading-title1 lm:font-heading-title1",
    [TYPE_OPTIONS.TITLE2]:
      "lm:text-heading-title2 lm:leading-heading-title2 lm:font-heading-title2",
    [TYPE_OPTIONS.TITLE3]:
      "lm:text-heading-title3 lm:leading-heading-title3 lm:font-heading-title3",
    [TYPE_OPTIONS.TITLE4]:
      "lm:text-heading-title4 lm:leading-heading-title4 lm:font-heading-title4",
    [TYPE_OPTIONS.TITLE5]:
      "lm:text-heading-title5 lm:leading-heading-title5 lm:font-heading-title5 lm:uppercase",
    [TYPE_OPTIONS.TITLE6]:
      "lm:text-heading-title6 lm:leading-heading-title6 lm:font-heading-title6",
  },
  [QUERIES.TABLET]: {
    [TYPE_OPTIONS.DISPLAY]:
      "tb:text-heading-display tb:leading-heading-display tb:font-heading-display",
    [TYPE_OPTIONS.DISPLAYSUBTITLE]:
      "tb:text-heading-display-subtitle tb:leading-heading-display-subtitle tb:font-heading-display-subtitle",
    [TYPE_OPTIONS.TITLE1]:
      "tb:text-heading-title1 tb:leading-heading-title1 tb:font-heading-title1",
    [TYPE_OPTIONS.TITLE2]:
      "tb:text-heading-title2 tb:leading-heading-title2 tb:font-heading-title2",
    [TYPE_OPTIONS.TITLE3]:
      "tb:text-heading-title3 tb:leading-heading-title3 tb:font-heading-title3",
    [TYPE_OPTIONS.TITLE4]:
      "tb:text-heading-title4 tb:leading-heading-title4 tb:font-heading-title4",
    [TYPE_OPTIONS.TITLE5]:
      "tb:text-heading-title5 tb:leading-heading-title5 tb:font-heading-title5 tb:uppercase",
    [TYPE_OPTIONS.TITLE6]:
      "tb:text-heading-title6 tb:leading-heading-title6 tb:font-heading-title6",
  },
  [QUERIES.DESKTOP]: {
    [TYPE_OPTIONS.DISPLAY]:
      "de:text-heading-display de:leading-heading-display de:font-heading-display",
    [TYPE_OPTIONS.DISPLAYSUBTITLE]:
      "de:text-heading-display-subtitle de:leading-heading-display-subtitle de:font-heading-display-subtitle",
    [TYPE_OPTIONS.TITLE1]:
      "de:text-heading-title1 de:leading-heading-title1 de:font-heading-title1",
    [TYPE_OPTIONS.TITLE2]:
      "de:text-heading-title2 de:leading-heading-title2 de:font-heading-title2",
    [TYPE_OPTIONS.TITLE3]:
      "de:text-heading-title3 de:leading-heading-title3 de:font-heading-title3",
    [TYPE_OPTIONS.TITLE4]:
      "de:text-heading-title4 de:leading-heading-title4 de:font-heading-title4",
    [TYPE_OPTIONS.TITLE5]:
      "de:text-heading-title5 de:leading-heading-title5 de:font-heading-title5 de:uppercase",
    [TYPE_OPTIONS.TITLE6]:
      "de:text-heading-title6 de:leading-heading-title6 de:font-heading-title6",
  },
  [QUERIES.LARGEDESKTOP]: {
    [TYPE_OPTIONS.DISPLAY]:
      "ld:text-heading-display ld:leading-heading-display ld:font-heading-display",
    [TYPE_OPTIONS.DISPLAYSUBTITLE]:
      "ld:text-heading-display-subtitle ld:leading-heading-display-subtitle ld:font-heading-display-subtitle",
    [TYPE_OPTIONS.TITLE1]:
      "ld:text-heading-title1 ld:leading-heading-title1 ld:font-heading-title1",
    [TYPE_OPTIONS.TITLE2]:
      "ld:text-heading-title2 ld:leading-heading-title2 ld:font-heading-title2",
    [TYPE_OPTIONS.TITLE3]:
      "ld:text-heading-title3 ld:leading-heading-title3 ld:font-heading-title3",
    [TYPE_OPTIONS.TITLE4]:
      "ld:text-heading-title4 ld:leading-heading-title4 ld:font-heading-title4",
    [TYPE_OPTIONS.TITLE5]:
      "ld:text-heading-title5 ld:leading-heading-title5 ld:font-heading-title5 ld:uppercase",
    [TYPE_OPTIONS.TITLE6]:
      "ld:text-heading-title6 ld:leading-heading-title6 ld:font-heading-title6",
  },
};

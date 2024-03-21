import { QUERIES } from "../../utils/mediaQuery";

export enum ALIGN_CONTENT {
  START = "start",
  CENTER = "center",
  END = "end",
  BASELINE = "baseline",
  STRETCH = "stretch",
}

export const alignContentClasses = {
  [ALIGN_CONTENT.START]: "content-start",
  [ALIGN_CONTENT.END]: "content-end",
  [ALIGN_CONTENT.CENTER]: "content-center",
  [ALIGN_CONTENT.BASELINE]: "content-baseline",
  [ALIGN_CONTENT.STRETCH]: "content-stretch",
  [QUERIES.MEDIUMMOBILE]: {
    [ALIGN_CONTENT.START]: "mm:content-start",
    [ALIGN_CONTENT.END]: "mm:content-end",
    [ALIGN_CONTENT.CENTER]: "mm:content-center",
    [ALIGN_CONTENT.BASELINE]: "mm:content-baseline",
    [ALIGN_CONTENT.STRETCH]: "mm:content-stretch",
  },
  [QUERIES.LARGEMOBILE]: {
    [ALIGN_CONTENT.START]: "lm:content-start",
    [ALIGN_CONTENT.END]: "lm:content-end",
    [ALIGN_CONTENT.CENTER]: "lm:content-center",
    [ALIGN_CONTENT.BASELINE]: "lm:content-baseline",
    [ALIGN_CONTENT.STRETCH]: "lm:content-stretch",
  },
  [QUERIES.TABLET]: {
    [ALIGN_CONTENT.START]: "tb:content-start",
    [ALIGN_CONTENT.END]: "tb:content-end",
    [ALIGN_CONTENT.CENTER]: "tb:content-center",
    [ALIGN_CONTENT.BASELINE]: "tb:content-baseline",
    [ALIGN_CONTENT.STRETCH]: "tb:content-stretch",
  },
  [QUERIES.DESKTOP]: {
    [ALIGN_CONTENT.START]: "de:content-start",
    [ALIGN_CONTENT.END]: "de:content-end",
    [ALIGN_CONTENT.CENTER]: "de:content-center",
    [ALIGN_CONTENT.BASELINE]: "de:content-baseline",
    [ALIGN_CONTENT.STRETCH]: "de:content-stretch",
  },
  [QUERIES.LARGEDESKTOP]: {
    [ALIGN_CONTENT.START]: "ld:content-start",
    [ALIGN_CONTENT.END]: "ld:content-end",
    [ALIGN_CONTENT.CENTER]: "ld:content-center",
    [ALIGN_CONTENT.BASELINE]: "ld:content-baseline",
    [ALIGN_CONTENT.STRETCH]: "ld:content-stretch",
  },
};

const getAlignContentClasses = (align: `${ALIGN_CONTENT}`, viewport?: QUERIES): string => {
  const root = viewport ? alignContentClasses[viewport] : alignContentClasses;

  return root[align];
};

export default getAlignContentClasses;

import { QUERIES } from "../../utils/mediaQuery";

export enum GROW {
  true = "grow",
  false = "grow-0",
}

export const growClasses: {
  [K in QUERIES | GROW]: K extends QUERIES ? Record<GROW, string> : string;
} = {
  [GROW.false]: "grow-0",
  [GROW.true]: "grow",
  [QUERIES.MEDIUMMOBILE]: { [GROW.false]: "mm:grow-0", [GROW.true]: "mm:grow" },
  [QUERIES.LARGEMOBILE]: { [GROW.false]: "lm:grow-0", [GROW.true]: "lm:grow" },
  [QUERIES.TABLET]: { [GROW.false]: "tb:grow-0", [GROW.true]: "tb:grow" },
  [QUERIES.DESKTOP]: { [GROW.false]: "de:grow-0", [GROW.true]: "de:grow" },
  [QUERIES.LARGEDESKTOP]: { [GROW.false]: "ld:grow-0", [GROW.true]: "ld:grow" },
};

const getGrowClasses = (grow: boolean, viewport?: QUERIES): string => {
  const root = viewport ? growClasses[viewport] : growClasses;

  return grow ? root.grow : root["grow-0"];
};

export default getGrowClasses;

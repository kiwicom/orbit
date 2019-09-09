// @flow
import type { IsMobileViewport } from "./isMobileViewport";

const isMobileViewport: IsMobileViewport = viewport =>
  viewport === "smallMobile" || viewport === "mediumMobile" || viewport === "largeMobile";

export default isMobileViewport;

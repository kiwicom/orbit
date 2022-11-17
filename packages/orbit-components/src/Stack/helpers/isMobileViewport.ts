import type { Devices } from "../../utils/mediaQuery/types";

const isMobileViewport = (viewport: Devices): boolean =>
  viewport === "smallMobile" || viewport === "mediumMobile" || viewport === "largeMobile";

export default isMobileViewport;

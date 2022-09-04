import { Devices } from "../../utils/mediaQuery/index.d";

const isMobileViewport = (viewport: Devices): boolean =>
  viewport === "smallMobile" || viewport === "mediumMobile" || viewport === "largeMobile";

export default isMobileViewport;

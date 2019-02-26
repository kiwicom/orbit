// @flow

export const DEVICES = {
  LARGEDESKTOP: "largeDesktop",
  DESKTOP: "desktop",
  TABLET: "tablet",
  LARGEMOBILE: "largeMobile",
  MEDIUMMOBILE: "mediumMobile",
  SMALLMOBILE: "smallMobile",
};

export const DEVICES_WIDTH = {
  [DEVICES.LARGEDESKTOP]: 1200,
  [DEVICES.DESKTOP]: 992,
  [DEVICES.TABLET]: 768,
  [DEVICES.LARGEMOBILE]: 576,
  [DEVICES.MEDIUMMOBILE]: 414,
  [DEVICES.SMALLMOBILE]: 0,
};

export const QUERIES = {
  largeDesktop: { min: DEVICES_WIDTH.largeDesktop },
  desktop: { min: DEVICES_WIDTH.desktop },
  tablet: { min: DEVICES_WIDTH.tablet },
  largeMobile: { min: DEVICES_WIDTH.largeMobile },
  mediumMobile: { min: DEVICES_WIDTH.mediumMobile },
};

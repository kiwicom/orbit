// @flow

export const DEVICES = {
  largeDesktop: 1400,
  desktop: 1200,
  tablet: 992,
  largeMobile: 600,
  mediumMobile: 414,
  smallMobile: 0,
};

export const QUERIES = {
  largeDesktop: { min: DEVICES.largeDesktop },
  desktop: { min: DEVICES.desktop },
  tablet: { min: DEVICES.tablet },
  largeMobile: { min: DEVICES.largeMobile },
  mediumMobile: { min: DEVICES.mediumMobile },
};

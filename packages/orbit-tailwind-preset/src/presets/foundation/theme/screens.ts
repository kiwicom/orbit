import foundation from "./defaultFoundation";

const screens = {
  sm: `${foundation.breakpoint["small-mobile"]}px`,
  mm: `${foundation.breakpoint["medium-mobile"]}px`,
  lm: `${foundation.breakpoint["large-mobile"]}px`,
  tb: `${foundation.breakpoint.tablet}px`,
  de: `${foundation.breakpoint.desktop}px`,
  ld: `${foundation.breakpoint["large-desktop"]}px`,
};

export default screens;

// @flow
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

const mediaQueries = {
  widthMediaQueryMediumMobile: 414,
  widthMediaQueryLargeMobile: 576,
  widthMediaQueryTablet: 768,
  widthMediaQueryDesktop: 992,
  widthMediaQueryLargeDesktop: 1200,
};

export default {
  orbit: { ...defaultTokens, ...mediaQueries },
  rtl: false,
};

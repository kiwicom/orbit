// @flow
import getSizeToken from "./getSizeToken";
import getPadding from "./getPadding";

const getTransition = ({ theme }) => `all ${theme.orbit.durationFast} ease-in-out !important`;

const getFontWeight = ({ theme }) => theme.orbit.fontWeightBold;

const getCommonProps = ({ width, ...props }) => {
  return {
    ...getSizeToken(props),
    width,
    padding: getPadding(props),
    transition: getTransition(props),
    fontWeight: getFontWeight(props),
  };
};

export default getCommonProps;

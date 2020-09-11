// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import mediaQueries from "../utils/mediaQuery";
import { DEVICES } from "../utils/mediaQuery/consts";

import type { Props } from "./index";

const StyledBox = styled(({ className, as: Element, children, dataTest }) => (
  <Element className={className} data-test={dataTest}>
    {children}
  </Element>
))`
  // just apply all mediaQueries
  // smallMobile - default values are not mediaQuery and needs to be rendered differently
`;

StyledBox.defaultProps = {
  theme: defaultTheme,
};

const Box = (props: Props) => {
  // Props fro smallMobile
  const {
    as = "div",
    mediumMobile,
    largeMobile,
    tablet,
    desktop,
    largeDesktop,
    ...smallMobile
  } = props;
  // Others
  const { dataTest, children } = props;

  console.log("smallmobile", smallMobile);

  return (
    <StyledBox
      dataTest={dataTest}
      smallMobile={smallMobile}
      mediumMobile={mediumMobile}
      largeMobile={largeMobile}
      tablet={tablet}
      desktop={desktop}
      largeDesktop={largeDesktop}
      as={as}
    >
      {children}
    </StyledBox>
  );
};
export default Box;

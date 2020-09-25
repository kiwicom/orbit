// @flow
import styled from "styled-components";
import * as React from "react";

import transition from "../../../utils/transition";
import { CardElement } from "../../../Card/helpers/mixins";
import defaultTheme from "../../../defaultTheme";
import { getBorder, getBorderRadius } from "../../../Card/helpers/borders";

import type { Props } from ".";

const StyledCardWrapper = styled.div`
  ${CardElement};
  border: ${getBorder};
  border-radius: ${getBorderRadius};
  transition: ${transition(["margin"], "fast", "ease-in-out")};
  margin: ${({ theme }) => theme.orbit.spaceXSmall} 0;
`;

StyledCardWrapper.defaultProps = {
  theme: defaultTheme,
};

const CardWrapper = ({
  children,
  bottomBorder,
  roundedBottom,
  roundedTop,
  expanded,
  noBorderTop,
  dataTest,
  noPadding,
  expandable,
  initialExpanded,
}: Props) => (
  <StyledCardWrapper
    bottomBorder={bottomBorder}
    expanded={expanded || initialExpanded}
    data-test={dataTest}
    noBorderTop={noBorderTop}
    expandable={expandable}
    noPadding={noPadding}
    roundedBottom={roundedBottom}
    roundedTop={roundedTop}
  >
    {children}
  </StyledCardWrapper>
);

export default CardWrapper;

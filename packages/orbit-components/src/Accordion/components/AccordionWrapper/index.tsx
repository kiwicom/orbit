import styled from "styled-components";
import React from "react";

import { CardElement } from "../../../Card/helpers/mixins";
import { getBorder, getBorderRadius } from "../../../Card/helpers/borders";
import type { Props } from "./types";
import defaultTheme from "../../../defaultTheme";

const StyledAccordionWrapper = styled.div<{ expanded?: boolean }>`
  ${CardElement};
  border: ${getBorder};
  border-radius: ${getBorderRadius};
  transition: margin ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  margin: ${({ theme }) => theme.orbit.spaceXSmall} 0;
`;

StyledAccordionWrapper.defaultProps = {
  theme: defaultTheme,
};

const AccordionWrapper = ({ dataTest, initialExpanded, ...props }: Props) => (
  <StyledAccordionWrapper
    {...props}
    expanded={props.expanded || initialExpanded}
    data-test={dataTest}
  />
);

export default AccordionWrapper;
export { Props };

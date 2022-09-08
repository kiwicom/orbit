import styled from "styled-components";
import React from "react";

import { CardElement } from "../../../Card/helpers/mixins";
import { getBorder, getBorderRadius } from "../../../Card/helpers/borders";
import { Props } from "./types";

const StyledAccordionWrapper = styled.div<{ expanded?: boolean }>`
  ${CardElement};
  border: ${getBorder};
  border-radius: ${getBorderRadius};
  transition: margin ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  margin: ${({ theme }) => theme.orbit.spaceXSmall} 0;
`;

const AccordionWrapper = ({ dataTest, initialExpanded, ...props }: Props) => (
  <StyledAccordionWrapper
    {...props}
    expanded={props.expanded || initialExpanded}
    data-test={dataTest}
  />
);

export default AccordionWrapper;

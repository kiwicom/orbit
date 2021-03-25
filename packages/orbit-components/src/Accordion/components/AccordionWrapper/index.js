// @flow
import styled from "styled-components";
import * as React from "react";

import transition from "../../../utils/transition";
import { CardElement } from "../../../Card/helpers/mixins";
import defaultTheme from "../../../defaultTheme";
import { getBorder, getBorderRadius } from "../../../Card/helpers/borders";

import type { Props } from ".";

const StyledAccordionWrapper = styled.div`
  ${CardElement};
  border: ${getBorder};
  border-radius: ${getBorderRadius};
  transition: ${transition(["margin"], "fast", "ease-in-out")};
  margin: ${({ theme }) => theme.orbit.spaceXSmall} 0;
`;

StyledAccordionWrapper.defaultProps = {
  theme: defaultTheme,
};

const AccordionWrapper = ({ dataTest, initialExpanded, ...props }: Props): React.Node => (
  <StyledAccordionWrapper
    {...props}
    expanded={props.expanded || initialExpanded}
    data-test={dataTest}
  />
);

export default AccordionWrapper;

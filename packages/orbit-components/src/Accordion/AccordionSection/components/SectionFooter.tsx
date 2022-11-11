import React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import * as Common from "../../../common/types";

const StyledWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.orbit.spaceLarge};
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  position: sticky;
  bottom: 0;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowActionActive};
`;

StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

interface Props extends Common.Globals {
  children: React.ReactNode;
}

const AccordionSectionFooter = ({ children, dataTest }: Props) => (
  <StyledWrapper data-test={dataTest && `${dataTest}Footer`}>{children}</StyledWrapper>
);

export default AccordionSectionFooter;

import React from "react";
import styled from "styled-components";

import * as Common from "../../../common/common";

const Wrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.orbit.spaceLarge};
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  position: sticky;
  bottom: 0;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowActionActive};
`;

interface Props extends Common.Globals {
  children: React.ReactNode;
}

const AccordionSectionFooter = ({ children, dataTest }: Props) => (
  <Wrapper data-test={dataTest && `${dataTest}Footer`}>{children}</Wrapper>
);

export default AccordionSectionFooter;

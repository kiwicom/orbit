import React from "react";
import styled from "styled-components";

import * as Common from "../../../common/common";

const Wrapper = styled.div`
  padding: ${({ theme }) => `0 ${theme.orbit.spaceLarge} ${theme.orbit.spaceLarge}`};
`;

interface Props extends Common.Globals {
  children: React.ReactNode;
}

const AccordionSectionContent = ({ children, dataTest }: Props) => (
  <Wrapper data-test={dataTest && `${dataTest}Content`}>{children}</Wrapper>
);

export default AccordionSectionContent;

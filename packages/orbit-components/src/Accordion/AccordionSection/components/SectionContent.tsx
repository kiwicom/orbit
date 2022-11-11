import React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import * as Common from "../../../common/types";

const StyledWrapper = styled.div`
  padding: ${({ theme }) => `0 ${theme.orbit.spaceLarge} ${theme.orbit.spaceLarge}`};
`;

StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

interface Props extends Common.Globals {
  children: React.ReactNode;
}

const AccordionSectionContent = ({ children, dataTest }: Props) => (
  <StyledWrapper data-test={dataTest && `${dataTest}Content`}>{children}</StyledWrapper>
);

export default AccordionSectionContent;

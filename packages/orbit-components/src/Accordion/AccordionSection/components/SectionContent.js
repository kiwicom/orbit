// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `0 ${theme.orbit.spaceLarge} ${theme.orbit.spaceLarge}`};
`;

Wrapper.defaultProps = {
  theme: defaultTheme,
};

const AccordionSectionContent = ({ children, expanded, hasFooter }) => {
  return (
    <Wrapper hasFooter={hasFooter} expanded={expanded}>
      {children}
    </Wrapper>
  );
};

export default AccordionSectionContent;

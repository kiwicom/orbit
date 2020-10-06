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

type Props = {|
  children: React.Node,
  expanded: boolean,
  hasFooter: boolean,
|};

const AccordionSectionContent = ({ children, expanded, hasFooter }: Props) => {
  return (
    <Wrapper hasFooter={hasFooter} expanded={expanded}>
      {children}
    </Wrapper>
  );
};

export default AccordionSectionContent;
